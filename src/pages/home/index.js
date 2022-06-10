import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import my_resume from '../../assets/Rakib_hassan_resume.pdf'
import Particles from "react-tsparticles";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <a href={my_resume} download="Rakib_hassan_resume.pdf" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Particles
          params={{
            "particles": {
              "number": {
                "value": 8,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "line_linked": {
                "enable": false
              },
              "move": {
                "speed": 1,
                "out_mode": "out"
              },
              "shape": {
                "type": [
                  "image",
                  "circle"
                ],
                "image": [
                  {
                    "src": "/react.cd2ab268.svg",
                    "height": 20,
                    "width": 23
                  },
                  {
                    "src": "/k8s.2d579d24.svg",
                    "height": 20,
                    "width": 20
                  },
                  {
                    "src": "/code.b3b4c4f4.png",
                    "height": 20,
                    "width": 20
                  }
                ]
              },
              "color": {
                "value": "#CCC"
              },
              "size": {
                "value": 30,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 4,
                  "size_min": 10,
                  "sync": false
                }
              }
            },
            "retina_detect": false
          }} />
    </HelmetProvider>
  );
};
