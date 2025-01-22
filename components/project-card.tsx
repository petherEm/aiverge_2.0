import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image"; // Assuming this is your Sanity config
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Stack {
  name: string;
  image: any; // Update this type according to your Sanity schema
}

interface Author {
  name: string;
  image: any; // Update this type according to your Sanity schema
}

interface ProjectCardProps {
  slug: string;
  title: string;
  excerpt: string;
  mainImage: {
    alt?: string;
  };
  progress?: number;
  stacks?: Stack[];
  author?: Author;
  github?: string;
}

export function ProjectCard({
  slug,
  title,
  excerpt,
  mainImage,
  progress,
  stacks,
  author,
  github,
}: ProjectCardProps) {
  return (
    <Card className="group relative flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/blog/${slug}`} className="absolute inset-0 z-10" />
      {mainImage && (
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            alt={mainImage.alt || "Project Image"}
            src={urlFor(mainImage).size(1170, 780).url() || "/placeholder.svg"}
            width={1170}
            height={780}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="flex-1">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {progress !== undefined && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 [&>div]:bg-violet-500" />
          </div>
        )}
        {stacks && stacks.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack, i) => (
              <div
                key={i}
                className="relative size-8 rounded-lg bg-muted p-1 hover:bg-muted/80"
              >
                <Image
                  src={
                    urlFor(stack.image).size(64, 64).url() || "/placeholder.svg"
                  }
                  alt="stack_image"
                  width={32}
                  height={32}
                  className="size-full object-contain"
                />
              </div>
            ))}
          </div>
        )}
        {/* {github && (
          <div className="relative z-20">
            <a
              href={github}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="size-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        )} */}
        <p>Github</p>
      </CardContent>
    </Card>
  );
}
