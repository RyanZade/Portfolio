import React from "react";
import ProjectForm from "./projectForm";

const projects = [
  {
    id: 0,
    title: "Plan A Travel",
    image: "./images/PlanTravel.PNG",
    description: "An application that will use input to track the latest events an area aswell as show the current exchange rate.",
    repo: "https://github.com/jasminshea/PlanTravel",
    live: "https://jasminshea.github.io/PlanTravel/",
  },
  {
    id: 1,
    title: "Book Club",
    image: "./images/bookClub.PNG",
    description: "An application for all Book enthusiasts to review and faviourite books of their choice. (Live link currently does not work due to issues with HerokuApp)",
    repo: "https://github.com/jeco1988/BookClub",
    live: "https://aqueous-woodland-15580.herokuapp.com/",
  },
  {
    id: 2,
    title: "Password Generator",
    image: "./images/PasswordGenerator.PNG",
    description: "An application that utalises prompts to generate a random password",
    repo: "https://github.com/RyanZade/Challange-3",
    live: "https://ryanzade.github.io/Challange-3/",
  },
  {
    id: 3,
    title: "Quiz Challenge",
    image: "./images/capture.PNG",
    description: "A timed coding quiz with multiple-choice questions. The timed quiz will store top scores to gauge progress compared to others. Each incorrect answer will deduct 10 seconds off the time remaining.",
    repo: "https://github.com/RyanZade/Challenge-5",
    live: "https://ryanzade.github.io/Challenge-5/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Projects</p>
      <hr />

      <ProjectForm projects={projects} />
    </div>
  );
}

export default Portfolio;