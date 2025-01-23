import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Heading, Subheading } from "@/components/text";
import { urlFor } from "@/sanity/lib/image";
import { getPost, getProject } from "@/sanity/lib/queries";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";
import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import CodeBlock from "@/components/code-block";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);

  return project ? { title: project.title, description: project.excerpt } : {};
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = (await getProject(resolvedParams.slug)) || notFound();

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">
          {dayjs(project.publishedAt).format("dddd, MMMM D, YYYY")}
        </Subheading>
        <Heading as="h1" className="mt-2">
          {project.title}
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {project.author && (
              <div className="flex items-center gap-3">
                {project.author.image && (
                  <Image
                    alt=""
                    width={64}
                    height={64}
                    src={urlFor(project.author.image).size(64, 64).url()}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {project.author.name}
                </div>
              </div>
            )}
            {Array.isArray(project.categories) && (
              <div className="flex flex-wrap gap-2">
                {project.categories.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/blog?category=${project.slug}`}
                    className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              {project.mainImage && (
                <Image
                  alt={project.mainImage.alt || ""}
                  width={2016}
                  height={1344}
                  src={urlFor(project.mainImage).size(2016, 1344).url()}
                  className="mb-10 aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
                />
              )}
              {project.body && (
                <PortableText
                  value={project.body}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="my-10 text-base/8 first:mt-0 last:mb-0">
                          {children}
                        </p>
                      ),
                      h2: ({ children }) => (
                        <h2 className="mb-10 mt-12 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
                          {children}
                        </h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
                          {children}
                        </blockquote>
                      ),
                    },
                    types: {
                      image: ({ value }) => (
                        <Image
                          alt={value.alt || ""}
                          width={2000}
                          height={2000}
                          src={urlFor(value).width(2000).url()}
                          className="w-full rounded-2xl"
                        />
                      ),
                      code: ({ value }) => {
                        const { code, language } = value; // Extract code and language
                        console.log("CODE AND LANG", { code, language });
                        return (
                          <CodeBlock
                            value={{
                              code: code || "typescript", // Fallback to an empty string if code is missing
                              language: language || "text", // Fallback to "text" if language is missing
                            }}
                          />
                        );
                      },
                      separator: ({ value }) => {
                        switch (value.style) {
                          case "line":
                            return (
                              <hr className="my-8 border-t border-gray-200" />
                            );
                          case "space":
                            return <div className="my-8" />;
                          default:
                            return null;
                        }
                      },
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => {
                        return (
                          <li className="my-2 pl-2 has-[br]:mb-8">
                            {children}
                          </li>
                        );
                      },
                      number: ({ children }) => {
                        return (
                          <li className="my-2 pl-2 has-[br]:mb-8">
                            {children}
                          </li>
                        );
                      },
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-950">
                          {children}
                        </strong>
                      ),
                      code: ({ children }) => (
                        <>
                          <CodeBlock
                            value={{ code: String(children), language: "text" }}
                          />
                        </>
                      ),
                      link: ({ value, children }) => {
                        return (
                          <Link
                            href={value.href}
                            className="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-[hover]:decoration-gray-600"
                          >
                            {children}
                          </Link>
                        );
                      },
                    },
                  }}
                />
              )}
              <div className="mt-10">
                <Button variant="outline" href="/blog">
                  <ChevronLeftIcon className="size-4" />
                  Back to blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
