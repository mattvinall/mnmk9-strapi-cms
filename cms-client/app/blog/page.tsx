export default async function Blog() {

  const blogPosts = await getBlogPosts();

  return (
    <section className="flex flex-col items-center justify-between p-24">
      <h1>Blog</h1>
      {/* blog posts go here */}
    </section>
  )
}

const getBlogPosts = async () => {
  const url = "http://127.0.0.1:1337";
  const res = await fetch(`${url}/api/posts`);

  if (!res?.ok) {
    throw new Error("Failed to fetch data from API. Error getting blog posts");
  }

  return res.json();
}