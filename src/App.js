import React, { Component } from 'react';
import './App.css';
import avatar from './resources/avatar.png';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-top-part shadow p-3 mb-5 p-3 mb-5">
          <div className="App-canvas">
            <Particles/>
          </div>
          <div className="App-avatar-position">
            <img src={avatar} className="App-avatar" alt="avatar"/>
          </div>
        </div>
        <div className="App-bottom-part">
            <div class="container-fluid">
              <h2>Abbl</h2>
              <h5 class="text-muted">Patryk Rzucidlo</h5>
              <div class="col sm='8'">
                <div class="row App-fill-containter">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

/**
 *         <Container fluid={false}>
            <Col>
            <div className="App-topBackground">
              <img src={avatar} className="App-avatar" alt="avatar"/>
             </div>
            </Col>
        </Container>
        <Container className="App-bottom">

        </Container>

                  <div class="card App-card">
                    <div class="card-body">
                      <h5 class="card-title">ReactChat</h5>
                      <p class="card-text">OpenSource chat written with React.js and Spring REST</p>
                      <a href="https://www.github.com/abbl/ReactChat-front" class="btn btn-primary">Github</a>
                    </div>
                  </div>
 */