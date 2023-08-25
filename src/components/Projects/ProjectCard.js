import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Slide,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ProjectCard = ({ projectData }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box borderRadius="8px 8px 16px 16px" bgcolor="#ffffffb2" boxShadow={6}>
        <Paper
          sx={{
            aspectRatio: 16 / 9,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={projectData.picSrc}
            alt={projectData.name}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
          <Slide in={isHovered}>
            <Box
              padding={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              position="absolute"
              top={0}
              width="100%"
              height="100%"
              sx={{ bgcolor: "#ffffff70", backdropFilter: "blur(2px)" }}
            >
              <Typography
                variant="h4"
                letterSpacing={2}
                component="span"
                fontFamily={"'Handjet', cursive"}
              >
                {projectData.name}
              </Typography>
              <Stack direction="row" justifyContent="space-around">
                {projectData.preview ? (
                  <Link href={projectData.preview} target="_blank">
                    <span>
                      <Button variant="outlined" sx={{ borderRadius: 5 }}>
                        Preview
                      </Button>
                    </span>
                  </Link>
                ) : (
                  <Link href={projectData.preview} target="_blank">
                    <Tooltip title="Preview not available">
                      <span>
                        <Button
                          variant="outlined"
                          disabled
                          sx={{ borderRadius: 5 }}
                        >
                          Preview
                        </Button>
                      </span>
                    </Tooltip>
                  </Link>
                )}
                <Link href={projectData.code} target="_blank">
                  <Button variant="outlined" sx={{ borderRadius: 5 }}>
                    Code
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Slide>
        </Paper>
        <Box paddingY={2}>
          <Typography
            textAlign="center"
            fontSize={{ xs: "18px", md: "20px" }}
            component="p"
          >
            {projectData.name}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
