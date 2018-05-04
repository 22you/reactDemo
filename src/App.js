import React, { Component } from 'react';
 import Router from './router/index'
import MainHeader from './view/common/main-header'
import MainFooter from './view/common/main-footer'
import './view/index.css'
class App extends Component {
  render() {
    return <div className="pageWrap">
      <MainHeader/>
      <main className="Main">
       <Router/>
      </main>
      <MainFooter/>
    </div>
  }
}

export default App;
