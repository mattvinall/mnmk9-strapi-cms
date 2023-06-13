import { Post } from "@/app/types/post";
interface Params {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: Params) {

  const { slug } = params;

  const blogPosts = await getBlogPost(slug);

  const post = blogPosts.data[0] as Post;

  const { attributes } = post;

  const { title, author, body, createdAt } = attributes;

  return (
    <section className="flex flex-col items-center justify-between p-24">
      <div className="text-white p-6">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-500 mb-2">By {author}</p>
        <p className="text-gray-500 mb-4">{new Date(createdAt as Date).toLocaleDateString()}</p>
        <div className="prose prose-lg">{body}</div>
      </div>
    </section>
  );
}

const getBlogPost = async (slug: string) => {
  const url = "http://127.0.0.1:1337"
  const res = await fetch(`${url}/api/posts?filters[slug][$eq]=${slug}`);

  if (!res?.ok) {
    throw new Error("Failed to fetch data from API. Error getting blog posts");
  }

  return res.json();
}