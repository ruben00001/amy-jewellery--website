import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      container: 0,
      subContainerSize: 1,
      currentSubContainer: 1
    }

    this.numberChildren = this.numberChildren.bind(this);
    this.incrementContainer = this.incrementContainer.bind(this);
  }

  numberChildren() {
    const container = document.getElementById('img-container');
    this.setState({
      subContainerSize: container.childElementCount
    })
  }

  incrementContainer() {
    this.numberChildren();

    if(this.state.subContainerSize > 1) {
      this.setState({
        currentSubContainer: this.state.currentSubContainer + 1
      });
    } else {
      this.setState({
        subContainerSize: 1,
        currentSubContainer: 1,
        container: this.state.container + 1
      });
    }
  }

  render() {
    return (
      <div onClick={this.incrementContainer} className="main-container">
        {(this.state.container === 0 && 
            <div id="img-container">
              <div>
                <img src={require("./img/22118947_10159649787355647_624928218_n (1).jpg")} alt="jewellery" />
              </div>
            </div>  
        )}
        {(this.state.container === 1 && 
            <div id="img-container">
              <div>
                <img src={require("./img/1/SS18 eye.jpg")} alt="jewellery" />
              </div>
              <div>
                <img src={require("./img/1/SS18 eye.jpg")} alt="jewellery" />
              </div>
            </div>
        )}
      </div>
    );
  }
}

export default App;
