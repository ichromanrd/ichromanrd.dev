import * as React from "react"
import { Link } from "gatsby"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-100">
        <nav className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
              Ichroman's Log
            </Link>
            <div className="flex gap-6">
              <Link to="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">
                Blog
              </Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-primary-600 transition-colors">
                Portfolio
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="pt-8 pb-4 text-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ichroman Raditya. All rights reserved.</p>
        <p className="text-xs text-gray-500 mt-2">
          This website was crafted with the assistance of{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Claude AI
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Layout 