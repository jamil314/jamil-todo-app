import React from 'react'
import styled from "styled-components";
import { createPortal } from "react-dom"


const ModalBg = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  .closeModal{
    position: fixed;
    right: 20px;
    top: 10px;
    background-color: blue;
    border: none;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    font-size: xx-large;
    :hover{
      cursor: pointer;
    }
  }

`
const Modal = ({showModal, children}) => {
  return (
    <div>
      {showModal &&
        createPortal(
          <ModalBg>
              {children}
          </ModalBg>,
          document.body
        )}
    </div>
  )
}

export default Modal