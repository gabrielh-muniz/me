import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { PROJECTS_DATA } from "@/lib/data";

export default function ProjectsSection() {
  const projectsShowcase = PROJECTS_DATA.slice(0, 2);
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <div className="mb-12 flex flex-col gap-4">
          <MotionWrapper>
            <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
              Projetos
            </h2>
            <p className="text-pretty text-muted-foreground md:text-lg">
              Uma seleção dos meus trabalhos recentes que mostram várias
              tecnologias e abordagens.
            </p>
          </MotionWrapper>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsShowcase.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <ProjectCard {...project} />
            </MotionWrapper>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="default" className="group" variant="outline">
            <a href="/projects">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
