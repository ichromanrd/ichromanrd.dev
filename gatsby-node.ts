import path from "path"
import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql<{
    allMarkdownRemark: {
      nodes: Array<{
        id: string
        frontmatter: {
          title: string
          date: string
          tags: string[]
        }
        fields: {
          slug: string
        }
      }>
    }
  }>(`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading your blog posts',
      result.errors
    )
    return
  }

  const posts = result.data?.allMarkdownRemark.nodes

  // Create blog posts pages
  if (posts && posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `/blog${post.fields.slug}`,
        component: path.resolve('./src/templates/BlogPost.tsx'),
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = path.relative(
      path.join(__dirname, 'content/blog'),
      node.fileAbsolutePath as string
    )

    const slug = '/' + relativeFilePath.replace(/\.md$/, '')

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
} 