import React from 'react';
import { skillsLoad } from "../js/skills.js";
import "../styles/skills.scss";

class Skills extends React.Component {
  componentDidMount() {
    skillsLoad();
  }

  toggleSkill = (event) => {
    let targetElement = ['.skill__item', 'skill__item h4', 'skill__item h4 i'];
    let parentElement = event.target;
    if (jQuery.inArray(event.target, targetElement)) {
      do {
        if (parentElement.className.includes('skill__item')) {
          if (!parentElement.className.includes('itemClicked')) {
            $(parentElement).addClass('itemClicked');
            $(parentElement.childNodes[1]).css({
              'top': '0',
              'opacity': '100%',
              'max-height': '50rem'
            });
            $(parentElement.childNodes[0].children[0])
            .toggleClass('bi-chevron-double-down bi-chevron-double-up');
          } else if (parentElement.className.includes('itemClicked')) {
            $(parentElement).removeClass('itemClicked');
            $(parentElement.childNodes[1]).css({
              'top': '-1.2rem',
              'opacity': '0',
              'max-height': '0'
            });
            $(parentElement.childNodes[0].children[0])
            .toggleClass('bi-chevron-double-down bi-chevron-double-up');
          }
          return;
        }
  
        parentElement = parentElement.parentNode;
      } while (parentElement);
    }
  }

  render() {
    return(
      <>
        <div className='container-fluid'>
          <section className='front'>
            <h2 className='front__title h1'>
              Front-End
            </h2>
            <div className='row front__row'>
              <div className='col skill'>
                <div className='skill__title'>
                  <h3>
                    Styling
                  </h3>
                </div>
                <div className='skill__body'>
                  <div className='skill__item'>
                    <h4 className='p'>
                      CSS
                    <svg>
                      <use href="#cssLogo" />
                    </svg>
                    </h4>
                  </div>
                  <div className='skill__item'>
                    <h4 className='p'>
                      SCSS
                      <svg>
                        <use href="#sassLogo" />
                      </svg>
                    </h4>
                  </div>
                  <div className='skill__item'>
                    <h4 className='p'>
                      Bootstrap
                      <svg>
                        <use href="#bootstrapLogo" />
                      </svg>
                    </h4>
                  </div>
                </div>
              </div>
              <div className='col skill'>
                <div className='skill__title'>
                  <h3>
                    Scripting
                  </h3>
                </div>
                <div className='skill__body'>
                  <div className='skill__item'>
                    <h4 className='p'>
                      JavaScript
                      <svg>
                        <use href="#jsLogo" />
                      </svg>
                    </h4>
                  </div>
                  <div className='skill__item'>
                    <h4 className='p'>
                      jQuery
                      <svg>
                        <use href="#jqueryLogo" />
                      </svg>
                    </h4>
                  </div>
                  <div className='skill__item'>
                    <h4 className='p'>
                      ECMAScript6+
                      <svg>
                        <use href="#es6Logo" />
                      </svg>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col skill'>
                <div className='skill__title'>
                  <h3>
                    Other Skills
                  </h3>
                </div>
                <div className='skill__body'>
                  <div className='row'>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        React.js
                        <svg>
                           <use href="#reactLogo" />
                        </svg>
                      </h4>   
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Webpack
                        <svg>
                           <use href="#webpackLogo" />
                        </svg>
                      </h4> 
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        NPM and Yarn
                        <svg>
                           <use href="#npmLogo" />
                        </svg>
                      </h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        React Router
                        <svg>
                           <use href="#reactRouterLogo" />
                        </svg>
                      </h4>   
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        jQuery UI
                      </h4> 
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        BEM Naming Convention
                        <svg>
                           <use href="#bemLogo" />
                        </svg>
                      </h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Jest
                        <svg>
                           <use href="#jestLogo" />
                        </svg>
                      </h4> 
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Redux
                        <svg>
                           <use href="#reduxLogo" />
                        </svg>
                      </h4>
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Responsive Web Design (RWD)
                      </h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div onClick={(e) => this.toggleSkill(e)} className='skill__item pointer col'>
                      <h4 className='p'>
                        Icon Libraries <i class="bi bi-chevron-double-down"></i>
                      </h4>
                      <p className='small skill__item--info'>
                        - Bootstrap Icons, Font Awesome, Line Icons...
                      </p>
                    </div>
                    <div onClick={(e) => this.toggleSkill(e)} className='skill__item pointer col'>
                      <h4 className='p'>
                        Version Control <i class="bi bi-chevron-double-down"></i>
                        <svg>
                           <use href="#githubLogo" />
                        </svg>
                      </h4>
                      <p className='small skill__item--info'>
                        - Git, GitHub, GitLab...
                      </p>
                    </div>
                    <div onClick={(e) => this.toggleSkill(e)} className='skill__item pointer col'>
                      <h4 className='p'>
                        W3Schools <i class="bi bi-chevron-double-down"></i>
                      </h4>
                      <p className='small skill__item--info'>
                        - W3.CSS &amp; W3.JS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='back'>
            <h2 className='h1 back__title'>
              Back-End
            </h2>
            <div className='row front__row'>
              <div className='col skill'>
                <div className='skill__title'>
                  <h3>
                    Server
                  </h3>
                </div>
                <div className='skill__body'>
                  <div className='skill__item'>
                    <h4 className='p'>
                      Node.js
                      <svg>
                        <use href="#nodejsLogo" />
                      </svg>
                    </h4>
                  </div>
                  <div className='skill__item'>
                    <h4 className='p'>
                      Express.js
                    </h4>
                  </div>
                  <div className='skill__item'>
                    <h4 className='p'>
                      AJAX
                    </h4>
                  </div>
                </div>
              </div>
              <div className='col skill'>
                <div className='skill__title'>
                  <h3>
                    Data Handling
                  </h3>
                </div>
                <div className='skill__body'>
                  <div className='skill__item'>
                    <h4 className='p'>
                      MySQL
                      <svg>
                        <use href="#mySQLLogo" />
                      </svg>
                    </h4>
                  </div>
                  <div className='skill__item'>
                    <h4 className='p'>
                      MongoDB
                      <svg>
                        <use href="#mongodbLogo" />
                      </svg>
                    </h4>
                  </div>
                  <div className='skill__item'>
                    <h4 className='p'>
                      JSON
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col skill'>
                <div className='skill__title'>
                  <h3>
                    Other Skills
                  </h3>
                </div>
                <div className='skill__body'>
                  <div className='row'>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Mongoose
                      </h4>   
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Sequelize
                      </h4> 
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Authentication
                      </h4>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Firebase
                      </h4>
                    </div>
                    <div className='skill__item col'>
                      <h4 className='p'>
                        Socket.io
                      </h4>
                    </div>
                    <div onClick={(e) => this.toggleSkill(e)} className='skill__item pointer col'>
                      <h4 className='p'>
                        Templating Engines <i class="bi bi-chevron-double-down"></i>
                      </h4>
                      <p className='small skill__item--info'>
                        - HAML, PUG, React Templating Engine, EJS...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
};

export default Skills;