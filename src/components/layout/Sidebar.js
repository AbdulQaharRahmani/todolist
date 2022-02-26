import React, { useContext, useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { SelectedProjectContext } from "../../context";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";
export const Sidebar = () => {
  const { selectedProject, setSelectedProject } = useContext(
    SelectedProjectContext
  );
  const [showProjects, setShowProjects] = useState(true);
  return (
    <>
      <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
          <li
            data-testid="inbox"
            className={selectedProject=== "INBOX" ? "active" : ""}
            onClick={() => {
              setSelectedProject("INBOX");
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </li>
          <li
            data-testid="today"
            className={selectedProject==='TODAY'?'active':''}
            onClick={() => {setSelectedProject("TODAY");}}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </li>
          <li
            data-testid="next_7"
            className={selectedProject==='NEXT_7'? 'active': ''}
            onClick={() => {setSelectedProject("NEXT_7")}}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 Days</span>
          </li>
        </ul>
        <div className="sidebar__middle" onClick={()=>setShowProjects(!showProjects)}>
          <span>
            <FaChevronDown />
          </span>
          <h2>Projects</h2>
        </div>
        <ul className="sidebar__projects">
          {showProjects && <Projects />}
        </ul>

         <AddProject />
      </div>
    </>
  );
};
