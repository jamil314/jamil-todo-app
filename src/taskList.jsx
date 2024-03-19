import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Task from "./task"
import { useFilterStore, useSortStore, useTaskStore, useSearchStore} from "./StoreHandler";


const TasksContainer = styled.ul`
  margin: 0;
  padding: 0;
  padding-right: 20px;
  width: 90vw;
  align-items: center;
  overflow-y: scroll;
`


const TaskList = () => {  
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
    const unsubscribeSearch = useSearchStore.subscribe(
      (Search) => {setTasks(getTasks())},
      (state) => [state.param]
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
      unsubscribeSearch();
    };  
    }, [])

  return (
      <TasksContainer>
        {tasks.map(task => {return <Task task={task} key={task.id}/>})} 
      </TasksContainer>
  )
}

export default TaskList