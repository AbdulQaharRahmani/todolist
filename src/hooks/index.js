import { useState, useEffect } from "react";
import { db, app } from "../firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(async () => {
    const dbTasks = await getDocs(collection(db, "tasks"));
    setTasks(dbTasks.docs.map(task=>({id: task.id,...task.data()})));
  }, [selectedProject]);

  return [tasks,setTasks];
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(async () => {
    const dbProjects = await getDocs(query(collection(db, "projects"),where('userid','==','8dGHWLX9jjoNfK8cRoTX')));
    const allProjects = dbProjects.docs.map(project=>({docId: project.id, ...project.data()})); 
    if(JSON.stringify(allProjects) !== JSON.stringify(projects)){
        setProjects(allProjects);
    }
  }, [projects]);
  
  return [projects,setProjects];
};
