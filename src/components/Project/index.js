import React, { useState } from 'react';

const Project = ({ name }) => {
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Project 1", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: "Project 2", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: "Project 3", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: "Project 4", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: "Project 5", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);


  return (
    <div>

    </div>
  );

};

export default Project;