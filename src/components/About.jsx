import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoWordpress } from "react-icons/bi";
import { SiElementor } from "react-icons/si";
const About = () => {
  return (
    <section className="section-center about" id="about">
      <h2>about</h2>
      <div className="header-line"></div>
      <p>I have extensive experience in custom theme development and utilizing page builders like Elementor, WP Bakery, and Yootheme to create user-friendly and responsive websites across various devices. Additionally, I am proficient in managing plugins and implementing SEO optimization.</p>
      <ul className="about-techstack">
        <li>
          <BiLogoHtml5 />
          HTML
        </li>
        <li>
          <BiLogoCss3 />
          CSS
        </li>
        <li>
          <BiLogoJavascript />
          JavaScript
        </li>
        <li>
          <BiLogoWordpress />
          WordPress
        </li>
        <li>
          <SiElementor />
          Elementor
        </li>
      </ul>
    </section>
  );
};

export default About;
