import React from "react";
import Page from "../../pages/Page";
import "./Contact.scss";

const Contact = () => {
  return (
    <Page
      requireDarkRoom={true}
      panelContent={{
        title: "Contact Me",
        quote: "Let's connect and create something amazing together.",
        content: [
          "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.",
          "Email: kadiansahab123@gmail.com",
          "Social Media:",
          "- GitHub: github.com/adiboy-23",
          "- LinkedIn: linkedin.com/in/aditya-kadian",
          "Location: Bangaluru, INDIA"
        ],
      }}
      imageSrc={"/images/contact.webp"}
    />
  );
};

export default Contact; 