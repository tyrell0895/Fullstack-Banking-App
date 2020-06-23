import React from "react";



function About() {
    return (
      <about>
<section className="bg-light page-section" id="about">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
      <h3 className="section-subheading text-muted">Merit America's Cohort Developers in 2020</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
        <h4>Xavier Harris</h4>
        <p className="text-muted">Team Lead/Backend Developer</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="https://github.com/tyrell0895/">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/xharrisjames">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
        <h4>Meryem Mohammed</h4>
        <p className="text-muted">Frontend/Backend Developer</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="https://github.com/Meryem-Moh">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/meryemmohammed">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
        <h4>Linda Vadysirisack</h4>
        <p className="text-muted">Frontend Developer</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="https://github.com/lvdy7114">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/lindavady/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h4>Andreal Harris</h4>
            <p className="text-muted">Backend Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/andreal-harris">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
  </div>
  <div className="row">
    <div className="col-lg-8 mx-auto text-center">
      <p className="large text-muted">Project administered using Agile methods via Jira.  Created with HTML, CSS, Bootstrap, Javascript, and React for the frontend.  Utilized Java, MySql, and the Spring Framework for the backend.</p>
    </div>
  </div>
</div>
</section>
</about>
 );
}

export default About;