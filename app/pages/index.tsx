import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import Start from "app/pages/brandform/start"

const Home: BlitzPage = () => {
  return <Start />
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
