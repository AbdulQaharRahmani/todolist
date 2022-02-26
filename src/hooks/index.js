import { useState, useEffect } from "react";
import { db, app } from "../firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
import { collatedTaskExist, dateDiffInDays, formatDate } from "../helpers";
export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(async () => {
    const dbTasks = await getDocs(collection(db, "tasks"));
    const allTasks = dbTasks.docs.map((task) => ({
      id: task.id,
      ...task.data(),
    }));
    
    if (selectedProject && !collatedTaskExist(selectedProject)) {
      setTasks(allTasks.filter((task) => task.projectId === selectedProject));
    } else if (selectedProject && collatedTaskExist(selectedProject)) {
      switch (selectedProject) {
        case "TODAY":
          setTasks(
            allTasks.filter((task) => task.date === formatDate(new Date()))
          );
          break;
        case "NEXT_7":
          setTasks(
            allTasks.filter(
              (task) =>
                dateDiffInDays(new Date(task.date), new Date()) <= 7 &&
                !task.archived
            )
          );
          break;
        case "INBOX":
          setTasks(allTasks.filter((task) => task.date === ""));
          break;
      }
    }
  }, [selectedProject]);

  return [tasks, setTasks];
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(async () => {
    const dbProjects = await getDocs(
      query(
        collection(db, "projects"),
        where("userId", "==", "8dGHWLX9jjoNfK8cRoTX")
      )
    );
    const allProjects = dbProjects.docs.map((project) => ({
      docId: project.id,
      ...project.data(),
    }));
    if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
      setProjects(allProjects);
    }
  }, [projects]);

  return [projects, setProjects];
};
