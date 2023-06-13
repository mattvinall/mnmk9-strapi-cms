export interface Post {
  attributes: {
    title: string,
    body: string,
    author: string,
    slug: string
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
    image?: any
  }
}

export type BlogPost = {
    title: string,
    body: string,
    author: string,
    slug: string
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
    image?: any,
}