import React, { useContext, useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { FaTrashAlt } from "react-icons/fa";
import { ProjectsContext, SelectedProjectContext } from "../context";
import { AddProject } from "./AddProject";

export const Project = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useContext(ProjectsContext);
  const { setSelectedProject } = useContext(SelectedProjectContext);

  const deleteProject = async (docId) => {
     await deleteDoc(doc(db, "projects", docId));
    setSelectedProject("INBOX");
    setProjects([]);
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setShowConfirm(!showConfirm);
        }}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project"
      >
        <FaTrashAlt />
      </span>
      {showConfirm && (
        <div className="project-delete-modal">
          <div className="project-delete-modal__inner">
            <p>Are you sure you want to delete this project?</p>

            <button type="button" onClick={() => deleteProject(project.docId)}>
              Delete
            </button>
            <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
          </div>
        </div>
      )}
    </>
  );
};
