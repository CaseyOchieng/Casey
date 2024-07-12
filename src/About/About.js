import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import flower from "../Assets/flower.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.css";
function About() {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let image = useRef(null);
  let p1 = useRef(null);
  const timeline_about = gsap.timeline();
  useEffect(() => {
    timeline_about.from(
      [text1, text2],
      {
        duration: 0.8,
        y: 500,
        skewY: 10,
        stagger: {
          amount: 0.4,
        },
      },
      "-=.5"
    );
    timeline_about.from(
      image,
      {
        duration: 1.5,
        y: 300,
        delay: 0.2,
        opacity: 0,
      },
      "-=.5"
    );
    timeline_about.from(p1, {
      duration: 0.5,
      x: 200,
      skewX: 10,
      opacity: 0,
    });
  });
  return (
    <>
      <div>
        <div className="about">
          <Header timeline={timeline_about} />
          <div className="about-container">
            <div className="container-text">
              <div className="container-inner-text1">
                <p ref={(el) => (text1 = el)}>Casey </p>
              </div>
              <div className="container-inner-text2">
                <p ref={(el) => (text2 = el)}>Ochieng</p>
              </div>
            </div>
            <di
              ref={(el) => (p1 = el)}
              v
              className="container-quote container-quote1"
            >
              I create sites and <br /> applications that cause <br /> pleasant
              emotions
            </di>
            <div className="container-quote container-quote2">
              I specialize in interactive <br /> design, experience websites{" "}
              <br /> and applications
            </div>
            <div className="container-image" ref={(el) => (image = el)}></div>
          </div>
          <div className="about-container2">
            <div className="about-container2-heading">
              <div className="about-text-lower">
                <p>Web Designer,</p>
              </div>
              <div className="about-text-lower">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#C86161" }}>Front-End</span>
                </p>
              </div>
              <div className="about-text-lower">
                <p>&nbsp;Developer&nbsp;&nbsp;&nbsp;&</p>
              </div>
              <div className="about-text-lower">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#C86161" }}>a Trainer</span>
                </p>
              </div>
            </div>
            <div className="about-container2-p">
              <p>
                Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet,{" "}
                <br /> consectetur adipisicing elit. Sed, cum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam molestiae architecto minima odio, incidunt qui?
              </p>
              <p className="about-container2-p-right">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                sunt, <br /> ipsam laborum rerum fugiat dolore natus unde odio
                placeat quia.
              </p>
              <p>
                Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi, ipsam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
                cupiditate!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                dolorum. <br /> Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aut, nemo!
              </p>
            </div>
            <div className="about-container-flower">
              <img src={flower} alt="" />
            </div>
          </div>
          <div className="about-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
