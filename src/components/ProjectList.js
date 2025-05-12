import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects); // Keep this for debugging if needed

  // Use map to create a ProjectItem for each project
  const projectItems = projects.map((project) => (
    <ProjectItem
      key={project.id} // Use project.id for the key
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));

  return (
    <div id="projects">
      <h2>My Projects</h2>
      {/* Render the array of ProjectItem components */}
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;