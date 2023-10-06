import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { BiLogoGithub, BiLink } from "react-icons/bi";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="section-center projects" id="projects">
      <h2>projects</h2>
      <div className="header-line"></div>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <article key={project.id}>
              <h3>{project.title}</h3>
              <div className="image-container">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  {<img src={project.img} alt={project.title} /> || <Skeleton height={300} />}
                </a>
              </div>

              <p>{project.description}</p>
              <ul>
                {project.stack.map((stack, index) => {
                  return <li key={index}>{stack}</li>;
                })}
              </ul>
              <div className="site-links">
                <a href={project.repo}>
                  <BiLogoGithub />
                </a>
                <a href={project.live}>
                  <BiLink />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
