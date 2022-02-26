import React, { useContext, useState } from "react";
import { ProjectsContext, SelectedProjectContext } from "../context";
import { AddProject } from "./AddProject";
import { Project } from "./Project";

export const Projects = ({ activeValue = null }) => {

  const { selectedProject, setSelectedProject } = useContext(
    SelectedProjectContext
  );
  const { projects, setProjects } = useContext(ProjectsContext);
  
  return (
    <>
      {projects &&
        projects.map((project) => (
          <li
            key={project.docId}            
            className={
              selectedProject === project.projectId
                ? "active sidebar__project"
                : "sidebar__project"
            }
          >
            <div
            className="sidebar__project-action"
            data-testid="project-action"
              onClick={() => {
                setSelectedProject(project.projectId);
              }}
            >
              
              <Project project={project} />
            </div>
          </li>
        ))}
    </>
  );
};
