import {
  Box,
  Divider,
  Drawer,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import "./navbar.css";
import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";

const NavBar = () => {
  const pages = ["Home", "About", "Skills", "Projects", "Contact"];
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuClick = () => {
    const menuStatus = !toggleMenu;
    setToggleMenu(menuStatus);
  };

  return (
    <div className="nav-bar">
      <Box display="flex" position={{ xs: "relative", md: "unset" }}>
        <Box
          position="absolute"
          top="8px"
          left="8px"
          display={{ xs: "block", md: "none" }}
        >
          <IconButton onClick={menuClick}>
            <Icon fontSize="large">
              <Menu fontSize="large" onClick={() => setToggleMenu(true)} />
            </Icon>
          </IconButton>
        </Box>
        <Drawer open={toggleMenu}>
          <Box className="nav-bar">
            <Box padding={1}>
              <IconButton onClick={menuClick}>
                <Icon fontSize="large">
                  <Close
                    fontSize="large"
                    onClick={() => setToggleMenu(false)}
                  />
                </Icon>
              </IconButton>
            </Box>
            <Divider />
            <List>
              {pages.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item}`}
                  underline="none"
                  onClick={() => setToggleMenu(false)}
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
        <Stack
          justifyContent="center"
          alignItems="center"
          padding={1}
          flexGrow={{ xs: 1, md: 0 }}
        >
          <Link href="#Home" underline="none">
            <Typography
              variant="h3"
              fontFamily="'Tilt Prism', cursive"
              left="16px"
              sx={{ cursor: "pointer" }}
            >
              MV
            </Typography>
          </Link>
        </Stack>
        <Box display={{ xs: "none", md: "flex" }} flexGrow={1} className="menu">
          {pages.map((page, index) => (
            <Link key={index} href={`#${page}`} fontSize={20} underline="none">
              {page}
            </Link>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default NavBar;
