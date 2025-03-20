/**
 *  This component displays:
 *      - A cover image if one is provided
 *      - The post date, formatted nicely
 *      - The post title
 *      - An excerpt from the post
 *      - A "Read More" link
 * 
 */
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default function PostCard({ post }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {post.frontMatter.coverImage && (
                <div className="relative h-48">
                    <Image 
                        src={post.frontMatter.coverImage}
                        alt={post.frontMatter.title}
                        fill
                        style={{ objectFit: 'cover' }}                    
                    />
                </div>
            )}
            <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">
                    {format(new Date(post.frontMatter.date), 'MMMM dd, yyyy')}
                </p>
                <h2 className="text-xl front-bold mb-2">{post.frontMatter.title}</h2>
                <p className="text-gray-700 mb-4">{post.frontMatter.excerpt}</p>
                <Link href={`/posts/${post.slug}`} className="text-indigo-600 font-medium hover:text-indigo-800">
                    Read More →
                </Link>
            </div>
        </div>
    );
}