package com.test.network;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ConnectionType")
public class ConnectionTypePlugin extends Plugin {

    private ConnectionType implementation = new ConnectionType();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void getNetworkType(PluginCall call) {

        ConnectivityManager cm = (ConnectivityManager) getContext().getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo info = cm.getActiveNetworkInfo();
        if (info != null && info.isConnected() && info.getType() == ConnectivityManager.TYPE_WIFI){
            JSObject obj = new JSObject();
            obj.put("type", "WIFI");
            call.resolve(obj);
        } else{
            JSObject obj = new JSObject();
            obj.put("type", "NON-WIFI");
            call.resolve(obj);
        }

    }


}
