import React from 'react'
import Link from 'gatsby-link'

export default function Blog({ data }) {
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div className="blog-posts">
            {posts
                .filter((post) => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                    return (
                        <div className="blog-post-preview" key={post.id}>
                            <h2>
                                <small>{post.frontmatter.date}</small>{' '}
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </h2>
                            <p>{post.excerpt}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export const pageQuery = graphql`
    query BlogQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                    }
                }
            }
        }
    }
`
