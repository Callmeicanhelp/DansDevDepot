import React, { useState } from 'react';

const Portfolio = ({ name }) => {

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

  const currentProjects = projects.filter(project => project.name === name);


  return (
    <div>
      
    </div>
  );

};

export default Portfolio;