import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { lpTagLoaded, lpTagNewPage } from './utils/lpTag';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lpTagSections: ['entrypoint']
    };
  }

  componentDidMount() {
    this.lpTagLoad();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  lpTagLoad() {
    const { state: {
      lpTagSections
    } } = this;
    this.interval = setInterval(() => {
      const tagLoaded = lpTagLoaded();
      if (tagLoaded) {
        lpTagNewPage(lpTagSections);
        clearInterval(this.interval);
      }
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is one way to load LPTag in a React APP.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
