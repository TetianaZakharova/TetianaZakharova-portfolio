import React from "react";
import { workexperience } from "../../assets/data/data";
import "./experience.scss";

export const Experience = () => {
  return (
    <section id="experience">
      <h6>
        <span className="section-header">experience</span>
      </h6>
      <h2 className="section-title">
        My work <span className="title-second">experience</span>
      </h2>
      <div className="experience-wrap">
        {workexperience.map((item) => {
          return (
            <div className="experience-item" key={item.id}>
              <div className="company-wrap">
                <div className="role-info">
                  <h4>{item.role}</h4>
                  <span className="name">{item.name}</span>
                  <p>{item.date}</p>
                  <label>{item.type}</label>
                </div>
                <div className="company-name">
                  <p className="name">{item.name}</p>
                  <ul className="description">
                    {item.responsibilities.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="role-info stack">
                {item.stack.map((item) => {
                  return <label className="stack-label">{item}</label>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        A key factor in the success of the project was the uninterrupted
        operation of the{" "}
        <a
          href="https://burobrew.wordpress.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0988FF" }}
        >
          BuroBrew Cafflert barista robot
        </a>
      </div>
      <div>
        Un élément clé du succès du projet a été le fonctionnement ininterrompu
        du{" "}
        <a
          href="https://burobrew.wordpress.com"
          target="_blank"
          style={{ color: "#0988FF" }}
        >
          robot-barista BuroBrew Cafflert
        </a>
      </div>
    </section>
  );
};
