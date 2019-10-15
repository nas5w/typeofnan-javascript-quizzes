import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px'
  }
};

Modal.setAppElement('#___gatsby');

const AboutModal = props => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h1>Why I Make These Quizzes</h1>
      <p>
        These quizzes are intended to be fun ways to test your JavaScript
        knowledge. Many of them are tricky and dive into subjects that tripped
        me up when I was first learning the language. I find the concepts
        underlying each of these questions to be important to know as a
        JavaScript developer.
      </p>
      <p>
        Also, and fairly importantly, I'm considered a senior developer and
        would probably have trouble with a lot of these questions had I not made
        them myself. Please don't be hard on yourself as you attempt these
        questions; we're all still learning!
      </p>
      <button className="ui button" onClick={props.closeModal}>
        Close
      </button>
    </Modal>
  );
};

const ClearAnswerModal = props => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Clear My Answer"
    >
       <h1 className="ui header red">Warning !</h1>
       <p>
       Are you sure you want to clear your answer for this question?
      </p>
      <button className="ui button blue" onClick={props.closeModal}>No</button>
      <button className="ui button red" onClick={props.clearAnswer}>Yes</button>
    </Modal>
  )
}

export{AboutModal,ClearAnswerModal}