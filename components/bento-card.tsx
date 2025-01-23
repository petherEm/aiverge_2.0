"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { clsx } from "clsx";
import { Subheading } from "./text";

interface Stack {
  name: string;
  image: string;
}

interface BentoPortfolioCardProps {
  dark?: boolean;
  className?: string;
  slug?: string | undefined;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic: React.ReactNode;
  stacks?: Stack[];
  progress?: number;
  github?: string;
  fade?: ("top" | "bottom")[];
}

export function BentoCard({
  dark = false,
  className = "",
  slug,
  eyebrow,
  title,
  description,
  graphic,
  stacks,
  progress,
  github,
  fade = [],
}: BentoPortfolioCardProps) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-white shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg",
        "data-[dark]:bg-gray-800 data-[dark]:ring-white/15"
      )}
    >
      <Link href={`/projects/${slug}`} className="block h-full  z-50">
        <div className="relative h-80 shrink-0 cursor-pointer">
          {graphic}
          {fade.includes("top") && (
            <div className="absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
          )}
          {fade.includes("bottom") && (
            <div className="absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
          )}
        </div>
      </Link>
      <div className="relative p-8">
        <div className="space-y-6">
          <div>
            <Subheading as="h3" dark={dark}>
              {eyebrow}
            </Subheading>
            <p className="mt-1 text-xl/7 sm:text-2xl/8 font-medium tracking-tight text-gray-950 group-data-[dark]:text-white">
              {slug ? (
                <Link
                  href={`/projects/${slug}`}
                  className="hover:text-gray-300"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </p>
            <div className="mt-2 h-[4.5em]">
              {" "}
              {/* Fixed height container */}
              <p className="max-w-[600px] text-sm/6 text-gray-600 group-data-[dark]:text-gray-400 line-clamp-3 [display:-webkit-box] [-webkit-box-orient:vertical] [min-height:4.5em]">
                {description}
              </p>
            </div>
          </div>

          {/* Progress Section */}
          {progress !== undefined && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 group-data-[dark]:text-gray-400">
                  Progress
                </span>
                <span className="font-medium text-gray-950 group-data-[dark]:text-white">
                  {progress}%
                </span>
              </div>
              <Progress
                value={progress}
                className="h-2 bg-gray-200 group-data-[dark]:bg-gray-700 [&>div]:bg-violet-500"
              />
            </div>
          )}

          {/* Stack Feed */}
          {stacks && stacks.length > 0 && (
            <div className="space-y-2">
              <span className="text-sm text-gray-600 group-data-[dark]:text-gray-400">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {stacks.map((stack) => (
                  <div
                    key={stack.name}
                    className="relative size-8 rounded-lg bg-gray-100 p-1"
                  >
                    <Image
                      src={stack.image || "/placeholder.svg"}
                      alt={stack.name}
                      width={32}
                      height={32}
                      className="size-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GitHub Link */}
          {github && (
            <div className="relative z-20">
              <a
                href={github}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-950 group-data-[dark]:text-gray-400 group-data-[dark]:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="size-4" />
                <span>GitHub</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
