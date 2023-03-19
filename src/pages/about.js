import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + './images/headshot.jpg'} alt="Ryan Zadeh"/>
      <p className="content is-italic mt-4">
        My name is Ryan Zadeh, I have completed a Full Stack Web Development bootcamp to develop my Web Developer skills.
      </p>
      <p className="content">
        Using the skills I have learned throughout the bootcamp,
        I should be able to utilise many front and back end 
        technologies in order to build a full stack web application.
      </p>
    </div>
  );
}

export default About;