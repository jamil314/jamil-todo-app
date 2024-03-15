import React, { useState } from "react";
import styled from 'styled-components'
import Task from "./task"
import Modal from "./Modal";
import TaskForm from "./taskForm";
import Dashboard from './dashboard';
import { useStore } from "./StoreHandler";

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-primary);
  color: var(--color-text);
  display: flex;
`
const TaskList = styled.ul`
  margin: 0;
  padding: 0 10px;
  width: 90vw;
  align-items: center;
  overflow-y: scroll;
`
const App = () => {
  const [showModal, setshowModal] = useState(false)
  
  const tasks = useStore((state) => state.tasks);
  return (
    <RootContainer>
      <Modal showModal={showModal} closeModal={() => setshowModal(false)}>
        <TaskForm setshowModal={setshowModal}/>
      </Modal>
      <Dashboard setshowModal={setshowModal} />
      <TaskList>
        {tasks.map(task => {return <Task task={task} key={task.id}/>})} 
      </TaskList>
    </RootContainer>
  )
}

export default App
