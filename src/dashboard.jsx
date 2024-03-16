import React from 'react'
import styled from 'styled-components'
import { useCreateOrUpdateTaskStore } from './StoreHandler'


const DashboardContainer = styled.div`
    width: 300px;
    height: 100vh;
    background: var(--color-secondary);
`
const AddTaskButton = styled.button`
    
`

const Dashboard = ({setshowModal}) => {
  return (
    <DashboardContainer>
        <AddTaskButton onClick={useCreateOrUpdateTaskStore(state => state.createTask)}>
            + New Task
        </AddTaskButton>    
    </DashboardContainer>
  )
}

export default Dashboard