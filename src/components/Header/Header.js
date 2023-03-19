import React, { useState } from 'react';
import Navigation from "../Navigation/navigation";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Projects from "../../pages/projects";
import Resume from "../../pages/resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  //uses a switch statement to change current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/RyanZade?tab=repositories"
          >
            <span className="content is-large">Ryan Zadeh</span>
          </a>
        </div>
      </nav>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;