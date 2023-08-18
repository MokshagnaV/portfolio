import { Grid } from "@mui/material";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      name: "Weather Hub",
      picSrc: "./assets/weather-hub.png",
      preview: "https://mokshagnav.github.io/weather-hub/",
      code: "https://github.com/MokshagnaV/weather-hub",
    },
    {
      name: "CRCS-Portal Dashboard",
      picSrc: "./assets/crcs-portal.png",
      preview: "https://mokshagnav.github.io/crcs-portal/",
      code: "https://github.com/MokshagnaV/crcs-portal",
    },
    {
      name: "Resume Builder",
      picSrc: "./assets/resume-builder.png",
      preview: "https://mokshagnav.github.io/resume-builder/",
      code: "https://github.com/MokshagnaV/resume-builder",
    },
  ];
  return (
    <div className="section" id="Projects">
      <SectionHeading title="Projects" />
      <Grid container paddingY={4} spacing={5}>
        {projectsData.map((project, index) => (
          <ProjectCard projectData={project} key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
