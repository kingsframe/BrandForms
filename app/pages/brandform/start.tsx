import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Start: BlitzPage = () => {
  return <div className="container mx-auto px-4 sm:px-6 lg:8">I am start page</div>
}

Start.suppressFirstRenderFlicker = true
Start.getLayout = (page) => <Layout title="Start">{page}</Layout>

export default Start
