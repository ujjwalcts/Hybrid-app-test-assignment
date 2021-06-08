import Foundation
import Capacitor
import CoreLocation

/**
 * Geolocation plugin
 */

class GetLocationHandler: NSObject, CLLocationManagerDelegate {
  var locationManager = CLLocationManager()
  var call: CAPPluginCall

  init(call: CAPPluginCall) {
    self.call = call
    
    super.init()
    
    self.locationManager.delegate = self
    self.locationManager.requestWhenInUseAuthorization()
    if call.getBool("enableHighAccuracy", false) {
        self.locationManager.desiredAccuracy = kCLLocationAccuracyBestForNavigation
    } else {
      self.locationManager.desiredAccuracy = kCLLocationAccuracyThreeKilometers
    }
    
    self.locationManager.startUpdatingLocation()
   
  }

  public func stopUpdating() {
    self.locationManager.stopUpdatingLocation()
  }
  
  func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
    call.error(error.localizedDescription, error, [
      "message": error.localizedDescription
    ])
  }
  
  func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    if let location = locations.first  {
      let result = makePosition(location)
      call.success(result)
    } else {
      call.success()
    }
  }
  
  func makePosition(_ location: CLLocation) -> JSObject {
    var geoLocation = JSObject()
    geoLocation["lat"] = location.coordinate.latitude
    geoLocation["long"] = location.coordinate.longitude
    return geoLocation
  }
}

@objc(GeolocationCoordinatesPlugin)
public class GeolocationCoordinatesPlugin: CAPPlugin {
    private let implementation = GeolocationCoordinates()
    
    var locationHandler: GetLocationHandler?
    @objc func getCoordinates(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
         self.locationHandler = GetLocationHandler(call: call)
       }
     }
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
