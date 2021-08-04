// https://capacitorjs.com/docs/android/custom-code
import { WebPlugin, registerPlugin } from '@capacitor/core'

class CapacitorPluginExample extends WebPlugin {
  async echo(value) {
    return {
      value,
      source: 'hello from the web',
    }
  }
}

export default registerPlugin('CapacitorPluginExample', {
  web: () => new CapacitorPluginExample(),
})
