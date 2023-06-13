import { Post } from '@/app/types/post';
import Link from 'next/link';

const BlogPosts = ({ attributes }: Post) => {

  if (!attributes) return <p>Loading...</p>

  const { title, author, createdAt, image, slug, body } = attributes;
  console.log("image", image)
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {image && (
          <figure className="relative pb-2/3">
            <img
              className="absolute object-cover w-full h-full"
              src={image}
              alt={title}
            />
          </figure>
        )}
        <div className="px-6 py-4 flex-grow">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">By {author}</p>
          <p className="text-gray-500 text-sm mb-2">{new Date(createdAt as Date).toLocaleDateString("en")}</p>
          <p className="text-gray-700">{body}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPosts;