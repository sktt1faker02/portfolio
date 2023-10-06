import { useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { links } from "../data";

const Nav = () => {
  const { isNavActive, handleNavActive } = useGlobalContext();

  useEffect(() => {
    // Add or remove 'no-scroll' class on 'body' based on isNavActive
    if (isNavActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup the effect
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isNavActive]);

  return (
    <header>
      <a href="/" className="logo">
        michael
      </a>

      <div className={`${isNavActive ? "mobile-nav active" : "mobile-nav"}`} onClick={handleNavActive}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${isNavActive ? "nav active" : "nav"}`}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a className={`${link.label === "contact" ? "cta-contact" : ""}`} href={`#${link.label}`} onClick={handleNavActive}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
