import React from "react";
import { projects } from "../../assets/data/data";
import { FaArrowUpRightDots } from "react-icons/fa6";
import "./portfolio.scss";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h6>
          <span className="section-header">portfolio</span>
        </h6>
        <h2 className="section-title">Recent projects</h2>
        <div className="promo-container">
          {projects.map((item) => {
            return (
              <div className="promo-wrap">
                <div className="img-wrap">
                  <img src={item.src} alt="project-screen" />
                </div>
                <div className="promo-details">
                  <h4 className="promo-title">{item.title}</h4>
                  <p className="promo-description">{item.description}</p>
                  <div className="demo-link">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                    >
                      DEMO <FaArrowUpRightDots size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
