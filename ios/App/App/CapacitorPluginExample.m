#import <Capacitor/Capacitor.h>

CAP_PLUGIN(CapacitorPluginExample, "Echo",
    CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
