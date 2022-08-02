import React from 'react';

import "../styles/projects.scss";

import scrollActivator from '../util/scrollActivator';
import { loadModalFromURL } from '../js/projects';

import {Modal, Button} from 'react-bootstrap';

import kandaPic from '../images/kanda.jpg';
import shopPic from '../images/shop.jpg';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisibility: false
    }
  }
  
  componentDidMount() {
    scrollActivator();
    loadModalFromURL(this.handleModalShow);
  }

  handleModalShow = () => {
    this.setState({
      ModalVisibility: true
    });
  };

  handleModalClose = () => {
    this.setState({
      ModalVisibility: false
    });
  };

  render() {
    return(
      <>
        <div className='container-fluid'>
          <div className='row kanda'>
            <div className='col-3 image-container'>
              <img className='kanda__image img-fluid' src={kandaPic} />
            </div>
            <div className='col kanda__content'>
              <h3>
                Kanda Idea
              </h3>
              <p>
                Kanda Idea is a respectable GIS and technology based company.
                in 2021 I had the great opportunity to work together with their development team and I was tasked with the 
                Front-End of their new website, this was the result.
                <br />
                <span><small>Disclaimer: The website has had small changes since I worked on it. I can provide my own version if needed.</small></span>
              </p>
              <a className='h4 content-link' href='https://kandaidea.com/'>Kanda Idea</a>
              <br />
              <span>Keywords: Front-End, Javascript, Responsive</span>
            </div>
          </div>
          <div className='row shop'>
            <div className='col-3 image-container'>
              <img className='shop__image img-fluid' src={shopPic} />
            </div>
            <div className='col shop__content'>
              <h3>
                Online Shop Project
              </h3>
              <p>
                Shortly after my departure with Kanda Idea, I focused on learning Back-End,
                and this project was the ultimate result of that.
                <br />
                it pretty much is a back-end skill showcase.
                <br />
                <span><small>Disclaimer: Since using Heroku, the website might not work it's full potential.</small></span>
              </p>
              <a className='h4 content-link' href='https://ostadebrahim-shop.herokuapp.com/'>Online Shop</a>
              <br />
              <span>Keywords: Back-End, Authentication, Database</span>
            </div>
          </div>
          <div className='row others'>
            <div className='col'>
              <a href='/jcards.rar'>Japanese Cards</a>
            </div>
            <div className='col' onClick={this.handleModalShow}>
              <a id='portfolioLink' href='/projects#portfolio'>Online Portfolio</a>
            </div>
            <div className='col'>
              <a href='/reader'>Speed Reader App</a>
            </div>
            <div className='col'>
              <a href='/stopwatch' target="_blank">Simple Stopwatch</a>
            </div>
          </div>
          <Modal id="portfolioModal" show={this.state.ModalVisibility} onHide={this.handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleModalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleModalClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  };
};

export default Projects;