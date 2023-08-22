import { Box, Grid, Stack, Typography } from "@mui/material";
import SkillLogo from "./SkillLogo";
import { skillsData } from "../../data";

const Skills = () => {
  return (
    <div className="section" id="Skills">
      <Stack direction="row" alignItems="center">
        <Box border="2px solid" borderRadius="20px" flexGrow={1} />
        <Typography
          variant="h3"
          textAlign="center"
          marginX={2}
          className="section-heading"
        >
          Skills
        </Typography>
        <Box border="2px solid" borderRadius="20px" flexGrow={1} />
      </Stack>
      <Stack paddingX={4} paddingY={2}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {skillsData.map((skillsCategory, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                {skillsCategory.category}
              </Typography>
              <Stack direction="row" flexWrap="wrap" justifyContent="center">
                {skillsCategory.skills.map((skill, index) => (
                  <SkillLogo skill={skill} key={index} />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
};

export default Skills;
