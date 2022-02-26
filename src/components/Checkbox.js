import React from "react";
import { Firestore } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
export const Checkbox = ({ id }) => {
  const taskRef = doc(db, "tasks", id);

  const archiveTask = async() => {
    await updateDoc(taskRef, {
        archived: true,
      });
  };
  return <div className="checkbox-holder" data-testid="checkbox-action" onClick={archiveTask}>
      <span className="checkbox"></span>
  </div>;
};
