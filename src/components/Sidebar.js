import { Button, Collapse, IconButton, Stack } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
const Sidebar = ({ toggleMenu, menuClick }) => {
  return (
    <Collapse
      in={toggleMenu}
      // sx={{
      //   minHeight: "100vh",
      // }}
      orientation="horizontal"
      position="absolute"
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
