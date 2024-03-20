import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Task from "./task"
import { useFilterStore, useSortStore, useTaskStore, useSearchStore} from "./StoreHandler";


const TasksContainer = styled.div`
  /* margin: 0;
  padding: 0; */
  width:calc(100vw - 300px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

const TaskColumn = styled.ul`
padding: 0;
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
        <TaskColumn>
          {tasks.map(task => {return <Task task={task} key={task.id}/>})} 
        </TaskColumn>
      </TasksContainer>
  )
}

export default TaskList