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
          <div className="col-4">
            <p className="intro__paragraph">
              My name is Sajjad Ostadebrahim
              <br />
              I'm a Full-Stack Developer.
            </p>
            <a className="intro__link" href="#">
              Read More About Me
            </a>
          </div>
          <div className="col-4">
            <p className="intro__paragraph intro__paragraph--right">
              A full-stack web application that showcase
              <br />
              pretty much my entire profession.
            </p>
            <a className="intro__link intro__link--right" href="#">
              Read More About It
            </a>
          </div>
          <div className="col-2">
            <h2 className="intro__title intro__title--right">
              what <br />
              is this?
            </h2>
          </div>
        </div>
        <div className="row">

        </div>
      </main>
    </div>
  </>
  );
};

export default HomePage;