import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Step2: BlitzPage = () => {
  return <div className="container mx-auto px-4 sm:px-6 lg:8">i am Step2 page</div>
}

Step2.suppressFirstRenderFlicker = true
Step2.getLayout = (page) => <Layout title="Step2">{page}</Layout>

export default Step2
