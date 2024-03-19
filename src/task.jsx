import React, { useState } from 'react'
import styled from "styled-components";
import { useCreateOrUpdateTaskStore, useTaskStore } from './StoreHandler';
import ConfirmationModal from './confirmationModal';
import Done from './assets/done.png'
import Delete from './assets/delete.png'
import Edit from './assets/edit.png'
import StarOff from './assets/star-off.png'
import oneStar from './assets/star-1.png'
import twoStar from './assets/star-2.png'
import threeStar from './assets/star-3.png'
import fourStar from './assets/star-4.png'
import fiveStar from './assets/star-on.png'
import CircularProgressBar from './circularProgressbar';

const Task = ({task}) => {

    const {totalMilestone, completedMilestone} = task.milestones.reduce((acc, cur) => {
        acc.totalMilestone++;
        if(cur.done) acc.completedMilestone++;
        return acc;
    }, {totalMilestone: 0, completedMilestone: 0})

    if(task.status !== 'Done')
        task.status = task.milestones.length === 0 ? task.status : 
        totalMilestone === completedMilestone ? "Done" : "Pending"

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
const MileLabel = styled.span`
    opacity: ${(props) => (props.strike ? 0.75 : 1)};
    text-decoration: ${(props) => (props.strike ? 'line-through' : 'none')};
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
    div{
        margin: 0 8px;
    }
`
const Title = styled.div`
    font-size: xx-large;
    font-weight: 800;
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
            <ActionButton src={Done} onClick={() => {task.status = task.status==='Done'?'Pending' : 'Done'; updateTASK(task)}}/>
        </Action>
        <Header>
            <Title>{task.title}</Title>
            <div>
                <img
                    alt='Priority'
                    src={[StarOff, oneStar, twoStar, threeStar, fourStar, fiveStar][task.priority]}
                    height={40}
                />
            </div>
            <CircularProgressBar total={100} completed={task.progress} />
        </Header>
        <span>{task.description}</span>
        {/* {task.milestones.length? <span><br/>Milestones</span> : null} */}
        {task.milestones.map((milestone, index) => {
            return (
                <div 
                    key={index}
                    onClick={() => {
                        task.milestones[index].done = !milestone.done;
                        updateTASK(task)
                    }}
                    className='clickable'
                >
                    <input 
                        type='checkbox' 
                        defaultChecked={milestone.done}
                    />
                    <MileLabel strike={milestone.done ? 1 : 0}>{milestone.title}</MileLabel>
                </div>
            )
        })}
    </TaskCard>
  )
}

export default Task