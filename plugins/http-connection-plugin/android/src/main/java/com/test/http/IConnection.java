package com.test.http;

import java.io.IOException;
import java.io.InputStream;

/**
 * This interface was extracted from {@link GetHttpUrlConnection} to enable mocking that class.
 */
interface IConnection {

    InputStream getErrorStream();

    String getHeaderField(String name);

    InputStream getInputStream() throws IOException;
}
