import { ProjectCard } from "@/components/project-card";

interface ProjectGridProps {
  featuredProjects: any[]; // Update this type according to your data structure
}

export function ProjectGrid({ featuredProjects }: ProjectGridProps) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
