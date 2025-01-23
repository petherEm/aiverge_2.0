import { BentoCard } from "@/components/bento-card";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Gradient } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import StackIntro from "@/components/shared-new/stack-intro";
import { Testimonials } from "@/components/testimonials";
import { Heading, Subheading } from "@/components/text";
import { urlFor } from "@/sanity/lib/image";
import { getProjects } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  description:
    "AiVerge is your partner in re-platforming your business, drive costs down, and boost revenue. Leveraging the power of AI and modern web technologies.",
};

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-extrabold tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Passion driven <span className="text-purple-700">excellence</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Re-platform your business with us. We help you build a digital-first
            business that scales and optimizes your costs with the power of AI
            and the latest opinionated technology.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

async function DarkBentoSection() {
  const featuredProjects = await getProjects(0, 10);
  console.log(featuredProjects);

  if (featuredProjects.length === 0) {
    return;
  }
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-10">
      <Container>
        <Subheading dark>PORTFOLIO</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          See our latest projects and what we are currently working on.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {featuredProjects.map((project) => (
            <BentoCard
              key={project.slug}
              dark
              slug={project.slug || "/projects"}
              eyebrow="e-commerce"
              title={project.title}
              description={project.shortDescription}
              graphic={
                <Image
                  src={project.mainImage ? urlFor(project.mainImage).url() : ""}
                  alt={project.title || "Project image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              }
              progress={project.progress ? Number(project.progress) : undefined}
              stacks={(project.stacks ?? []).map((stack) => ({
                name: stack.title ?? "Unknown Stack",
                image:
                  (stack.image
                    ? urlFor(stack.image).width(32).height(32).url()
                    : "") || "",
              }))}
              github="https://github.com/username/project"
              fade={["top"]}
              className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-b-4xl"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-12">
          <StackIntro />
          <DarkBentoSection />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
}
