import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Route, Link,Switch } from "react-router-dom";
import Home from './components/Pages/Home'

function App() {
    return (
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/' exact component = {Home}/>
        </Switch>
    </Router>  
    );
}

export default App;