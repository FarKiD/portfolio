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
            <div className='front--border'></div>
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