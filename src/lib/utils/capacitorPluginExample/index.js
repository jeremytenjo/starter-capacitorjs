import { WebPlugin, registerPlugin } from '@capacitor/core'

class CapacitorPluginExample extends WebPlugin {
  async echo(value) {
    return {
      value,
      source: 'hello web',
    }
  }
}

export default registerPlugin('CapacitorPluginExample', {
  web: () => new CapacitorPluginExample(),
})
