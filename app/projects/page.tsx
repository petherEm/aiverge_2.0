import Image from "next/image";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Heading, Lead, Subheading } from "@/components/text";
import { urlFor } from "@/sanity/lib/image";
import {
  getCategories,
  getPostsCount,
  getProjects,
} from "@/sanity/lib/queries";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import dayjs from "dayjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "See our latest projects and learn how we're helping businesses grow.",
};

const postsPerPage = 5;

async function FeaturedPosts() {
  const featuredProjects = await getProjects(0, 3);

  if (featuredProjects.length === 0) {
    return;
  }

  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
        <ProjectGrid featuredProjects={featuredProjects} />
      </Container>
    </div>
  );
}

async function Categories({ selected }: { selected?: string }) {
  const categories = await getCategories();
  console.log(categories);

  if (categories.length === 0) {
    return;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            "All categories"}
          <ChevronUpDownIcon className="size-4 fill-slate-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem,1fr] items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-[selected]:block" />
              <p className="col-start-2 text-sm/6">All categories</p>
            </Link>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px,1fr] items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <Button variant="outline" href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        RSS Feed
      </Button>
    </div>
  );
}

async function Posts({ page, category }: { page: number; category?: string }) {
  const projects = await getProjects(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category
  );

  if (projects.length === 0 && (page > 1 || category)) {
    notFound();
  }

  if (projects.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>;
  }

  return (
    <div className="mt-6">
      {projects.map((project) => (
        <div
          key={project.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
              {dayjs(project.publishedAt).format("dddd, MMMM D, YYYY")}
            </div>
            {project.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {project.author.image && (
                  <Image
                    alt=""
                    src={urlFor(project.author.image)
                      .width(64)
                      .height(64)
                      .url()}
                    width={64}
                    height={64}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {project.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium">{project.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{project.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${project.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function Pagination({
  page,
  category,
}: {
  page: number;
  category?: string;
}) {
  function url(page: number) {
    const params = new URLSearchParams();

    if (category) params.set("category", category);
    if (page > 1) params.set("page", page.toString());

    return params.size !== 0 ? `/blog?${params.toString()}` : "/blog";
  }

  const totalPosts = await getPostsCount(category);
  const hasPreviousPage = page - 1;
  const previousPageUrl = hasPreviousPage ? url(page - 1) : undefined;
  const hasNextPage = page * postsPerPage < totalPosts;
  const nextPageUrl = hasNextPage ? url(page + 1) : undefined;
  const pageCount = Math.ceil(totalPosts / postsPerPage);

  if (pageCount < 2) {
    return;
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              "size-7 rounded-lg text-center text-sm/7 font-medium",
              "data-[hover]:bg-gray-100",
              "data-[active]:shadow data-[active]:ring-1 data-[active]:ring-black/10",
              "data-[active]:data-[hover]:bg-gray-50"
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

export default async function TechCorner({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await searchParams before accessing its properties
  const params = await searchParams;

  const page =
    "page" in params
      ? typeof params.page === "string" && Number.parseInt(params.page) > 1
        ? Number.parseInt(params.page)
        : notFound()
      : 1;

  const category =
    typeof params.category === "string" ? params.category : undefined;

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Projects</Subheading>
        <Heading as="h1" className="mt-2">
          See our latest projects and tech exploration.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Stay informed with product updates, company news, and insights on how
          to sell smarter at your company.
        </Lead>
      </Container>
      {page === 1 && !category && <FeaturedPosts />}
      <Container className="mt-16 pb-24">
        <Categories selected={category} />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>
      <Footer />
    </main>
  );
}
