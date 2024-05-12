import { BiDownload } from "react-icons/bi";

const About = () => {
  return (
    <section className="section-center hero" id="home">
      <h1>michael tabilin</h1>
      <div className="header-line"></div>
      <p>With over a year of experience as a WordPress developer based in the Philippines, I specialize in creating visually appealing websites. Let's connect and discuss how I can bring your web projects to life.</p>
      {/* <BiDownload /> */}
      <div className="cta-links">
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
        <a href="/resume.pdf" className="resume-links">
          <BiDownload /> CV
        </a>
      </div>
    </section>
  );
};

export default About;
