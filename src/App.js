import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    { name:'About Me', description: '' },
    { name:'Portfolio', description: '' },
    { name:'Contact Me', description: '' },
    { name:'Resume', description: '' },
  ]);

  const [portfolioSelected, setPortfolioSelected] = useState(false);

  const [contactSelected, setContactSelected] = useState(false);

  const [pagesSelected, setPagesSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setPortfolioSelected={setPortfolioSelected}
          portfolioSelected={portfolioSelected}
          setContactSelected={setContactSelected}
          contactSelected={contactSelected}
          setPagesSelected={setPagesSelected}
          pagesSelected={pagesSelected}
          setAboutSelected={setAboutSelected}
          aboutSelected={aboutSelected}
          setResumeSelected={setResumeSelected}
          resumeSelected={resumeSelected}

        ></Nav>
      </Header>
      <main>
        {!aboutSelected ? 
         (
          <>
            <Portfolio><Project></Project></Portfolio>
            <ContactForm></ContactForm>
            <Resume></Resume>
          </>
        ) : (
            <About aboutSelected={aboutSelected}></About>
          )},
        {!portfolioSelected ? 
         (
          <>
            <ContactForm></ContactForm>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
            <Portfolio portfolioSelected={portfolioSelected}></Portfolio>
          )},
        {!contactSelected ? 
         (
          <>
            <Portfolio><Project></Project></Portfolio>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
            <ContactForm contactSelected={contactSelected}></ContactForm>
          )},
        {!resumeSelected ? 
         (
          <>
            <Portfolio><Project></Project></Portfolio>
            <About></About>
            <ContactForm></ContactForm>
          </>
        ) : (
            <Resume resumeSelected={resumeSelected}></Resume>
          )}             
          
      </main>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
