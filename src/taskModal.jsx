import React from 'react'
import styled from "styled-components";
import { createPortal } from "react-dom"
import TaskForm from './taskForm';
import { useCreateOrUpdateTaskStore } from './StoreHandler';


export const ModalBg = styled.div`
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
`
const TaskModal = () => {
  return (
    <div>
      {useCreateOrUpdateTaskStore(state => state.taskModal.open) && 
        createPortal(
          <ModalBg>
            <TaskForm/>
          </ModalBg>,
          document.body
        )
      }
    </div>
  )
}

export default TaskModal