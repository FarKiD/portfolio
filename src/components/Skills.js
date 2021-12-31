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
                  <h4 className='p'>
                    React.js
                  </h4> 
                  <h4 className='p'>
                    Webpack
                  </h4> 
                  <h4 className='p'>
                    NPM and Yarn
                  </h4> 
                  <h4 className='p'>
                    React Router
                  </h4> 
                  <h4 className='p'>
                    Redux
                  </h4>
                  <h4 className='p'>
                    Git, Github, Gitlab
                  </h4>
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