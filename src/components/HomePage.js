import React from 'react';

import halftone from '../images/halftone.png';

import { indexLoad } from "../js/index.js";
import { rmvClassActive } from "../js/header.js";

import "../styles/index.scss";

class HomePage extends React.Component {
  // makes the router to reload the script
  componentDidMount() {
    indexLoad();
    rmvClassActive();
  }

  render() {
    return(
      <>
        <div className="container-fluid">
          <main>
            <div className="intro row">
              <div className="col-2 intro--title">
                <h2 className='intro--h2 intro--h2_first'>
                  who <br />
                  am I?
                </h2>
              </div>
              <div className="intro--text col">
                <p className="intro--paragraph">
                  My name is Sajjad Ostadebrahim
                  <br />
                  I'm a Full-Stack Developer.
                </p>
                <a className="intro--link" href="#">
                  Read More About Me
                </a>
              </div>
              <div className="intro--banner col"></div>
            </div>
            <div className="second row">
              <div className="second--title col-8">
                <h2 className='intro--h2 intro--h2_second'>
                  what is <br />
                  this?
                </h2>
              </div>
              <div className='second--text col'>
                <p className='second--paragraph'>
                  This is my Portfolio
                  <br />
                  A modern and comprehensive project.
                </p>
                <a className='second--link' href='#'>
                  Read More About It
                </a>
              </div>
              <div className='second--banner col'></div>
            </div>
            <section>
              <div className='outro row'>
                <div className='outro--github col-4'>
                  <h4>
                    Interested in the website?
                  </h4>
                  <p>
                    Visit and explore the source code on my GitHub!
                  </p>
                  <a className='outro--btn' href='#' target="_blank">
                    <i className='bi bi-github'></i>
                    GitHub
                  </a>
                </div>
              </div>
            </section>
          </main>
          <img className='halftone halftone_left' src={halftone}></img>
          <img className='halftone halftone_right' src={halftone}></img>
        </div>
      </>
    );
  }
};

export default HomePage;