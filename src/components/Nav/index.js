import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
  const {
    projects =[],
    setCurrentProject,
    currentProject,
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label=""> </span> 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>

          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          {projects.map((project) => (
            <li
              className={`mx-1 ${
                currentProject.name === project.name
                }`}
              key={project.name}
            >
              <span
                onClick={() => {
                  setCurrentProject(project);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(project.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );






}

export default Nav;