import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Task from "./task"
import Dashboard from './dashboard';
import { useFilterStore, useSortStore, useTaskStore } from "./StoreHandler";
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
  const getTasks = useTaskStore((state) => state.getSortedFilteredTasks);
  const updateTask = useTaskStore((state) => state.updateTask);

  const [tasks, setTasks] = useState(getTasks())
  useEffect(() => {
    //seed correctly
    const updateTaskPromises = tasks.map(task => {
      return updateTask(task);
    });
    
    Promise.all(updateTaskPromises)
      .then(() => {
        setTasks(getTasks());
      })
      .catch(error => {
        console.error('Error while seeding mock tasks', error);
      });

    const unsubscribeTasks = useTaskStore.subscribe(
      (tasks) => {setTasks(getTasks())},
      (state) => state.tasks
    );
    const unsubscribeFilter = useFilterStore.subscribe(
      (filter) => {setTasks(getTasks())},
      (state) => [state.filters, state.toFilter]
    );
    const unsubscribeSort = useSortStore.subscribe(
      (cata) => {
        setTasks(getTasks())
      },
      (state) => state.catagory
    );
  
    return () => {
      unsubscribeTasks();
      unsubscribeFilter();
      unsubscribeSort();
    };  }, [])
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