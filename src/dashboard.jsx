import React from 'react'
import styled from 'styled-components'
import { useCreateOrUpdateTaskStore } from './StoreHandler'
import Filter from './filter'
import Sort from './sort'
import SearchTask from './search'


const DashboardContainer = styled.div`
    width: 360px;
    height: 100vh;
    background: var(--color-secondary);
`
export const AddTaskButton = styled.button`
    width: calc(100% - 24px);
    margin: 12px;
    padding: 4px 0;
    transition: all 0.3s;
    &:hover{
        cursor: pointer;
        word-spacing: 8px;
        letter-spacing: 2px
    }
`

const Dashboard = () => {
  return (
    <DashboardContainer>
        <AddTaskButton onClick={useCreateOrUpdateTaskStore(state => state.createTask)}>
            + New Task
        </AddTaskButton>
        <Filter/>
        <Sort/>
        <SearchTask/>
    </DashboardContainer>
  )
}

export default Dashboard