const CATEGORIES = [
	{ name: "Plants", catSlug: "plants" },
	{ name: "Microbiology", catSlug: "microbiology" },
	{ name: "History", catSlug: "history" },
];

const POSTS = [
	{
		title: "The Enchanting Beauty of Cherry Blossoms",
		slug: "the-enchanting-beauty-of-cherry-blossoms",
		content:
			"Cherry blossoms, also known as sakura in Japan, are among the most iconic and beloved symbols of spring. They represent the transient nature of life, as they bloom brilliantly but only for a short period. This fleeting beauty has been celebrated for centuries, inspiring poets, artists, and dreamers alike. The sight of streets, parks, and riversides covered in a blanket of soft pink petals evokes a sense of wonder and serenity. Many people from all over the world travel to places known for their cherry blossom festivals, hoping to catch a glimpse of these stunning trees in full bloom. Beyond their aesthetic appeal, cherry blossoms also have cultural significance in various regions, especially in Japan where the tradition of 'hanami' or flower viewing parties, has been observed for over a thousand years. People gather under the blossoming trees to enjoy food, drinks, songs, and the company of loved ones, creating cherished memories amidst the petals.",
		cat: "plants",
	},
	{
		title: "The Marvels of the Microscopic World",
		slug: "the-marvels-of-the-microscopic-world",
		content:
			"At the scale of the unaided eye, the world seems comprehensive and detailed, but there exists another realm, invisible to us, teeming with mysteries and wonders — the microscopic world. Beyond our natural vision, organisms like bacteria, viruses, fungi, and microscopic algae thrive and form complex ecosystems. Using microscopes, scientists have been able to unveil an intricate dance of life happening at scales smaller than a strand of human hair. These minute beings play significant roles in the grand scheme of life. For instance, phytoplankton, microscopic plants in oceans and freshwater, contribute to over half of the world's oxygen supply. Moreover, in the human gut, trillions of microorganisms assist in digestion, nutrient absorption, and immunity. Observing the microscopic world not only broadens our understanding of biology but also fosters an appreciation for the intricate and often overlooked beauty present all around us. It's a reminder that sometimes, the most profound wonders are hidden in the smallest of details.",
		cat: "microbiology",
	},
	{
		title: "Unraveling the Magic of Ancient Libraries",
		slug: "unraveling-the-magic-of-ancient-libraries",
		content:
			"Libraries, as repositories of knowledge and wisdom, have always been at the heart of civilization. Long before the digital age and the dawn of e-books, ancient libraries stood as monumental testaments to human intellect and creativity. One of the most famous among them was the Library of Alexandria in Egypt, which aimed to collect all the world's knowledge. Although it was tragically lost to fires and conflicts, its legacy as a symbol of enlightenment continues. Beyond just storing books and scrolls, these ancient libraries served as centers for learning, research, and cultural exchange. They attracted scholars, writers, and thinkers from distant lands, catalyzing the cross-pollination of ideas. In these hallowed halls, astronomy, philosophy, mathematics, and many other disciplines saw significant advancements. These libraries were not just buildings; they were the beating hearts of the cities they resided in, playing crucial roles in society's intellectual and cultural growth. Today, as we live in a world of instant digital access, it's essential to remember and honor the historical sanctuaries of knowledge that paved the way for our modern understanding of the universe and our place within it.",
		cat: "history",
	},
];

// Gets all posts
export function getPosts() {
	return POSTS;
}

// Gets one post using the posts slug
export function getPostBySlug(slug: string) {
	return POSTS.find((post) => post.slug === slug);
}

export function getCategories() {
	return CATEGORIES;
}
export function getPostsByCatSlug(catSlug: string) {
	return POSTS.filter((post) => post.cat === catSlug);
}
