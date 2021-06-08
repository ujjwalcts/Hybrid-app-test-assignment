package com.test.geolocation;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "GeolocationCoordinates")
public class GeolocationCoordinatesPlugin extends Plugin {

    private GeolocationCoordinates implementation = new GeolocationCoordinates();
    private GpsTracker gpsTracker;

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void getCoordinates(PluginCall call) {
        gpsTracker = new GpsTracker(this.getContext());
        if(gpsTracker.canGetLocation()){
            JSObject obj = new JSObject();
            double latitude = gpsTracker.getLatitude(); 
            double longitude = gpsTracker.getLongitude();
            obj.put("lat", latitude);
            obj.put("long", longitude);
            call.resolve(obj);
        }else{
            gpsTracker.showSettingsAlert();
        }
    }
}
