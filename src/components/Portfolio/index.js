import React, { useState } from 'react';
import Modal from '../Modal';

const Projects = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const currentProjects = projects.filter(project => project.name === project);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            // src={require(`../../assets/small/${category}/${i}.jpg`)}
            // alt={image.name}
            // className="img-thumbnail mx-1"
            // onClick={() => toggleModal(image, i)}
            // key={image.name}
          />
        ))}
      </div>
    </div>
  );

};

export default Portfolio;