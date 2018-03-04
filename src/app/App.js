import React, { Component } from 'react';
import Header from './presenters/header/Header';
import MainContent from './presenters/mainContent/MainContent'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
