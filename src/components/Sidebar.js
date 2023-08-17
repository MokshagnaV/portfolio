import { Button, Collapse, IconButton, Stack } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const menuClick = () => {
    const menuStatus = !toggleMenu;
    setToggleMenu(menuStatus);
  };

  return (
    <Collapse
      in={toggleMenu}
      sx={{
        bgcolor: "violet",
        minHeight: "100vh",
        height: "inherit",
        maxWidth: { sm: "30%" },
      }}
      orientation="horizontal"
      collapsedSize={80}
    >
      <Stack padding={2} alignItems="flex-start">
        <IconButton onClick={menuClick} size="large">
          {toggleMenu ? <Close /> : <Menu />}
        </IconButton>
        <Stack>
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Projects</Button>
          <Button>Contact</Button>
        </Stack>
      </Stack>
    </Collapse>
  );
};

export default Sidebar;
