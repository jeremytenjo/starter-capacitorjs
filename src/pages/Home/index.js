import CapacitorPluginExample from '../../lib/utils/capacitorPluginExample'

export default function HomePage() {
  useEffect(() => {
    run()
  }, [])

  const run = async () => {
    const res = await CapacitorPluginExample.echo()
    console.log(res)
  }

  return <div>CapacitorPluginExample</div>
}
