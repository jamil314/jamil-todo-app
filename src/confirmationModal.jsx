import React from 'react';
import styled from 'styled-components';
import { ModalBg } from './taskModal';
import { createPortal } from "react-dom"

const ConfirmModal = styled.div`
  background-color: var(--color-secondary);
  color: var(--color-text);
  padding: 20px;
  border-radius: 12px;
`
const ButtonGroup = styled.div`
    margin-top: 24px;
    padding-top: 12px;
    border-top: solid aliceblue 2px;
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const Button = styled.button`
    border: solid aliceblue 2px;
    background-color: aliceblue;
    height: 40px;
    width: ${(props) => (props.wide ? '120px' : '80px')};
    color: black;
    font-size: large;
`

const ConfirmationModal = ({showConfirmation, onConfirm, onAbort, alertText}) => {
  return (
    <div>
      {showConfirmation && 
        createPortal(
          <ModalBg>
            <ConfirmModal>
              <h3> {alertText} </h3>
              <ButtonGroup>
                  <Button wide onClick={onAbort}>
                      Go Back </Button>
                  <Button onClick={onConfirm}>Confirm</Button>
              </ButtonGroup>
            </ConfirmModal>
          </ModalBg>,
          document.body
        )
      }
    </div>
  )
}

export default ConfirmationModal;