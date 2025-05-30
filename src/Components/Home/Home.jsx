import React from "react";
import Section from "./Section.jsx";
import Description from "./Description.jsx";
import Intro from "./Intro.jsx";
import Marquee from "./Marquee.jsx";
import Card from "./Card.jsx";
const Home = () => {
  return (
    <section>
      <div className="video-container"></div>
      <Section />
      <Description />
      <Intro />
      <Marquee />
      <div className="our-specialization">
        <h1>Our Specialization</h1>
      </div>
      <div
        style={{
          // minHeight: "250vh",
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          // flexWrap: "wrap",
          background: "#ddd",
          margin:" 10rem auto",
          maxWidth:"93.75vw",
          borderRadius:"20px",
        }}
      >
        <Card
          frontText="UI/UX Designer"
          description="Creative design with a user-first approach."
          skills={[
            "Figma",
            "Sketch",
            "User Research",
            "illustrator",
            "PhotoShop",
          ]}
        />
        <Card
          frontText="Web Designer"
          description="Modern and responsive web layouts."
          skills={["HTML", "CSS", "JavaScript", "Responsive Design"]}
        />
        <Card
          frontText="Front-End Developer"
          description="Interactive UIs using modern frameworks."
          skills={["React", "GSAP", "Tailwind CSS", "MUI"]}
        />
        <Card
          frontText="Backend Developer"
          description="Secure and scalable backend systems."
          skills={["Node.js", "MongoDB", "Express", "Php", "My Sql"]}
        />
       
      </div>
      
    </section>
  );
};

export default Home;
