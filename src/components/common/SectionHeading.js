import { Box, Stack, Typography } from "@mui/material";

const SectionHeading = ({ title }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Box border="2px solid" borderRadius="20px" flexGrow={1} />
      <Typography
        variant="h3"
        textAlign="center"
        marginX={2}
        className="section-heading"
      >
        {title}
      </Typography>
      <Box border="2px solid" borderRadius="20px" flexGrow={1} />
    </Stack>
  );
};

export default SectionHeading;
