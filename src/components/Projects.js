import React from 'react';

import "../styles/projects.scss";

import kandaPic from '../images/kanda.jpg';
import shopPic from '../images/shop.jpg';

class Projects extends React.Component {
  render() {
    return(
      <>
        <div className='container-fluid'>
          <div className='row kanda'>
            <div className='col-3'>
              <img className='kanda__image img-fluid' src={kandaPic} />
            </div>
            <div className='col'>
              Content here
            </div>
          </div>
          <div className='row portfolio'>
            <div className='col-3'>
              <img className='portfolio__image img-fluid' src={shopPic} />
            </div>
            <div className='col'>
              Content here
            </div>
          </div>
          <div className='row others'>
            <div className='col'>
              Content here
            </div>
            <div className='col'>
              Content here
            </div>
            <div className='col'>
              Content here
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default Projects;