import Link from "next/link";

const posts = [
	{
		title: "Post one",
		slug: "post-one",
		content: "This is my first post content",
	},
	{
		title: "Post two",
		slug: "post-two",
		content: "This is my second post content",
	},
	{
		title: "Post three",
		slug: "post-three",
		content: "This is my third post content",
	},
];

export default function BlogPage() {
	return (
		<main>
			<h1>Welcome to my blog</h1>
			<h2>Blog posts</h2>
			<ul>
				{posts.map((post) => {
					return (
						<li key={post.slug}>
							<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
