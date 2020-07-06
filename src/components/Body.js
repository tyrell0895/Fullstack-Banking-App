import React from "react";
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";

function Body() {
  return (
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
  );
}

export default Body;
