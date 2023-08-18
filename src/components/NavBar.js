import { Link } from "@mui/material";
import "./navbar.css";

const NavBar = () => {
  const pages = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <div className="nav-bar">
      <div className="menu">
        {pages.map((page, index) => (
          <Link key={index} href={`#${page}`} fontSize={20} underline="none">
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
