import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    { name: "nav", description: "" },
    { name: "about", description: "" },
    { name: "portfolio", description: "" },
    { name: "contact", description: "" },
    { name: "resume", description: "" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [navSelected, setNavSelected] = useState(false);

  const [portfolioSelected, setPortfolioSelected] = useState(false);

  const [contactSelected, setContactSelected] = useState(false);

  const [pageSelected, setPageSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        setNavSelected={setNavSelected}
        navSelected={navSelected}
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
        {navSelected ? (
          <>{/* <Nav id="nav" /> */}</>
        ) : aboutSelected ? (
          <>
            <About id="about" />
          </>
        ) : portfolioSelected ? (
          <>
            <Portfolio id="portfolio" />
          </>
        ) : contactSelected ? (
          <>
            <Contact id="contact" />
          </>
        ) : resumeSelected ? (
          <>
            <Resume id="resume" />
          </>
        ) : (
          <Nav id="nav" />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
