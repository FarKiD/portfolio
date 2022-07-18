import React from 'react';

import "../styles/projects.scss";

const Projects = () => {
  return(
    <>
      <div className='container-fluid'>
        <div className='row kanda'>
          <div className='col-3'>
            Image goes here
          </div>
          <div className='col'>
            Content here
          </div>
        </div>
        <div className='row portfolio'>
          <div className='col-3'>
            Image goes here
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

export default Projects;