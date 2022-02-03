import React from 'react';

import "../styles/about.scss";

import mySelfPic from '../images/myself.png';

class About extends React.Component {
  componentDidMount() {
    $('html, body').css({
      'overflow-y': 'visible',
      'overflow-x': 'hidden'
    });
  }

  render() {
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
                    Intuition
                  </h2>
                </div>
              </div>
            </section>
            <section className='row info'>
              <div className='col info__biography'>
                <h3>
                  Biography
                </h3>
                <p>
                  Born and raised in Tehran, Iran. I had a fairly simple childhood.
                  I participated in Biology studies in high-school but very soon after graduation,
                  I realized my real passion is in programming.
                  after a few months of practicing C++ to become a game developer, and
                  doing a very short SEO internship, I found interest in Web Developing
                  and I have been occupied doing this ever since.
                  <br />
                  I am a very proficient self-learner, I've taught myself English and everything I know
                  about Programming, but that hasn't stop me from learning more!
                </p>
              </div>
              <div className='col info__points'>
                <div className='info__strong'>
                  <h3>
                    Strong Points
                  </h3>
                  <div className='info__points__items'>
                    <a>
                      Focused
                    </a>
                    <a>
                      Unflappable 
                    </a>
                    <a>
                      Disciplined
                    </a>
                  </div>
                </div>
                <div className='info__weak'>
                  <h3>
                    Weak Points
                  </h3>
                  <div className='info__points__items'>
                    <a>
                      Recluse
                    </a>
                    <a>
                      Prideful
                    </a>
                    <a>
                      Irritable
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }
};

export default About;