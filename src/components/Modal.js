import React,{ useState,useEffect } from 'react'
import {CSSTransition} from 'react-transition-group'
import './Modal.css'
import ReactDOM from "react-dom";

function Modal(props) {


    const closeOnEscapekeyDown = (e) => {
      if((e.charCode || e.keyCode) === 27){
        props.onClose()
      }
    }

    useEffect(() => {
      document.body.addEventListener('keydown',closeOnEscapekeyDown)
      return () => {
        document.body.removeEventListener('keydown',closeOnEscapekeyDown)
      }
    }, [])

    
  //   if(!props.show){
  //     return null
  // }

    return ReactDOM.createPortal(
      <CSSTransition
        in = {props.show}
        unmountOnExit
        timeout={{enter: 0,exit:300}}
>
        <div class="modal-container" onClick={props.onClose}>
            <div class="modal-content" onClick={e => e.stopPropagation()}>
        <div class="modal-header">
          <h4 class="modal-title">{props.title}</h4> 
        </div>
        <div class="modal-body">
        {props.children}
        </div>
        <div class="modal-footer">
          <button class="button" onClick={props.onClose }>Close</button>
        </div>
      </div>
      </div>
       </CSSTransition>,
     document.getElementById("root")
    )
}

export default Modal
