import React, { useState } from 'react'
import styled from "styled-components";
import Done from './assets/done.png'
import Delete from './assets/delete.png'
import Edit from './assets/edit.png'
import { useCreateOrUpdateTaskStore, useTaskStore } from './StoreHandler';
import ConfirmationModal from './confirmationModal';

const Task = ({task}) => {

    const {totalMilestone, completedMilestone} = task.milestones.reduce((acc, cur) => {
        acc.totalMilestone++;
        if(cur.done) acc.completedMilestone++;
        return acc;
    }, {totalMilestone: 0, completedMilestone: 0})

    // console.log(totalMilestone, completedMilestone);

    task.status = task.milestones.length == 0 ? task.status : totalMilestone == completedMilestone ? "Done" : "Pending"

    const TaskCard = styled.li`
    list-style: none;
    opacity: ${task.status==="Done" ? 0.5 : 1};
    background-color: var(--color-secondary);
    padding: 12px;
    margin: 10px;
    border-radius: 12px;
    position: relative;
    transition: all 0.5s;
    &:hover {
        transform: translateX(20px);
        background-color: var(--color-highlight);
        .action {
            opacity: 1;
            transform: translateY(0);

        }
    }
`
const Action = styled.div`
    position: absolute;
    top: 0px;
    right: 10px;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(-100%);
`
const ActionButton = styled.img`
    height: 20px;
    width: 20px;
    margin: 2px;
    border-radius: 20px;
    &:hover {
        cursor: pointer;
        
    }
`
const Header = styled.div`
    display: flex;
    /* justify-content: space-between; */
    border-bottom: 2px solid;
    .tags{
        display: flex;
        margin-top: 12px;
    }
`
const Title = styled.div`
    font-size: xx-large;
    font-weight: 800;
`
const Tag = styled.div`
    border: 1px solid;
    margin: 2px;
    padding: 0 8px;
    height: 24px;
    border-radius: 24px;
`

const deleteTask = useTaskStore((state) => state.deleteTask);
const updateTASK = useTaskStore((state) => state.updateTask);
const updateTask = useCreateOrUpdateTaskStore((state) => state.updateTask);

    const [action, setAction] = useState(null)

  return (
    <TaskCard>
        <ConfirmationModal 
            showConfirmation={action === 'delete'}
            onAbort={() => setAction(null)}
            onConfirm={() => {deleteTask(task.id); setAction(null)}}
            alertText='Are you sure you want to delete this task?'
        />
        <Action className="action">
            {/* <ActionButton src={Delete} onClick={() => deleteTask(task.id)} /> */}
            <ActionButton src={Delete} onClick={() => setAction('delete')} />
            <ActionButton src={Edit} onClick={() => updateTask(task)}/>
            <ActionButton src={Done} onClick={() => {task.status = 'Done'; updateTASK(task)}}/>
        </Action>
        <Header>
            <Title>{task.title}</Title>
            <div className="tags">
                <Tag>{task.status}</Tag>
                <Tag>{task.priority}</Tag>
            </div>
        </Header>
        <span>{task.description}</span>
        {/* {task.milestones.length? <span><br/>Milestones</span> : null} */}
        {task.milestones.map((milestone, index) => {
            return (
                <div>
                    <input 
                        type='checkbox' 
                        defaultChecked={milestone.done}
                        onClick={() => {
                            task.milestones[index].done = !milestone.done;
                            updateTASK(task)

                        }}
                    />
                    <span>{milestone.title}</span>
                </div>
            )
        })}
    </TaskCard>
  )
}

export default Task