import React, { useContext, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ProjectsContext } from "../context";
import { generatePushId } from "../helpers";
import { db } from "../firebase";

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { setProjects } = useContext(ProjectsContext);

  const addProject = async () => {
    // Add a new document in collection "cities"
    if (projectName) {
        setShow(false);
      await setDoc(doc(db, "projects", projectId), {
        name: projectName,
        projectId,
        userId: "8dGHWLX9jjoNfK8cRoTX",
      });
      setProjectName("");
      setProjects([])
    }
  };
  return (
      <>
    {  show && <div className="add-project" data-testid="add-project">
      <input
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="add-project__name"
        data-testid="project-name"
        type="text"
        placeholder="Name Your Project"
      />
      <button
        className="add-project__submit"
        type="button"
        data-testid="add-project-submit"
        onClick={addProject}
      >
        Add Project
      </button>
      <span
        data-testid="hide-project-overlay"
        className="add-project__cancel"
        onClick={() => setShow(false)}
      >
        Cancel
      </span>
      
    </div>}
    <div>
    <span className="add-project__plus">+</span>
      <span data-testid="add-project-action" className="add-project__text" onClick={()=>setShow(!show)}> 
        Add Project
      </span>
    </div>
    </>
  );
};
