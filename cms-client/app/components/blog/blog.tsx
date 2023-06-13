import { Post } from '@/app/types/post';
import { truncateBody } from '@/app/utils/truncateBody';
import Link from 'next/link';

const BlogPosts = ({ attributes }: Post) => {

  if (!attributes) return <p>Loading...</p>

  const { title, author, createdAt, slug, body } = attributes;

  return (
    <Link href={`/blog/${slug}`}>
      <div className="rounded-lg min-h-[175px] shadow-lg hover:drop-shadow-xl  transition-drop-shadow duration-300">
        <div className="px-6 py-4 flex-grow">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">By: {author}</p>
          <p className="text-gray-500 text-sm mb-2">{new Date(createdAt as Date).toLocaleDateString("en")}</p>
          <p className="text-gray-700">{truncateBody(body as string, 25)}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPosts;