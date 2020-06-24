import React from "react";




function Top() {
    return (
<top>

<section className="bg-light page-section" id="accounts">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Accounts We Offer</h2>
          <h3 className="section-subheading text-muted">Open an account with us today!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="team-member">
          <img className="img-fluid d-block mx-auto" src="https://github.com/lvdy7114/FrontEndCapstone/blob/master/meritbank/Capstone%20images/bankwifi.jpg?raw=true" alt=""/>
            <h4>Savings Account</h4>
            <p className="text-muted">Each account holder can have only one savings account.</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
          <img className="img-fluid d-block mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxdTHZh7AcZyUuFmB_pafQDKx4co_AKOWB8kmbk8FZvj4rCbYc&usqp=CAU" alt=""/>
            <h4> Certificate of Deposit Account (CD)</h4>
            <p className="text-muted">Each account holder can have many Certificate of Deposit Accounts.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="team-member">
          <img className="img-fluid d-block mx-auto" src="https://github.com/lvdy7114/FrontEndCapstone/blob/master/meritbank/Capstone%20images/merit.png?raw=true" alt=""/>
            <h4>Checking Accounts</h4>
            <p className="text-muted">Personal Checking Account  Business Checking Account (DBA)</p>
            <p>Each account holder can have only one personal checking account.  An account holder can have multiple DBA checking accounts, but not more than 3
allowed.</p>
          </div>
        </div>
    <div className="col-sm-4">
          <div className="team-member">
          <img className="img-fluid d-block mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ8_BLl-i_ugVRluOvnyYPkF5eRHvAhty5Fl1chThtCMLk0JnP&usqp=CAU" alt=""/>
            <h4>IRA Accounts</h4>
            <p className="text-muted">Rollover IRA | Roth IRA | Regular IRA</p>
            <p>Each account holder can have up to 3 IRA accounts, but only one of each type for an account holder.</p>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted"></p>
        </div>
      </div>
      </div>
    </div>
  </section>

    
</top>
  );
}

export default Top;