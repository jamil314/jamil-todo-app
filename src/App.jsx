import React from "react";
import styled from 'styled-components'
import Task from "./task"
import Dashboard from './dashboard';
import { useTaskStore } from "./StoreHandler";
import TaskModal from "./taskModal";

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
  padding-right: 20px;
  width: 90vw;
  align-items: center;
  overflow-y: scroll;
`
const App = () => {  
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <RootContainer>
      <TaskModal/>
      <Dashboard/>
      <TaskList>
        {tasks.map(task => {return <Task task={task} key={task.id}/>})} 
      </TaskList>
    </RootContainer>
  )
}

export default App
