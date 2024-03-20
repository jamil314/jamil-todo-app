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
    border-top: solid black 2px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    :first-child{
      border-right: solid black 2px;
    }
`
const Button = styled.button`
    border: 0;
    /* background-color: aliceblue; */
    height: 40px;
    width: 100%;
    /* width: ${(props) => (props.wide ? '120px' : '80px')}; */
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
                  <Button
                    wide 
                    onClick={onAbort}
                    style={{
                      "borderRight":"solid black 2px",
                    }}
                  >
                      Cancel
                    </Button>
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