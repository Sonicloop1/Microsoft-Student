/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Mac-os-reg.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Sonic Open Game in Unreal Engine 4",
    description:
      "This is the game i have been working on",
    url: "https://www.youtube.com/watch?v=qkyDOQ0CMu8&t=31s",
  },
  {
    title: "Microsoft Profile",
    description:
      "This is my Microsoft Student ambassador Profile",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/5c8430a9-f228-418a-868c-46da737550fd",
  },
  {
    title: "My Resume Site",
    description:
      "This has all of my certifacates and all of my certifacations on it.",
    url: "www.linkedin.com/in/ethan-goizman-a548962a2",
  },
  {
    title: "My website",
    description:
      "share my website with evreyone",
    url: "https://fluffy-space-rotary-phone-gj9rg646www2pvrx-1234.app.github.dev/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
