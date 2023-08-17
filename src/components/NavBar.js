import "./navbar.css";

const NavBar = () => {
  const pages = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <div className="nav-bar">
      <div className="menu">
        {pages.map((page, index) => (
          <a key={index} href={`#${page}`} className="menu-link">
            {page}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
