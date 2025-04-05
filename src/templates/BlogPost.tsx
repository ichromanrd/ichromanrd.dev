import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"

interface BlogPostData {
  markdownRemark: {
    frontmatter: {
      title: string
      date: string
      tags: string[]
    }
    html: string
    timeToRead: number
  }
}

const BlogPost: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const post = data.markdownRemark
  
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.frontmatter.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time>{post.frontmatter.date}</time>
            <span>·</span>
            <span>{post.timeToRead} min read</span>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }} 
        />

        <footer className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            to="/blog"
            className="text-primary-600 hover:text-primary-700 transition-colors"
          >
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
    }
  }
`

export const Head = ({ data }: PageProps<BlogPostData>) => (
  <title>{data.markdownRemark.frontmatter.title} | Ichroman's Log</title>
) 