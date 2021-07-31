import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Step3: BlitzPage = () => {
  return <div className="container mx-auto px-4 sm:px-6 lg:8">i am Step3 page</div>
}

Step3.suppressFirstRenderFlicker = true
Step3.getLayout = (page) => <Layout title="Step3">{page}</Layout>

export default Step3
