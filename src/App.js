import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    { name: "about", description: "" },
    { name: "portfolio", description: "" },
    { name: "contact", description: "" },
    { name: "resume", description: "" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [portfolioSelected, setPortfolioSelected] = useState(false);

  const [contactSelected, setContactSelected] = useState(false);

  const [pageSelected, setPageSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setPortfolioSelected={setPortfolioSelected}
        portfolioSelected={portfolioSelected}
        setContactSelected={setContactSelected}
        contactSelected={contactSelected}
        setPageSelected={setPageSelected}
        pageSelected={pageSelected}
        setAboutSelected={setAboutSelected}
        aboutSelected={aboutSelected}
        setResumeSelected={setResumeSelected}
        resumeSelected={resumeSelected}
      />
      <main>
        {!aboutSelected ? 
         (
          <>
            <Portfolio><Project></Project></Portfolio>
            <ContactForm></ContactForm>
            <Resume></Resume>
          </>
        ) : (
            <About currentPage={currentPage}></About>
          )},
        {!portfolioSelected ? 
         (
          <>
            <ContactForm></ContactForm>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
            <Portfolio currentPage={currentPage}></Portfolio>
          )},
        {!contactSelected ? 
        (
          <>
            <Portfolio>
              <Project />
            </Portfolio>
            <About />
            <Resume />
          </>
        ) : (
          <ContactForm currentPage={currentPage} />
        )},
        {!resumeSelected ? 
         (
          <>
            <Portfolio>
              <Project />
            </Portfolio>
            <About />
            <ContactForm/>
          </>
        ) : (
            <Resume
              currentPage={currentPage}
              setResumeSelected
            />
        )}
        {

          
        }
        {/* <About/>
        <Portfolio><Project/></Portfolio>
        <ContactForm/>
        <Resume/> */}
          
      </main>
      <Footer />
    </div>
  );
}

export default App;
