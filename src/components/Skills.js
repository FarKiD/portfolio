import React from 'react';
import { skillsLoad } from "../js/skills.js";
import "../styles/skills.scss";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    skillsLoad();
  }

  toggleSkill = (event) => {
    let targetElement = ['.front__skill__item', 'front__skill__item h4', 'front__skill__item h4 i'];
    let parentElement = event.target;
    if (jQuery.inArray(event.target, targetElement)) {
      do {
        if (parentElement.className == 'front__skill__item') {
          if (!this.state.visible) {
            $(parentElement.childNodes[1]).css({
              'top': '0',
              'opacity': '100%',
              'max-height': '50rem'
            });
            this.setState({
              visible: true
            });
          } else if (this.state.visible) {
            $(parentElement.childNodes[1]).css({
              'top': '-1.2rem',
              'opacity': '0',
              'max-height': '0'
            });
            this.setState({
              visible: false
            });
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
            <div className='row'>
              <div className='col front__skill'>
                <div className='front__skill__title'>
                  <h3>
                    Markup Languages
                  </h3>
                </div>
                <div className='front__skill__body'>
                  <h4 className='p'>
                    HTML
                  </h4>
                  <h4 className='p'>
                    XML
                  </h4>
                </div>
              </div>
              <div className='col front__skill'>
                <div className='front__skill__title'>
                  <h3>
                    Styling
                  </h3>
                </div>
                <div className='front__skill__body'>
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
                  <div onClick={(e) => this.toggleSkill(e)} className='front__skill__item'>
                    <h4 className='p'>
                      Icon Libraries <i class="bi bi-chevron-double-down"></i>
                    </h4>
                    <p className='small front__skill__item--info'>
                      Bootstrap Icons, Font Awesome, Line Icons etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col front__skill'>
                <div className='front__skill__title'>
                  <h3>
                    Scripting
                  </h3>
                </div>
                <div className='front__skill__body'>
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
              <div className='col front__skill'>
                <div className='front__skill__title'>
                  <h3>
                    Other Skills
                  </h3>
                </div>
                <div className='front__skill__body'>
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
          <section className='back'>
            <h2 className='h1 back__title'>
              Back-End
            </h2>
          </section>
        </div>
      </>
    );
  }
};

export default Skills;