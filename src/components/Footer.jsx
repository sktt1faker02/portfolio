import { BiLogoLinkedin, BiLogoGithub, BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/michael-tabilin-49811a20b/">
        <BiLogoLinkedin />
      </a>
      <a href="https://github.com/sktt1faker02">
        <BiLogoGithub />
      </a>
      <a href="https://www.facebook.com/michael.tabilin.12">
        <BiLogoFacebook />
      </a>
    </footer>
  );
};

export default Footer;
