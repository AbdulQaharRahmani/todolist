import { collatedTasks } from "../constants";

export const getTitle = (projects, projectId) =>
  projects.find((project) => project.projectId === projectId);

export const getCollatedTitle = (projects, key) =>
  projects.find((project) => project.key === key);

export const collatedTaskExist = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);

export const generatePushId = (() => {
  const PUSH_CHARS =
    "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

  const lastRandChars = [];

  return function () {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join("");

    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();

export const formatDate = (date) => {
  if (!date) return date;
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
};

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
export const  dateDiffInDays =(a, b)=> {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  console.log('date diff',Math.floor((utc2 - utc1) / _MS_PER_DAY));
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
