import CapacitorPluginExample from '../../lib/utils/capacitorPluginExample'

export default function HomePage() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    run()
  }, [])

  const run = async () => {
    const res = await CapacitorPluginExample.echo()
    setMessage(res.source)
  }

  return (
    <div>
      CapacitorPluginExample
      <br />
      {message}
    </div>
  )
}
