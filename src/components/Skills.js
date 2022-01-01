import React from 'react';


import { skillsLoad } from "../js/skills.js";
import "../styles/skills.scss";

class Skills extends React.Component {
  componentDidMount() {
    skillsLoad();
  }

  render() {
    return(
      <>
        <div className='container-fluid'>
          <section className='front'>
            <h2 className='front--title h1'>
              Front-End
            </h2>
            <div className='row'>
              <div className='col front--skill'>
                <div className='front--skill--title'>
                  <h3>
                    Markup Languages
                  </h3>
                </div>
                <div className='front--skill--body'>
                  <h4 className='p'>
                    HTML
                  </h4>
                  <h4 className='p'>
                    XML
                  </h4>
                </div>
              </div>
              <div className='col front--skill'>
                <div className='front--skill--title'>
                  <h3>
                    Styling
                  </h3>
                </div>
                <div className='front--skill--body'>
                  <h4 className='p'>
                    CSS
                  </h4>
                  <h4 className='p'>
                    SCSS
                  </h4>
                  <h4 className='p'>
                    Bootstrap
                  </h4>
                  <h4 className='p'>
                    jQuery UI
                  </h4>
                  <div className='front--skill--item'>
                    <h4 className='p'>
                      Icon Libraries
                    </h4>
                    <p className='small'>
                      Bootstrap Icons, Font Awesome, Line Icons etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col front--skill'>
                <div className='front--skill--title'>
                  <h3>
                    Scripting
                  </h3>
                </div>
                <div className='front--skill--body'>
                  <h4 className='p'>
                    JavaScript
                  </h4>
                  <h4 className='p'>
                    jQuery
                  </h4>
                  <h4 className='p'>
                    EcmaScript6+
                  </h4>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col front--skill'>
                <div className='front--skill--title'>
                  <h3>
                    Other Skills
                  </h3>
                </div>
                <div className='front--skill--body'>
                  <div className='row'>
                    <h4 className='p col'>
                      React.js
                    </h4> 
                    <h4 className='p col'>
                      Webpack
                    </h4> 
                    <h4 className='p col'>
                      NPM and Yarn
                    </h4> 
                  </div>
                  <div className='row'>
                    <h4 className='p col'>
                      React Router
                    </h4> 
                    <h4 className='p col'>
                      Redux
                    </h4>
                    <h4 className='p col'>
                      Git, Github, Gitlab
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=''>
            <h2 className='h1'>
              Back-End
            </h2>
          </section>
        </div>
      </>
    );
  }
};

export default Skills;