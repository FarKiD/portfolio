import React from 'react';

const HomePage = () => {
  return(
  <>
    <div className="container-fluid">
      <main>
        <div className="intro row">
          <div className="col-2">
            <h2 className="intro__title">
              who <br />
              am I?
            </h2>
          </div>
          <div className="intro__text col">
            <p className="intro__paragraph">
              My name is Sajjad Ostadebrahim
              <br />
              I'm a Full-Stack Developer.
            </p>
            <a className="intro__link" href="#">
              Read More About Me
            </a>
          </div>
          <div className="intro__banner col"></div>
        </div>
        <div className="row">
          
        </div>
      </main>
    </div>
  </>
  );
};

export default HomePage;