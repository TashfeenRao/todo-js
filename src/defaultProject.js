/* eslint-disable no-unused-vars */
import Project from './project';
import DataStorge from './DataStorage';

const defaulProject = (() => {
  const seed = () => {
    if (DataStorge.projectList.projects.length === 0) {
      const noukod = new Project('Noukod');
      const microverese = new Project('Microverse');
      const katkatgame = new Project('Katkat game');
    }
  };

  return { seed };
})();

export default defaulProject;