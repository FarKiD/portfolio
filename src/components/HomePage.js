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
          <div className="col">
            <p className="intro__paragraph">
              I am a full-stack developer
              proficient with many modern technologies.
              I started my programming career in 2017 and have
              come a long way since then.
              <br />
              The project in front of you was made to
              showcase my vast skillset. this is my most recent work
              and so far the most professional one too.
            </p>
            <a className="intro__link" href="#">
              Read More About Me...
            </a>
          </div>
        </div>
        <div className="lists row">
          <section className="col-6">
            <div className="left">
              <h3 className="left__title">
                Here is a list of my projects
              </h3>
              <a className="left__link" href="#">Project 1</a>
              <a className="left__link" href="#">Project 2</a>
              <a className="left__link" href="#">Project 3</a>
              <a className="left__link" href="#">Project 4</a>
              <a className="left__link" href="#">Project 5</a>
              <a className="left__see-all" href="#">See All</a>
            </div>
          </section>
          <section className="col-6">
          <div className="right">
              <h3 className="right__title">
                Here is a list of my abilities and skills
              </h3>
              <a className="right__link" href="#">Project 1</a>
              <a className="right__link" href="#">Project 2</a>
              <a className="right__link" href="#">Project 3</a>
              <a className="right__link" href="#">Project 4</a>
              <a className="right__link" href="#">Project 5</a>
              <a className="right__see-all" href="#">See All</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  </>
  );
};

export default HomePage;