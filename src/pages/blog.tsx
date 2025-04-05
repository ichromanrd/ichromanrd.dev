import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const BlogPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="space-y-12">
          <article className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <a href="/blog/clean-architecture-spring-boot" className="hover:text-primary-600 transition-colors">
                Implementing Clean Architecture in Spring Boot Applications
              </a>
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <time>March 15, 2024</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <p className="text-gray-600 mb-4">
              An in-depth exploration of implementing Clean Architecture principles in Spring Boot applications. 
              Learn how to structure your codebase for better maintainability, testability, and separation of concerns.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Spring Boot</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Architecture</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Best Practices</span>
            </div>
          </article>

          <article className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <a href="/blog/kotlin-coroutines" className="hover:text-primary-600 transition-colors">
                Mastering Kotlin Coroutines for Asynchronous Programming
              </a>
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <time>March 8, 2024</time>
              <span>·</span>
              <span>6 min read</span>
            </div>
            <p className="text-gray-600 mb-4">
              Deep dive into Kotlin Coroutines and how they simplify asynchronous programming. 
              Explore practical examples of handling concurrent operations and managing background tasks efficiently.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Kotlin</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Coroutines</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Async</span>
            </div>
          </article>

          <article className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <a href="/blog/typescript-patterns" className="hover:text-primary-600 transition-colors">
                Design Patterns in TypeScript: A Practical Guide
              </a>
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <time>March 1, 2024</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
            <p className="text-gray-600 mb-4">
              Explore common design patterns and their implementation in TypeScript. 
              Learn how to write more maintainable and scalable code using proven design principles.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">TypeScript</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Design Patterns</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">JavaScript</span>
            </div>
          </article>

          <article className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <a href="/blog/system-design" className="hover:text-primary-600 transition-colors">
                System Design Fundamentals: Building Scalable Applications
              </a>
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <time>February 22, 2024</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
            <p className="text-gray-600 mb-4">
              A comprehensive guide to system design principles and practices. 
              Discover key concepts for designing distributed systems that can handle scale and complexity.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">System Design</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Architecture</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Scalability</span>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Blog | Ichroman's Log</title> 