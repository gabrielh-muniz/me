import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/lib/data";
import MotionWrapper from "@/components/MotionWrapper";

export default function ProjectsPage() {
  return (
    <section className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <div className=" flex flex-col gap-4">
          <MotionWrapper>
            <h1 className="text-2xl font-bold mb-8 text-center md:text-left">
              Projetos
            </h1>
          </MotionWrapper>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS_DATA.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <ProjectCard {...project} />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
