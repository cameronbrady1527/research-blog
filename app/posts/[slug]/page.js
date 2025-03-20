/**
 *  This page:
 *      - Gets the post content based on the URL slug
 *      - Uses MDXRemote to render the content
 *      - Provides custom components that can be used in MDX
 *      - Adds metadata for SEO
 *      - Shows a back link, title, and date
 */

import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts, serializeMdx } from '@/lib/mdx';
import { format } from 'date-fns';
import CodeBlock from '@/components/CodeBlock';
import MLVisualizationDemo from '@/components/MLVisualizationDemo';

// Define custom components for MDX
const components = {
  pre: ({ children }) => <div>{children}</div>,
  code: ({ className, children }) => {
    return <CodeBlock className={className}>{children}</CodeBlock>
  },
  MLVisualizationDemo: MLVisualizationDemo,
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  
  return {
    title: `${post.frontMatter.title} | ML Neurological Research`,
    description: post.frontMatter.excerpt,
  };
}

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);
  const mdxSource = await serializeMdx(post.content);
  
  return (
    <article className="max-w-3xl mx-auto">
      <Link 
        href="/"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        ← Back to all posts
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.frontMatter.title}</h1>
        <p className="text-gray-600">
          {format(new Date(post.frontMatter.date), 'MMMM dd, yyyy')}
        </p>
      </div>
      
      <div className="prose prose-indigo max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}