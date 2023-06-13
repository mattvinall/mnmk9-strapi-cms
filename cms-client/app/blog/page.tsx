import { Post } from "../types/post";
import BlogPosts from "../components/blog/blog";

export default async function Blog() {

  const posts = await getBlogPosts();

  const blogPosts = posts.data;

  console.log("blog posts", blogPosts);

  if (!blogPosts || blogPosts.length === 0) return;

  return (
    <section className="flex flex-col items-center justify-between p-12">
      <h1>Blog</h1>
      {/* blog posts go here */}
      {blogPosts?.map((post: Post) => {
        const { attributes } = post
        const { slug } = attributes;
        return (
          <BlogPosts key={slug} attributes={attributes} />
        )
      })}
    </section>
  )
}

const getBlogPosts = async () => {
  const url = "http://127.0.0.1:1337";
  const res = await fetch(`${url}/api/posts`, { cache: 'no-store' });

  if (!res?.ok) {
    throw new Error("Failed to fetch data from API. Error getting blog posts");
  }

  return res.json();
}