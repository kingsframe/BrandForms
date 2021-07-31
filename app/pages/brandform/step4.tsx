import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Step4: BlitzPage = () => {
  return <div className="container mx-auto px-4 sm:px-6 lg:8">i am Step4 page</div>
}

Step4.suppressFirstRenderFlicker = true
Step4.getLayout = (page) => <Layout title="Step4">{page}</Layout>

export default Step4
