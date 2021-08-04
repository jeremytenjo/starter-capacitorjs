// https://capacitorjs.com/docs/android/custom-code
// https://capacitorjs.com/docs/ios/custom-code
import { WebPlugin, registerPlugin } from '@capacitor/core'

class CapacitorPluginExample extends WebPlugin {
  async echo(value) {
    return {
      value,
      source: 'hello from the web!',
    }
  }
}

//android file android/app/src/main/java/app/capacitorstarter/app/plugins/CapacitorPluginExample.kt
export default registerPlugin('CapacitorPluginExample', {
  web: () => new CapacitorPluginExample(),
})
