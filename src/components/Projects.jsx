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
              <div className="image-container">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  {<img src={project.img} alt={project.title} />}
                </a>
              </div>

              <div className="title-wrapper">
                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>
              <div className="project-footer">
                <ul>
                  {project.stack.map((stack, index) => {
                    return <li key={index}>{stack}</li>;
                  })}
                </ul>
                <div className="site-links">
                  {/* <a href={project.repo}>
                  <BiLogoGithub />
                </a> */}
                  <a href={project.live}>
                    <BiLink />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
