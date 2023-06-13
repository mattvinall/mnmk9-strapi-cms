import { Post } from "@/app/types/post";
import BlogPosts from "@/app/components/blog/blog";

export default async function Blog() {

  const posts = await getBlogPosts();

  const blogPosts = posts.data;

  console.log("blog posts", blogPosts);

  if (!blogPosts || blogPosts.length === 0) return;

  return (
    <section className="container p-24">
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-[3rem]">MNM-K9 <span className="text-[rgb(103,163,161)]">Blog</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px]">
        {/* blog posts go here */}
        {blogPosts?.map((post: Post) => {
          const { attributes } = post
          const { slug } = attributes;
          return (
            <article className="border mx-4">
              <BlogPosts key={slug} attributes={attributes} />
            </article>
          )
        })}
      </div>
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