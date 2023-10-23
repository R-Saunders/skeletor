import Link from "next/link";
import { getPosts, getCategories } from "@/lib/posts";

type CategoryParams = {
	params: {
		catslug: string;
	};
};

export function generateStaticParams() {
	const categories = getCategories();
	// return categories.map(())
}

export default function PostsByCat() {
	const posts = getPosts();
	console.log(posts);
	return (
		<main>
			<h1>Welcome to my blog</h1>
			<h2>Blog posts</h2>
			<ul>
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
