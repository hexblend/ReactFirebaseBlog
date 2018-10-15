import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
