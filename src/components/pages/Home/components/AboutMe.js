import React from 'react';
import aboutMeImage from '../../../../assets/images/about-me-img.png';

export default function AboutMe() {
  return (
    <article id="aboutMe">
      <div className="container">
        <div className="about-me-block">
          <div className="about-me-block-info">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, ectetuer nonummy nibh euismod tincidunt ut laoreet magna
              laoreet
              aliquam
              erat volutpat.
            </p>
            <ul>
              <li>
                <span>Name</span>
                <p>Aleksandr Zavyalov</p>
              </li>
              <li>
                <span>Template</span>
                <a
                  href="https://psdboom.com/downloads/free-personal-cvresume-web-template"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://psdboom.com/downloads/free-personal-cvresume-web-template
                </a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:avelhar74@gmail.com">avelhar74@gmail.com</a>
              </li>
              <li>
                <span>Github</span>
                <a
                  href="https://github.com/alekszavialov/OnixReact"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://github.com/alekszavialov/OnixReact
                </a>
              </li>
              <li>
                <span>Age</span>
                <p>25</p>
              </li>
              <li>
                <span>I like</span>
                <p>Pets, watch TV, sport</p>
              </li>
            </ul>
          </div>
          <div className="about-me-block-image">
            <img src={aboutMeImage} alt="me" />
          </div>
        </div>

      </div>
    </article>
  );
}
