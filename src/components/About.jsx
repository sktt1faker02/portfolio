import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoSass, BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
const About = () => {
  return (
    <section className="section-center about" id="about">
      <h2>about</h2>
      <div className="header-line"></div>
      <p>As a Junior Frontend Developer, I&apos;m passionate about creating visually appealing, user-friendly websites and eager to learn and grow in the field</p>
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
          <BiLogoReact />
          React
        </li>
        <li>
          <SiNextdotjs />
          Next.js
        </li>
        <li>
          <BiLogoSass />
          SCSS
        </li>
        <li>
          <BiLogoTailwindCss />
          Tailwind
        </li>
      </ul>
    </section>
  );
};

export default About;
