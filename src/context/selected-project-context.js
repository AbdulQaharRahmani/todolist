import { createContext, useContext, useState } from "react";
import React from "react";
export const SelectedProjectContext = createContext(); 

export const SelectedProjectProvider = ({children})=>{
    const [selectedProject,setSelectedProject] = useState('INBOX');
    console.log(selectedProject,'selectedProject');
    return (
        <SelectedProjectContext.Provider value={{selectedProject,setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>
    )
}
