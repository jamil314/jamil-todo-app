import React from 'react'
import styled from 'styled-components'

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
        <AddTaskButton onClick ={ () => {setshowModal(true)}}>
            + New Task
        </AddTaskButton>    
    </DashboardContainer>
  )
}

export default Dashboard