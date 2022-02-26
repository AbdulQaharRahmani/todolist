import { Checkbox } from "./Checkbox";
import React, { useContext, useEffect } from "react";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { collatedTaskExist, getCollatedTitle, getTitle } from "../helpers";
import { SelectedProjectContext, ProjectsContext } from "../context";
import { Projects } from "./Projects";
export const Tasks = () => {
  const {selectedProject} = useContext(SelectedProjectContext);
  const {projects} = useContext(ProjectsContext);

  const [tasks,setTasks] = useTasks(selectedProject);
  let projectName = "";
    
  useEffect(()=>{
    if(projects && selectedProject && !collatedTaskExist(selectedProject)){
      projectName = getTitle(projects,selectedProject).name;
      console.log('projectname1',projectName);
    }
    
    if(selectedProject && collatedTaskExist(selectedProject)){
      projectName = getCollatedTitle(collatedTasks,selectedProject).name;
      console.log('projectname2',projectName);
    }
    document.title = `${projectName}: TodoList`;
  },[selectedProject]);

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox id={task.id} />
            <span> {task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
