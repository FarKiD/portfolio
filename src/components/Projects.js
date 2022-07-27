import React from 'react';

import "../styles/projects.scss";

import scrollActivator from '../util/scrollActivator';

import kandaPic from '../images/kanda.jpg';
import shopPic from '../images/shop.jpg';

class Projects extends React.Component {
  componentDidMount() {
    scrollActivator();
  }

  render() {
    return(
      <>
        <div className='container-fluid'>
          <div className='row kanda'>
            <div className='col-3 image-container'>
              <img className='kanda__image img-fluid' src={kandaPic} />
            </div>
            <div className='col'>
              <h3>
                Kanda Idea
              </h3>
              <p>
                Kanda Idea is a respectable GIS and technology based company.
                in 2021 I had the great opportunity to work together with their development team and I was tasked with the 
                Front-End of their new website. I got to work alongside their talented design team and understanding co-ordinators,
                it was a great experience for me.
                <br />
                One of the toughests challenges was the large sitemap, we created around 20 pages for the website. some of which are private or unused in the main website.
                <br />
              </p>
              <a href='https://kandaidea.com/'>Kanda Idea</a>
              <span>Keywords: Front-End, Pure Javascript, Responsive Design</span>
              <span><small>Disclaimer: The website has had small changes since I worked on it. I can provide my own version if needed.</small></span>
            </div>
          </div>
          <div className='row portfolio'>
            <div className='col-3 image-container'>
              <img className='portfolio__image img-fluid' src={shopPic} />
            </div>
            <div className='col'>
              <h3>
                Online Shop Project
              </h3>
              <p>
                Shortly after my departure with Kanda Idea, I focused on learning Back-End,
                and this project was the ultimate result of that.
                <br />
                it pretty much is a back-end skill showcase.
              </p>
              <a href='https://ostadebrahim-shop.herokuapp.com/'>Online Shop</a>
              <span>Keywords: Back-End, Authentication, Database</span>
              <span><small>Disclaimer: Since using Heroku, the website might not work it's full potential.</small></span>
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