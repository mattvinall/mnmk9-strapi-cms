interface Post {
  attributes: {
    title?: string,
    body?: string,
    author?: string,
    slug: string
    createdAt?: Date,
    updatedAt?: Date,
    publishedAt?: Date,
  }
}

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

  const { title, body, createdAt } = attributes;

  return (
    <section className="flex flex-col items-center justify-between p-24">
      <ul className="text-white">
        <li>{title}</li>
        <li>{new Date(createdAt as Date).toLocaleDateString("en")}</li>
        <li>{body}</li>
      </ul>
    </section>
  )

}

const getBlogPost = async (slug: string) => {
  const url = "http://127.0.0.1:1337"
  const res = await fetch(`${url}/api/posts?filters[slug][$eq]=${slug}`);

  console.log("response from api slug", res)

  if (!res?.ok) {
    throw new Error("Failed to fetch data from API. Error getting blog posts");
  }

  return res.json();
}