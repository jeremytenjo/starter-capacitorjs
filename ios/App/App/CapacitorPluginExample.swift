import Capacitor

@objc(CapacitorPluginExample)
public class CapacitorPluginExample: CAPPlugin {
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve(["value": value])
    }
}
