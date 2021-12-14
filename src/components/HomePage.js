import React from 'react';

const HomePage = () => {
  return(
  <>
    <div className="container-fluid">
      <main>
        <div className="intro row">
          <div className="col-2 no-pad">
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
        <div className="second row">
          <div className="second__title col-8">
            <h2>
              what is <br />
              this?
            </h2>
          </div>
          <div className='second__text col'>
            <p className='second__paragraph'>
              This is my Portfolio
              <br />
              A modern and comprehensive project.
            </p>
            <a className='second__link' href='#'>
              Read More About It
            </a>
          </div>
          <div className='second__banner col'></div>
        </div>
        <section>
          <div className='outro row'>
            <div className='outro__github col'>
              The project's github
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
  );
};

export default HomePage;