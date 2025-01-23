import { defineQuery } from 'next-sanity';
import { sanityFetch } from './live';

const TOTAL_POSTS_QUERY = defineQuery(/* groq */ `count(*[
  _type == "post"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
])`);

export async function getPostsCount(category?: string) {
  try {
    const response = await sanityFetch({
      query: TOTAL_POSTS_QUERY,
      params: { category: category ?? null },
    });
    return response.data || 0;
  } catch (error) {
    console.error('Error fetching Posts Count:', error);
    return 0;
  }
}

const POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
]|order(publishedAt desc)[$startIndex...$endIndex]{
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author->{
    name,
    image,
  },
}`);

const PROJECTS_QUERY = defineQuery(/* groq */ `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[$startIndex...$endIndex]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  progress,
  body,
  shortDescription,
  author->{
    name,
    image,
  },
    stacks[]->{
    title,
    "slug": slug.current,
    image,
  }
}`);

export async function getProjects(
  startIndex: number,
  endIndex: number,
  category?: string
) {
  try {
    const response = await sanityFetch({
      query: PROJECTS_QUERY,
      params: {
        startIndex,
        endIndex,
        category: category ?? null,
      },
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching Projects:', error);
    return [];
  }
}

export async function getPosts(
  startIndex: number,
  endIndex: number,
  category?: string
) {
  try {
    const response = await sanityFetch({
      query: POSTS_QUERY,
      params: {
        startIndex,
        endIndex,
        category: category ?? null,
      },
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching Posts:', error);
    return [];
  }
}

const FEATURED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && isFeatured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
    image,
  },
}`);

export async function getFeaturedPosts(quantity: number) {
  try {
    const response = await sanityFetch({
      query: FEATURED_POSTS_QUERY,
      params: { quantity },
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching Featured Posts:', error);
    return [];
  }
}

const FEED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
]|order(isFeatured, publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
  },
}`);

export async function getPostsForFeed() {
  try {
    const response = await sanityFetch({
      query: FEED_POSTS_QUERY,
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching Posts for Feed:', error);
    return [];
  }
}

const POST_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`);

export async function getPost(slug: string) {
  try {
    const response = await sanityFetch({
      query: POST_QUERY,
      params: { slug },
    });
    return response.data || null;
  } catch (error) {
    console.error('Error fetching Post:', error);
    return null;
  }
}

const PROJECT_QUERY = defineQuery(/* groq */ `*[
  _type == "project"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  shortDescription,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`);

export async function getProject(slug: string) {
  try {
    const response = await sanityFetch({
      query: PROJECT_QUERY,
      params: { slug },
    });
    return response.data || null;
  } catch (error) {
    console.error('Error fetching Post:', error);
    return null;
  }
}

const CATEGORIES_QUERY = defineQuery(/* groq */ `*[
  _type == "category"
  && count(*[_type == "post" && defined(slug.current) && ^._id in categories[]._ref]) > 0
]|order(title asc){
  title,
  "slug": slug.current,
}`);

export async function getCategories() {
  try {
    const response = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching Categories:', error);
    return [];
  }
}
