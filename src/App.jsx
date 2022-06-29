import React, { Component } from 'react'
import Header from './components/layout/Header'
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

class App extends Component {


  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App