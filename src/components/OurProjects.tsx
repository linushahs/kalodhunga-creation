import WorkCard from "./WorkCard";
import { projects } from "./utils/constants";

function OurProjects() {
  return (
    <section data-scroll-section id="projects" className="container py-10 ">
      <h2 className="w-full border-b border-gray-500 pb-6">our projects</h2>

      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-2">
        {projects.map((project, id) => (
          <WorkCard
            key={id}
            title={project.title}
            description={project.description}
            imgSrc={project.img}
          />
        ))}
      </div>
    </section>
  );
}

export default OurProjects;
