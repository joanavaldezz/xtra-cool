import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 import navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Stylesheet from './components/Stylesheet';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <navbar />
          <Stylesheet primary={true} />
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;