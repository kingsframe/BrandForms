import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Step1: BlitzPage = () => {
  return <div className="container mx-auto px-4 sm:px-6 lg:8">i am Step1 page</div>
}

Step1.suppressFirstRenderFlicker = true
Step1.getLayout = (page) => <Layout title="Step1">{page}</Layout>

export default Step1
