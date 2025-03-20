/**
 *  This page:
 *    - Fetches all blog posts under the `getAllPosts` funciton
 *    - Displays a title and introduction
 *    - Shows all posts in a responsive grid layout
 */   

import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">ML for Neurological Disorder Prevention</h1>
        <p className="text-lg text-gray-700">Documenting my journey in developing machine learning-based early detection systems</p>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Latest Research Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}