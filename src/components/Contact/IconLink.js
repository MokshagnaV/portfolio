import { Icon, IconButton, Link } from "@mui/material";

const IconLink = ({ children, link }) => {
  return (
    <Link href={link} target="_blank">
      <IconButton>
        <Icon fontSize="large">{children}</Icon>
      </IconButton>
    </Link>
  );
};

export default IconLink;
