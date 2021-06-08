package com.test.http;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;

import java.io.IOException;
import java.net.URISyntaxException;

@CapacitorPlugin(name = "Http")
public class HttpPlugin extends Plugin {

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
//        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void get(PluginCall call) {
        new Thread(
                () -> {
                    try {
                        JSObject response = HttpRequestHandler.request(call);
                        call.resolve(response);
                    } catch (IOException e) {
                        System.out.println(e.toString());
                        call.reject("IO Exception1111");
                    } catch (URISyntaxException e) {
                        System.out.println(e.toString());
                        call.reject("URI Syntax Exception");
                    } catch (JSONException e) {
                        System.out.println(e.toString());
                        call.reject("JSON Exception");
                    }
                }
        ).start();
    }
}
