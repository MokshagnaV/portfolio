import { Box, Stack, Typography, Zoom } from "@mui/material";
import { useState } from "react";

const SkillLogo = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Stack
      position="relative"
      padding={2}
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box borderRadius="50%" width="80px" height="80px" margin={1}>
        <img src={skill.iconSrc} alt={`${skill.name} logo`} width="100%" />
      </Box>
      <Zoom in={isHovered}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            bgcolor: "#3b3b3b80",
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        >
          <Typography fontWeight="700" textAlign="center">
            {skill.name}
          </Typography>
        </Stack>
      </Zoom>
    </Stack>
  );
};

export default SkillLogo;
