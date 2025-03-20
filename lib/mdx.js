/**
 *  This utility file provides functions to:
 *      - Get all post slugs (URL-friendly identifiers)
 *      - Get a post by its slug
 *      - Get all posts sorted by date
 *      - Serialize MDX content for rendering
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// Define the posts directory
const postsDirectory = path.join(process.cwd(), 'posts')

// Get all post slugs
export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

// Get post content by slug
export function getPostBySlug(slug) {
    const realSlug = slug.replace(/\,mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata and content
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        frontMatter: data,
        content,
    };
}

// Get all posts sorted by date
export function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));

    return posts;
}

// Serialize MDX content
export async function serializeMdx(source) {
    const mdxSource = await serialize(source, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
        },
    });

    return mdxSource
}
