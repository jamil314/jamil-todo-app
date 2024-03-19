import React, { useEffect } from "react";
import styled from 'styled-components'
import Dashboard from './dashboard';
import { useCreateOrUpdateTaskStore } from "./StoreHandler";
import TaskModal from "./taskModal";
import TaskList from "./taskList";

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-primary);
  color: var(--color-text);
  display: flex;
`

const App = () => {  

  const openCreateTaskPortal = useCreateOrUpdateTaskStore(state => state.createTask);

  useEffect(() => {

    const handleKeyDown = (event) => {
      if(event.altKey || event.metaKey) {
        event.preventDefault();
        switch (event.key) {
          case 'n':
            openCreateTaskPortal();
            break;
          default:
            break;
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };  
  }, [])

  return (
    <RootContainer>
      <TaskModal/>
      <Dashboard/>
      <TaskList/>
    </RootContainer>
  )
}

export default App