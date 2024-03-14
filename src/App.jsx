import React, { useState } from "react";
import styled from 'styled-components'
import { mockTasks } from "./mockTasks"
import Task from "./task"
import Modal from "./Modal";
import TaskForm from "./taskForm";
import Dashboard from './dashboard';

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-primary);
  color: var(--color-text);
  display: flex;
`
const TaskList = styled.ul`
  margin: 0;
  padding: 0;
  width: 90vw;
  align-items: center;
  overflow-y: scroll;
`
const App = () => {
  const [tasks, setTasks] = useState(mockTasks)
  const [showModal, setshowModal] = useState(false)
  const createTask = newTask => {
    setTasks([...tasks, newTask])
    setshowModal(false)
  }
  return (
    <RootContainer>
      <Modal showModal={showModal} closeModal={() => setshowModal(false)}>
        <TaskForm createTask={createTask} setshowModal={setshowModal}/>
      </Modal>
      <Dashboard setshowModal={setshowModal} />
      <TaskList>
        {tasks.map(task => {return <Task task={task} key={task.id}/>})} 
      </TaskList>
    </RootContainer>
  )
}

export default App
