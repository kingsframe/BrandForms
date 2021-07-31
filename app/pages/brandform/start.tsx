import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Start: BlitzPage = () => {
  return <div>i am start page</div>
}

Start.suppressFirstRenderFlicker = true
Start.getLayout = (page) => <Layout title="Start">{page}</Layout>

export default Start
