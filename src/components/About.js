import React from 'react';

import "../styles/about.scss";

import mySelfPic from '../images/myself.png';

const About = () => {
  return(
    <>
      <div className='container-fluid'>
        <main>
          <section className='profile'>
            <div className='profile__image__container'>
              <img className='profile__image' src={mySelfPic} />
            </div>
            <div className='profile__info'>
              <p>
                <strong>Name: </strong>Sajjad Ostadebrahim
              </p>
              <p>
                <strong>Birthdate: </strong>25 Nov. 1998
              </p>
              <p>
                <strong>Location: </strong>Tehran, Shahriyar
              </p>
              <p>
                <strong>Marital Status: </strong>Single
              </p>
              <p>
                <strong>Development Experience: </strong>+3 Years
              </p>
            </div>
            <div className='profile__slogans__container'>
              <div className='profile__slogans'>
                <h2>
                  Dedication
                </h2>
              </div>
              <div className='profile__slogans'>
                <h2>
                  Aspiration
                </h2>
              </div>
              <div className='profile__slogans'>
                <h2>
                  Comprehension
                </h2>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;