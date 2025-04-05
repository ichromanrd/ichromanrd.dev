import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder untuk proyek portfolio */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Proyek akan segera ditambahkan
            </h2>
            <p className="text-gray-600 mb-4">
              Saat ini sedang dalam proses pengumpulan dan dokumentasi proyek-proyek
              yang telah dikerjakan.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const Head: HeadFC = () => <title>Portfolio</title> 