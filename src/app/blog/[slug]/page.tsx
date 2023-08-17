import { getPostBySlug, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
	params: {
		slug: string;
	};
};

type Post = {
	title: string;
	slug: string;
	content: string;
};

// this builds all the params for ALL blog posts when the website is deployed
export function generateStaticParams() {
	const posts = getPosts();
	// generateStaticParams expects you to output an array of objects containg the [slug]
	return posts.map((post) => {
		return {
			slug: post.slug,
		};
	});
}

export default function BlogPost({ params }: BlogPostParams) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}
