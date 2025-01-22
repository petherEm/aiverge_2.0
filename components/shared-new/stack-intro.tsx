import Image from "next/image";

import { Container } from "@/components/container";

import { Heading, Lead, Subheading } from "@/components/text";

function Person({
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
      <Subheading>TECH WE EXCEL</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by industry-leaders, seasoned corporate executives, and tech
        enthusiasts.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Leveraging a wealth of experience that extends beyond our Banking and
        Payments core, we excel in creating intuitive web solutions and
        delivering authentic data science expertise. Our approach is rooted in
        modern technology, ensuring our clients receive innovative and efficient
        digital services.
      </Lead>
      <Subheading as="h3" className="mt-24">
        TECH WE EXCEL
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="React.js"
          description="React"
          imgUrl="/logo-cloud/reactjs.svg"
        />
        <Person
          name="Next.js"
          description="Next.js"
          imgUrl="/logo-cloud/nextjs.svg"
        />
        <Person
          name="JavaScript"
          description="TechNexus Ventures"
          imgUrl="/logo-cloud/js.svg"
        />
        <Person
          name="Python"
          description="Python"
          imgUrl="/logo-cloud/python.svg"
        />

        <Person
          name="Prisma"
          description="SynergyTech Equity"
          imgUrl="/logo-cloud/prisma.svg"
        />
        <Person
          name="Sanity.io"
          description="Sanity.io"
          imgUrl="/logo-cloud/sanity.svg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          imgUrl="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
      <Subheading as="h3" className="mt-24">
        PLATFORMS WE USE
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
            Remington Schwartz has been a driving force in the tech industry,
            backing bold entrepreneurs who explore grey areas in financial and
            privacy law. Their deep industry expertise and extensive political
            lobbying provide their portfolio companies with favorable regulation
            and direct access to lawmakers.
          </p>
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
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
        <li>
          <Image
            alt="Convex"
            src="/logo-cloud/nextjs.svg"
            className="h-20 -ml-14"
            width={200}
            height={200}
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
        <li>
          <Image
            alt="Convex"
            src="/logo-cloud/sanity.svg"
            className="h-20 -ml-14"
            width={200}
            height={200}
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
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
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
      </ul>
    </Container>
  );
};

export default StackIntro;
