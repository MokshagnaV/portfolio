import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import SectionHeading from "../common/SectionHeading";

const About = () => {
  const educationalDetails = [
    {
      period: "2019-23",
      degree: "Bachelor's Degree (Bachelor of Technology)",
      major: "Computer Science and Engineer",
      institute: "Kamala Institute of Technology and Science",
      scoreType: "CGPA (10) ",
      score: "7.2",
    },
    {
      period: "2017-19",
      degree: "Intermediate (12th Grade)",
      major: "Mathematics Physics Chemistry",
      institute: "Alphores Junior College",
      scoreType: "Percentage",
      score: "95%",
    },
    {
      period: "2016-17",
      degree: "Secondary Schooling (10th Grade)",
      major: "Mathematics Science Social",
      institute: "Rainbow High School",
      scoreType: "CGPA (10) ",
      score: "9.7",
    },
  ];

  return (
    <div id="About" className="section">
      <SectionHeading title="About" />
      <Grid
        container
        paddingX={2}
        paddingTop={10}
        spacing={2}
        alignItems="center"
      >
        <Grid item sm={12} md={6}>
          <Typography variant="body" fontSize={{ sm: "20px" }}>
            I am passionate about technology and it's application. Enthusiastic
            to learn new things. Completed graduation recently, exploring the
            world of web development. Excelling the frontend and heading towards
            the full stack development.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6}>
          {educationalDetails.map((education, index) => (
            <Box display="flex" gap={2} key={index}>
              <Stack alignItems="center" gap={2} padding={1}>
                <Chip
                  sx={{ fontSize: 15, fontWeight: 700 }}
                  label={education.period}
                />
                {index !== educationalDetails.length - 1 && (
                  <Box border="2px solid" borderRadius="20px" flexGrow={1} />
                )}
              </Stack>
              <Stack>
                <Typography
                  sx={{ fontSize: 15, fontWeight: 700 }}
                  paddingY={1}
                  gutterBottom
                >
                  {education.degree}
                </Typography>
                <Typography>{education.major}</Typography>
                <Typography>{education.institute}</Typography>
                <Stack direction="row" spacing={2} paddingY={3}>
                  <Typography fontWeight={600}>
                    {education.scoreType} :
                  </Typography>
                  <Typography>{education.score}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
