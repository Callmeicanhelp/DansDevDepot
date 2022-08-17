import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [projects] = useState([
    { name:'Project 1', description: '' },
    { name:'Project 2', description: '' },
    { name:'Project 3', description: '' },
    { name:'Project 4', description: '' },
    { name:'Project 5', description: '' },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio currentProject={currentProject}></Portfolio>
            <Resume></Resume>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;
