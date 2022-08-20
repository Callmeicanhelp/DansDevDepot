import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



function Header(props) {
  const {
    projects =[],
    contactSelected,
    portfolioSelected,
    aboutSelected,
    setContactSelected,
    setPortfolioSelected,
    setAboutSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="">Daniel's Dev Depot</span> 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${aboutSelected  && 'navActive'}`}>
          <span onClick={() => setAboutSelected(true)}>About Me</span>

          </li>

          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
          <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li>

          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact Me</span>
          </li>

          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
          <span onClick={() => setResumeSelected(true)}>Resume</span>
          </li>

          {/* {projects.map((project) => (
            <li
              className={`mx-1 ${
                currentProject.name === project.name
                }`}
              key={project.name}
            > */}
              {/* <span
                onClick={() => {
                  setCurrentProject(project);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(project.name)}
              </span> */}
            {/* </li>
          ))} */}
        </ul>
      </nav>
    </header>
  )
};

export default Header;