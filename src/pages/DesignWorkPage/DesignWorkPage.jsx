import React from "react";
import Page from "../Page";
import "./DesignWorkPage.scss";

const DesignWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={false}
        panelContent={{
          title: "Design Work",
          quote: "The best design is more than beautiful, it's meaningful.",
          content: [
            "In the realm of distributed systems, my Peer-to-Peer project involved designing a decentralized file-sharing system, reinforcing my understanding of networking and protocol design. I also created Pump-Fun, a fitness tracking application that incorporates real-time data visualization and progress tracking, demonstrating my ability to work with data-driven applications. Another noteworthy project is Anand’s Appetite, a food delivery platform that streamlines order management and restaurant interactions, built with a focus on user experience and backend efficiency. These projects reflect my commitment to learning and building scalable, impactful software solutions across various domains."  
          ],
        }}
        imageSrc={"/images/design.webp"}
      />
    </>
  );
};

export default DesignWorkPage;
