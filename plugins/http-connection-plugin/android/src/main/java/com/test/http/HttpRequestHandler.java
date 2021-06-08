package com.test.http;

import static com.test.http.MimeType.APPLICATION_JSON;
import static com.test.http.MimeType.APPLICATION_VND_API_JSON;

import android.util.Base64;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import org.json.JSONException;
import org.json.JSONObject;

public class HttpRequestHandler {

    /**
     * Internal builder class for building a GetHttpUrlConnection
     */
    private static class HttpURLConnectionBuilder {
        private String method;
        private URL url;

        private GetHttpUrlConnection connection;

        public HttpURLConnectionBuilder setMethod(String method) {
            this.method = method;
            return this;
        }

        public HttpURLConnectionBuilder setUrl(URL url) {
            this.url = url;
            return this;
        }

        public HttpURLConnectionBuilder openConnection() throws IOException {
            connection = new GetHttpUrlConnection((HttpURLConnection) url.openConnection());
            connection.setAllowUserInteraction(false);
            connection.setRequestMethod(method);
            return this;
        }

        public GetHttpUrlConnection build() {
            return connection;
        }
    }

    public enum ResponseType {
        ARRAY_BUFFER("arraybuffer"),
        BLOB("blob"),
        DOCUMENT("document"),
        JSON("json"),
        TEXT("text");

        private final String name;

        ResponseType(String name) {
            this.name = name;
        }

        static final ResponseType DEFAULT = TEXT;

        static ResponseType parse(String value) {
            for (ResponseType responseType : values()) {
                if (responseType.name.equalsIgnoreCase(value)) {
                    return responseType;
                }
            }
            return DEFAULT;
        }
    }

    private static JSObject buildResponse(GetHttpUrlConnection connection, ResponseType responseType)
        throws IOException, JSONException {
        JSObject output = new JSObject();
        output.put("data", readData(connection, responseType));
        return output;
    }

    static Object readData(IConnection connection, ResponseType responseType) throws IOException, JSONException {
        InputStream errorStream = connection.getErrorStream();
        String contentType = connection.getHeaderField("Content-Type");

        if (errorStream != null) {
            if (isOneOf(contentType, APPLICATION_JSON, APPLICATION_VND_API_JSON)) {
                return parseJSON(readStreamAsString(errorStream));
            } else {
                return readStreamAsString(errorStream);
            }
        } else if (contentType != null && contentType.contains(APPLICATION_JSON.getValue())) {
            return parseJSON(readStreamAsString(connection.getInputStream()));
        } else {
            InputStream stream = connection.getInputStream();
            switch (responseType) {
                case ARRAY_BUFFER:
                case BLOB:
                    return readStreamAsBase64(stream);
                case JSON:
                    return parseJSON(readStreamAsString(stream));
                case DOCUMENT:
                case TEXT:
                default:
                    return readStreamAsString(stream);
            }
        }
    }

    private static boolean isOneOf(String contentType, MimeType... mimeTypes) {
        if (contentType != null) {
            for (MimeType mimeType : mimeTypes) {
                if (contentType.contains(mimeType.getValue())) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Returns a JSObject or a JSArray based on a string-ified input
     * @param input String-ified JSON that needs parsing
     * @return A JSObject or JSArray
     * @throws JSONException thrown if the JSON is malformed
     */
    private static Object parseJSON(String input) throws JSONException {
        try {
            if ("null".equals(input.trim())) {
                return JSONObject.NULL;
            } else {
                try {
                    return new JSObject(input);
                } catch (JSONException e) {
                    return new JSArray(input);
                }
            }
        } catch (JSONException e) {
            return new JSArray(input);
        }
    }

    private static String readStreamAsBase64(InputStream in) throws IOException {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            byte[] buffer = new byte[1024];
            int readBytes;
            while ((readBytes = in.read(buffer)) != -1) {
                out.write(buffer, 0, readBytes);
            }
            byte[] result = out.toByteArray();
            return Base64.encodeToString(result, 0, result.length, Base64.DEFAULT);
        }
    }

    private static String readStreamAsString(InputStream in) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(in))) {
            StringBuilder builder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                builder.append(line).append(System.getProperty("line.separator"));
            }
            return builder.toString();
        }
    }

    /**
     * Makes an Http Request based on the PluginCall parameters
     * @param call The Capacitor PluginCall that contains the options need for an Http request
     * @throws IOException throws an IO request when a connection can't be made
     * @throws URISyntaxException thrown when the URI is malformed
     * @throws JSONException thrown when the incoming JSON is malformed
     */
    public static JSObject request(PluginCall call) throws IOException, URISyntaxException, JSONException {
        String urlString = call.getString("url", "");
        String method = "GET";
        ResponseType responseType = ResponseType.parse(call.getString("responseType"));
        URL url = new URL(urlString);
        HttpURLConnectionBuilder connectionBuilder = new HttpURLConnectionBuilder()
            .setUrl(url)
            .setMethod(method)
            .openConnection();

        GetHttpUrlConnection connection = connectionBuilder.build();
        connection.connect();

        return buildResponse(connection, responseType);
    }
}
