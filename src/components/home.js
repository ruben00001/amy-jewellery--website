import React, { Component } from 'react';
import { ImageList } from '../data/data';

class Home extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        container: 0,
        subContainerSize: 1,
        currentSubContainer: 1,
      }
  
      this.incrementContainer = this.incrementContainer.bind(this);
    }
  
    incrementContainer() {
      if(this.state.subContainerSize === 1 || (this.state.currentSubContainer === this.state.subContainerSize)) {
        if(this.state.container + 1 === ImageList.length) {
          this.setState({
            container: 0,
            subContainerSize: 1,
            currentSubContainer: 1
          });
        } else {
          this.setState({
            container: this.state.container + 1,
            subContainerSize: ImageList[this.state.container + 1].length,
            currentSubContainer: 1
          });
        }
      } else {
        this.setState({        
          currentSubContainer: this.state.currentSubContainer + 1
        });
      }
    }
  
    render() {    
      let makeVisible = {
        visibility: 'visible',
      }
      let makeHidden = {
        visibility: 'hidden',
      }
  
      let images = ImageList[this.state.container].map((image, i) => { 
        return (
          <div className={`img-all img-${image.index}`} style={(i + 1 <= this.state.currentSubContainer) ? makeVisible : makeHidden} key={image.index}>
            <img src={image.src} alt="jewellery"/>
          </div>
        );
      });
  
      return (
        <div onClick={this.incrementContainer} className="home-container">
          <div className="imgs-container">
            { images }
          </div>
        </div>
      );
    }
  }

  export default Home;