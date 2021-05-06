import React, { useState } from 'react'
import "./Signup.css";
import { Link,useHistory } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import '../App.css';
import AuthService from "../services/auth.service";
import Modal from "./Modal"

function Signup() {


  const [values, setValues] = useState({
    email: "",
    password: "",
    newPassword: "",
    userName: "",
    loading: false,
    message: ""
  });

  const [show, setshow] = useState(false)

  const history = useHistory();


  // function validateForm() {
  //     return values.email.length > 0 && values.password.length > 0;
  //   };

  const updateField = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  

  function handleSignUp(e) {
    e.preventDefault();
    e.target.reset();

    setValues({
      message: "",
      loading: true
    });

       AuthService.register(values.userName, values.email, values.password).then(
        (response) => {
          console.log(response)
          const resMessage =
            (response.data &&
              response.data.message) ||
              response.data ||
              response.toString();
          setValues({
            loading: false,
            message: resMessage
          });
        //   history.push({
        //     pathname: '/Login',
        //     state: {
        //       response: JSON.stringify(response.data.messages)
        //     }
        // });
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
  }



  return (
    <div class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Sign Up</h3>
          </div>
        <div class="card-body">
          <Form id="signup-form" onSubmit={handleSignUp}>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <Form.Control
                autoFocus
                type="text"
                value={values.userName}
                name="userName"
                placeholder="user name"
                onChange={updateField}
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              <Form.Control
                autoFocus
                type="email"
                value={values.email}
                name="email"
                placeholder="email"
                onChange={updateField}
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <Form.Control
                type="password"
                value={values.password}
                name="password"
                placeholder="password"
                onChange={updateField}
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <Form.Control
                type="password"
                value={values.newPassword}
                name="newPassword"
                placeholder="Reenter password"
                onChange={updateField}
              />
            </div>
            <div class="form-group">
              {/* <input type="submit" value="sign up" class="btn float-right login_btn" onClick={() => setshow(true)}></input> */}
              <button class="btn float-right login_btn" onClick={() => setshow(true)}>signup</button>
              {/* {values.message && ( */}
              <div className="form-group">
                {/* <div className="alert alert-danger" role="alert"> */}
                  {/* {values.message} */}
                  <Modal title = "Registration Status" onClose={() => setshow(false)} show={show}>
             <p> {values.message} </p>
             </Modal>
                {/* </div> */}
                   
              </div>
        {/* //  <Modal title = "Registration Status" onClose={() => setshow(false)} show={show}>
        //      <p> {values.message} </p>
        //      </Modal> */}
            {/* )} */}
            </div>
          </Form>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Signup
