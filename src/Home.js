import React from "react";
import { Link } from "react-router-dom";
import App from "./App";
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";

export default class Home extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <>
        <App />
        <div>
          <body>
            <section className="page-section" id="benefits">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Benefits</h2>
                    <h3 className="section-subheading text-muted">
                      <div class="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                    </h3>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary" />
                      <i className="fa fa-university fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">Online Banking</h4>
                    <p className="text-muted">
                      Can use from your smartphone and from your computer.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary" />
                      <i className="fa fa-laptop fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Easy to Use.</p>
                  </div>
                  <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary" />
                      <i className="fa fa-lock fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">Web Security</h4>
                    <p className="text-muted">Your information is safe.</p>
                  </div>
                </div>
              </div>
            </section>
          </body>
          <about>
            <section className="bg-light page-section" id="about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">
                      Our Amazing Team
                    </h2>
                    <h3 className="section-subheading text-muted">
                      Merit America's Cohort Developers in 2020
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/1.jpg"
                        alt=""
                      />
                      <h4>Xavier Harris</h4>
                      <p className="text-muted">Team Lead/Backend Developer</p>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="https://github.com/tyrell0895/">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/xharrisjames">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/2.jpg"
                        alt=""
                      />
                      <h4>Meryem Mohammed</h4>
                      <p className="text-muted">Frontend/Backend Developer</p>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="https://github.com/Meryem-Moh">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/meryemmohammed">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/3.jpg"
                        alt=""
                      />
                      <h4>Linda Vadysirisack</h4>
                      <p className="text-muted">Frontend Developer</p>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="https://github.com/lvdy7114">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/lindavady/">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img
                        className="mx-auto rounded-circle"
                        src="img/team/2.jpg"
                        alt=""
                      />
                      <h4>Andreal Harris</h4>
                      <p className="text-muted">Backend Developer</p>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="https://github.com/Andreal485">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/andreal-harris">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">
                      Project administered using Agile methods via Jira. Created
                      with HTML, CSS, Bootstrap, Javascript, and React for the
                      frontend. Utilized Java, MySql, and the Spring Framework
                      for the backend.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </about>
          <footer>
            <div className="container">
              <div className="row">
                {/*column 1*/}
                <div className="col">
                  <h4>Created By: </h4>
                  <ul className="list-unstyled">
                    <li>Merit America's Cohort Developers in 2020</li>
                  </ul>
                </div>
                {/*column 2*/}
                <div className="col">
                  <h4>Disclaimer:</h4>
                  <ul className="list-unstyled">
                    <li>This is not a real bank</li>
                    <li>Not FDIC insured</li>
                    <li>This is a group capstone for presentation purposes</li>
                  </ul>
                </div>
                {/*column 3*/}
                <div className="col">
                  <h4>Located In:</h4>
                  <ul className="list-unstyled">
                    <li>Dallas, TX</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/meritamerica">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/meritamerica.org/">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/school/meritamerica/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/wearemeritamerica/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm">
                  <p>
                    Copyright ⓒ {year} Merit Banking Services | All Rights
                    Reserved | Terms of Service | Privacy{" "}
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
