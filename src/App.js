import React, { Component } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
    showBackdrop: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true, showBackdrop: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  hideBackdrop = () => {
    this.setState({showBackdrop: false});
  }

  render() {
    const defaultStyle = {
      transition: `opacity 1000ms ease-in-out`,
      opacity: 0,
      backgroundColor: "red",
      width: 100,
      height: 100,
      margin: 'auto'
    }
    
    const transitionStyles = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 },
    };

    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <Transition 
          in={this.state.showBlock} 
          timeout={1000}
          mountOnEnter
          unmountOnExit
          >
            {state => (
               <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
              </div>
            )}
        </Transition>
        <br/>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} hide={this.hideBackdrop}/>
        {this.state.showBackdrop ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
