import React from 'react'
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'

const Modal = (props) => {
  console.log('props',props.onClose)
    const BackDrop=(props)=>{
        return <div className={classes.backDrop} onClick={props.onClose}/>
    }

    const ModalOverlay = (props)=>{
        return (
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        )
    }

    const PortalElement = document.getElementById('overlays')
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,PortalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </>
  )
}

export default Modal
