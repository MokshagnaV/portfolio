import { Box, Grid, Stack, Typography } from "@mui/material";
import SkillLogo from "./SkillLogo";

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", iconSrc: "/assets/java.svg" },
        { name: "Python", iconSrc: "/assets/python.svg" },
        { name: "JavaScript", iconSrc: "/assets/javascript.svg" },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "React", iconSrc: "/assets/react.svg" },
        { name: "Django", iconSrc: "/assets/django.svg" },
      ],
    },
    {
      category: "Tools & Libraries",
      skills: [
        { name: "Material UI", iconSrc: "/assets/material-ui.svg" },
        { name: "Chakra UI", iconSrc: "/assets/chakra-ui.svg" },
        { name: "Webpack", iconSrc: "/assets/webpack.svg" },
        { name: "Visual Studio Code", iconSrc: "/assets/vscode.svg" },
      ],
    },
  ];

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
