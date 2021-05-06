import React,{ useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import { BrowserRouter as Router , Route, Link,Switch } from "react-router-dom";
import Home from './components/Pages/Home'
import Modal from "./components/Modal"

function App() {

     const [show, setshow] = useState(false)

    return (
    //     <div class="App-m">
    //     <button onClick={() => setshow(true)}>show modal</button>
    //      <Modal title = "My Modal" onClose={() => setshow(false)} show={show}>
    //          <p> This is my modal </p>
    //          </Modal>
    //    </div>
     
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path='/SignUp' exact component = {Signup}/>
          <Route path='/Login' exact component = {Login}/>
          <Route path='/Profile' exact component = {Profile}/>
         
        </Switch>
    </Router> 
    );
}

export default App;