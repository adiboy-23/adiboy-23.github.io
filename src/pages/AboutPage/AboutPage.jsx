import React from "react";
import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "About Me",
          quote: "Software is a great combination of artistry and engineering.",
          content: [
            "I am a software engineer with a passion for building innovative solutions. I am currently pursuing a Bacelor's degree in Computer Science at PES University, Bengaluru. I have a strong foundation in programming languages such as C++ and Java. I am also familiar with web development technologies like React, NextJS , App development like Flutter. I am also familiar with database management systems like MySQL and MongoDB. I am also familiar with version control systems like Git and GitHub. I am also familiar with software development methodologies like Agile and Scrum. I am a quick learner and enjoy working in a team environment. I am also a team player and enjoy collaborating with others to achieve common goals. I am also a skilled problem solver and enjoy working on challenges and always curious about new projects.",
          ],
        }}
        imageSrc={"/images/about.webp"}
      />
    </>
  );
};

export default AboutPage;
