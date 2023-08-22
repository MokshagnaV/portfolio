import { Grid } from "@mui/material";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data";

const Projects = () => {
  return (
    <div className="section" id="Projects">
      <SectionHeading title="Projects" />
      <Grid container paddingY={4} spacing={5} justifyContent="center">
        {projectsData.map((project, index) => (
          <ProjectCard projectData={project} key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
