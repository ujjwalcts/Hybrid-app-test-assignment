import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */


@objc(HttpPlugin)
public class HttpPlugin: CAPPlugin {
    
    
    private let implementation = Http()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc func get(_ call: CAPPluginCall) {
        let value = call.getString("url") ?? ""
        let session = URLSession(configuration: URLSessionConfiguration.default, delegate: nil, delegateQueue: nil)
        var request = URLRequest(url: URL(string:value)!)
        request.httpMethod = "GET"
//        request.setValue("text/json", forHTTPHeaderField: "Content-Type")
//        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
//        request.addValue("application/json", forHTTPHeaderField: "Accept")
        let task = session.dataTask(with: request) { (data, response, error) in
            if error != nil {
                CAPLog.print("Error", String(describing: data), String(describing: response), String(describing: error))
                call.reject("Error", "ERROR", error, [:])
                return
            }
            print("URL: ", value)
            var output = [:] as [String:Any]
            output["data"] = self.tryParseJson(data as! Data)
            call.resolve(output)
        }
        task.resume()
    }
    
    func tryParseJson(_ data: Data) -> Any {
      do {
        return try JSONSerialization.jsonObject(with: data, options: .mutableContainers)
      } catch {
        return error.localizedDescription
      }
    }
}
