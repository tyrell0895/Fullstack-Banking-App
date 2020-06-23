import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
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
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/meritamerica.org/">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/school/meritamerica/">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/wearemeritamerica/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm">
      <p>Copyright ⓒ {year} Merit Banking Services | All Rights Reserved | Terms of Service | Privacy </p>
      </div>
      </div>
      </div>
    </footer>
   
  );
}

export default Footer;
