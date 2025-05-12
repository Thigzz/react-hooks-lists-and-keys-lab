import React from "react";

function ProjectItem({ name, about, technologies }) {
  // Use map to create a <span> for each technology
  const techSpans = technologies.map((tech) => (
    <span key={tech} style={{ marginRight: "5px", border: "1px solid lightgray", padding: "2px 4px", borderRadius: "3px"}}> {/* Added some basic styling */}
      {tech}
    </span>
  ));

  return (
    <div className="project-item" style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}> {/* Added some basic styling */}
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* Render the array of <span> elements */}
        {techSpans}
      </div>
    </div>
  );
}

export default ProjectItem;