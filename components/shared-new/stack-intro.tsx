import Image from "next/image";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Link } from "@/components/link";

import { Heading, Lead, Subheading } from "@/components/text";

function Stack({
  name,
  description,
  imgUrl,
}: {
  name: string;
  description: string;
  imgUrl: string;
}) {
  return (
    <li className="flex items-center gap-4">
      <Image
        alt="dupa"
        width={48}
        height={48}
        src={imgUrl}
        className="size-12 rounded-full"
      />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  );
}

const StackIntro = () => {
  return (
    <Container className="mt-32 mb-32">
      <Subheading>ABOUT US</Subheading>
      <Heading as="h3" className="mt-2">
        A wealth of experience from the fintech and payments industry,
        specializing in product development, delivery and digital business
        expansion.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our team comprises seasoned professionals who have honed their skills in
        these sectors, enabling us to craft intuitive web solutions and provide
        authentic data science expertise. As enthusiasts and practitioners of
        technology and AI solutions, we are committed to leveraging modern
        technologies to deliver innovative and efficient digital services to our
        clients.
      </Lead>
      <Subheading as="h3" className="mt-24">
        OUR FOUNDATION STACK
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <Stack
          name="React.js"
          description=""
          imgUrl="/logo-cloud/reactjs.svg"
        />
        <Stack name="Next.js" description="" imgUrl="/logo-cloud/nextjs.svg" />
        <Stack name="JavaScript" description="" imgUrl="/logo-cloud/js.svg" />
        <Stack name="Python" description="" imgUrl="/logo-cloud/python.svg" />
      </ul>
      <Subheading as="h3" className="mt-24">
        KEY PLATFORMS WE USE
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <Image
            alt="Medusa.js"
            width={200}
            height={200}
            src="/logo-timeline/medusajs-color.svg"
            className="h-20"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            We use Medusa 2.0, a highly customizable and scalable digital
            commerce platform, to develop tailored e-commerce solutions for our
            clients. Medusa&apos;s suite of commerce modules efficiently manages
            essential functionalities, including inventory tracking, cart total
            calculations, payment processing, and order management. Its modular
            architecture empowers us to adapt and extend the platform to meet
            specific business requirements, enabling the creation of unique,
            high-converting applications.
          </p>
          <Button variant="ghost" className="mt-4">
            <Link href="https://medusajs.com/" target="_blank">
              Read more...
            </Link>
          </Button>
        </li>
        <li>
          <Image
            alt="Convex"
            src="/logo-timeline/convex-logo-only.svg"
            className="h-20 -ml-14"
            width={200}
            height={200}
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            We harness the capabilities of Convex, an open-source reactive
            database designed for web application developers. Convex enables us
            to build and manage backends without the complexities of traditional
            databases, facilitating rapid development and seamless scalability.
          </p>
          <Button variant="ghost" className="mt-4">
            <Link href="https://www.convex.dev/" target="_blank">
              Read more...
            </Link>
          </Button>
        </li>
        <li>
          <Image
            alt="Vercel"
            src="/logo-cloud/vercel.svg"
            className="h-20 -ml-14"
            width={200}
            height={200}
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            We work extensively with Vercel, a premier cloud platform that
            enables us to build, deploy, and manage high-performance web
            applications effortlessly. Vercel&apos;s robust infrastructure and
            developer-centric features allow us to deliver exceptional digital
            experiences tailored to our clients&apos; unique needs.
          </p>
          <Button variant="ghost" className="mt-4">
            <Link href="https://vercel.com/" target="_blank">
              Read more...
            </Link>
          </Button>
        </li>
        <li>
          <Image
            alt="Railway"
            src="/logo-cloud/railway.svg"
            className="h-20"
            width={200}
            height={200}
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            We also use Railway, a modern infrastructure platform that
            simplifies the provisioning, development, and deployment of
            applications to the cloud. Railway&apos;s user-friendly interface
            and robust features enable us to build, deploy, manage, and scale
            applications efficiently, allowing us to focus on delivering
            high-quality solutions tailored to our clients&apos; needs.
          </p>
          <Button variant="ghost" className="mt-4">
            <Link href="https://railway.com/" target="_blank">
              Read more...
            </Link>
          </Button>
        </li>
        <li>
          <Image
            alt="Sanity"
            src="/logo-cloud/sanity.svg"
            className="h-20 -ml-14"
            width={200}
            height={200}
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            We also work with Sanity, a modern headless Content Management
            System (CMS) that empowers us to create, manage, and deliver
            structured content across various platforms. Sanity&apos;s
            flexibility and real-time collaboration capabilities enable us to
            build tailored digital experiences that align with our clients&apos;
            unique needs.
          </p>
          <Button variant="ghost" className="mt-4">
            <Link href="https://www.sanity.io/" target="_blank">
              Read more...
            </Link>
          </Button>
        </li>
        <li>
          <Image
            alt="OpenAI"
            src="/logo-timeline/openai-color.svg"
            className="h-20 -ml-14"
            width={200}
            height={200}
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            We integrate with OpenAI&apos;s advanced artificial intelligence
            technologies to enhance our projects with intelligent, responsive,
            and innovative solutions. OpenAI&apos;s suite of AI models and tools
            enables us to build and scale AI-driven applications that cater to
            our clients&apos; diverse needs.
          </p>
          <Button variant="ghost" className="mt-4">
            <Link href="https://platform.openai.com/" target="_blank">
              Read more...
            </Link>
          </Button>
        </li>
        <li>
          <Image
            alt="Hugging Face"
            src="/logo-cloud/huggingface.svg"
            className="h-20"
            width={80}
            height={100}
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Hugging Face, a leading open-source platform in artificial
            intelligence, enables us to enhance our projects with
            state-of-the-art machine learning models and tools. Hugging
            Face&apos;s comprehensive suite of libraries and community-driven
            resources allows us to build, deploy, and manage AI-powered
            applications efficiently, catering to our clients&apos; diverse
            needs.
          </p>
          <Button variant="ghost" className="mt-4">
            <Link href="https://huggingface.co/" target="_blank">
              Read more...
            </Link>
          </Button>
        </li>
      </ul>
    </Container>
  );
};

export default StackIntro;
