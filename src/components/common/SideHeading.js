import { Stack, Typography } from "@mui/material";

const SideHeading = ({ title }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        variant="h4"
        textAlign="center"
        marginX={2}
        className="section-heading"
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default SideHeading;
