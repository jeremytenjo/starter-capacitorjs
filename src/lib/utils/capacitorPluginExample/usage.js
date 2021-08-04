import CapacitorPluginExample from './'

export default function CapacitorPluginExampleUsage() {
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
      <p>CapacitorPluginExample</p>
      <br />
      {message}
    </div>
  )
}
