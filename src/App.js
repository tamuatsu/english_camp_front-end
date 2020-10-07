import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Homework from './components/Homework/Homework';
import Register from './components/Register/Register';
import Plan from './components/Plan/Plan';
import Parent from './components/Parent/Parent';
import First from './components/First/First';
import Voices from './components/Voices/Voices';
import Voice1 from './components/Voices/Voice1';
import Voice2 from './components/Voices/Voice2';
import Voice3 from './components/Voices/Voice3';
import Voice4 from './components/Voices/Voice4';
import Voice5 from './components/Voices/Voice5';
import Voice6 from './components/Voices/Voice6';
import Voice7 from './components/Voices/Voice7';
import Counseling from './components/Counseling/Counseling';
import Contact from './components/Contact/Contact';
import Company from './components/Company/Company';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SpecialCommercialCode from './components/SpecialCommercialCode/SpecialCommercialCode';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'home',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      fetch('https://secret-depths-95333.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://secret-depths-95333.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'homework') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
     if(route === 'register') {
      return (
        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      )
    } else if(route === 'homework') {
      return (
        <div className="App">
            { route === 'homework'
              ? <div>
                    <Homework isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
                </div>
              : (
                  route === 'signin'
                  ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                  : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                )
            }
        </div>
      )
    }
    return (
      <div className="App">
          {route === 'home'} {
            <div>
              <Router>
                <ScrollToTop>
                  <Switch>
                    <Route path="/company">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Company />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/register">
                      <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route exact path="/signin">
                      <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/specialcommercialcode">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <SpecialCommercialCode />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/contact">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Contact />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/counseling">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Counseling />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/voices">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Voices />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/voice1">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Voice1 />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/voice2">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Voice2 />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/voice3">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Voice3 />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/voice4">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Voice4 />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/voice5">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Voice5 />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/voice6">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Voice6 />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/voice7">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Voice7 />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/parent">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Parent />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/plan">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <Plan />
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                    <Route path="/">
                      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                      <First onRouteChange={this.onRouteChange}/>
                      <Footer onRouteChange={this.onRouteChange}/>
                    </Route>
                  </Switch>
                </ScrollToTop>
              </Router>
              </div>
          } 
      </div>
    );
  }
}

export default App;
