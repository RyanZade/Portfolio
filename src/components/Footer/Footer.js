import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Ryan's Full Stack Development Portfolio</strong> - a React applicaiton by{" "}
          <a href="https://github.com/RyanZade" target="_blank" rel="noreferrer">
            Ryan Zadeh
          </a><br />
          <hr />
          <a
            href="https://www.linkedin.com/in/ryan-zadeh-7b0065268/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a><br />
          <a
            href="https://github.com/RyanZade"
            target="_blank" rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;