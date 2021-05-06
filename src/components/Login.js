import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import '../App.css';
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";
import {Link,NavLink,Redirect,useHistory } from 'react-router-dom';
import Signup from './Signup'


function Login() {


  const [values, setValues] = useState({
    username: "",
    password: "",
    loading: false,
    message: ""
    } );

    const history = useHistory();

  //   useEffect(() => {
  //     return history.listen((location) => { 
  //        console.log(`You changed the page to: ${location.pathname}`) 
  //     }) 
  //  },[history]) 

  function validateForm() {
    return values.username.length > 0 && values.password.length > 0;
  };

  const updateField = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  function handleLogin(e) {
    e.preventDefault();
    e.target.reset();

    setValues({
      message: "",
      loading: true
    });

    

    if (true) { //this.checkBtn.context._errors.length === 0
      AuthService.login(values.username, values.password).then(
        () => {
         history.push({
            pathname: '/profile',
            state: {
              response: "messageFromServer"
            }
        });
          console.log("success");
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            console.log("failed");
          setValues({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      setValues({
        loading: false
      });
    }
  }


    return (
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Sign In</h3>
              <div class="d-flex justify-content-end social_icon">
                <span><i class="fab fa-facebook-square"></i></span>
                <span><i class="fab fa-google-plus-square"></i></span>
                <span><i class="fab fa-twitter-square"></i></span>
              </div>
            </div>
            <div class="card-body">
              <Form onSubmit={handleLogin}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <Form.Control
                    autoFocus
                    type="text"
                    name="username"
                    placeholder="username"
                    value={values.username}
                    onChange={updateField}
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={updateField}
                  />
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox" />Remember Me
              </div>
                <div class="form-group">
                  <input type="submit" value="Login" class="btn float-right login_btn"></input>
                </div><br></br><br></br>
                {values.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {values.message}
                </div>
              </div>
            )}
                {/* <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }} /> */}
              </Form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                Don't have an account?
                <a href="./Signup">click here to signUp</a>
              </div>
              <div class="d-flex justify-content-center">
                <a href="./signup">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }

  export default Login
