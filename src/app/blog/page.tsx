import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
	const posts = getPosts();
	return (
		<main>
			<h1>Welcome to my blog</h1>
			<h2>Blog posts</h2>
			<ul className="flex flex-col gap-4">
				{posts.map((post) => {
					return (
						<li key={post.slug} className="flex flex-col border border-solid">
							<Link href={`/blog/${post.slug}`}>{post.title}</Link>
							<Link href={`/blog/category/${post.cat}`}>{post.cat}</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
