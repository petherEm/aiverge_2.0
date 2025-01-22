import { clsx } from "clsx";

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4"
      )}
    >
      <img
        alt="Next.js"
        src="/logo-cloud/nextjs.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />{" "}
      <img
        alt="React.js"
        src="/logo-cloud/reactjs.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="OpenAI"
        src="/logo-cloud/openai.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Python"
        src="/logo-cloud/python.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="JS"
        src="/logo-cloud/js.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Sanity"
        src="/logo-cloud/sanity.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Medusa"
        src="/logo-cloud/medusa.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Vercel"
        src="/logo-cloud/vercel.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Prisma"
        src="/logo-cloud/prisma.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  );
}
