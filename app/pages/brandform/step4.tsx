import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Step4: BlitzPage = () => {
  return <div>i am Step4 page</div>
}

Step4.suppressFirstRenderFlicker = true
Step4.getLayout = (page) => <Layout title="Step4">{page}</Layout>

export default Step4
