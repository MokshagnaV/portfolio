import { Stack, Typography } from "@mui/material";
import SectionHeading from "../common/SectionHeading";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Twitter,
} from "@mui/icons-material";
import IconLink from "./IconLink";

const Contact = () => {
  return (
    <div className="section" id="Contact">
      <SectionHeading title="Contact" />
      <Stack paddingTop={10}>
        <Typography variant="h5" textAlign="center">
          You can connect me at
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          gap={4}
          padding={5}
          flexWrap="wrap"
        >
          <IconLink link="https://twitter.com/MokshagnaV1">
            <Twitter fontSize="large" />
          </IconLink>
          <IconLink link="https://github.com/mokshagnaV">
            <GitHub fontSize="large" />
          </IconLink>
          <IconLink link="https://www.linkedin.com/in/mokshagna-ram-teja-vemula-094a2321b">
            <LinkedIn fontSize="large" />
          </IconLink>
          <IconLink link="mailto:mokshagnavemula@gmail.com">
            <Mail fontSize="large" />
          </IconLink>
          <IconLink link="https://www.instagram.com/mokshagna_vemula/">
            <Instagram fontSize="large" />
          </IconLink>
        </Stack>
      </Stack>
    </div>
  );
};

export default Contact;
