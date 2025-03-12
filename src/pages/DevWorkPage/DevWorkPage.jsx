import React from "react";
import Page from "../Page";
import "./DevWorkPage.scss";

const DevWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Development Work",
          quote:
            "Transforming visionary designs into seamless digital realities.",
          content: [
            "I have worked on a range of development projects that highlight my expertise in systems programming, machine learning, web development, and distributed systems. One of my most challenging projects is Self-Made Git, where I implemented core Git functionalities from scratch using C++, deepening my understanding of version control systems and low-level file management. Another significant project is COLORIZZED, a machine learning-based image colorization tool that converts black-and-white images into colored ones using deep learning. I built a web interface for this using Flask, which allowed me to integrate AI models into user-friendly applications. Additionally, I developed Go-REST-API, a RESTful API built with Go, focusing on clean architecture, scalability, and efficient request handling.",
          ],
        }}
        imageSrc={"/images/dev.webp"}
      />
    </>
  );
};

export default DevWorkPage;
