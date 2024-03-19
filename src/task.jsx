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
    background-color: var(--color-highlight);
    padding: 2rem 4rem;
    margin: 10px;
    border-radius: 0.75rem;
    position: relative;
    transition: all 0.3s;
    overflow: hidden;
    &:hover {
        transform: scale(1.015);
        border-radius: 0.5rem;
        /* background-color: var(--color-highlight); */
        .action {
            opacity: 1;
            transform: scale(1);

        }
    }
`
const MileLabel = styled.span`
    opacity: ${(props) => (props.strike ? 0.75 : 1)};
    text-decoration: ${(props) => (props.strike ? 'line-through' : 'none')};
`
const Action = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(-100%);
`
const ActionButton = styled.img`
    height: 40px;
    width: 40px;
    margin: 4px;
    border-radius: 40px;
    &:hover {
        cursor: pointer;
        
    }
`
const Header = styled.div`
    display: flex;
    /* justify-content: space-between; */
    border-bottom: 2px solid;
    margin-bottom: 1rem;
    div{
        margin: 0 8px;
    }
`
const Title = styled.div`
    font-size: x-large;
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
                <CircularProgressBar total={100} completed={task.progress} />
            </div>
        </Header>
        <span>{task.description}</span>
        <div>
            {task.milestones.length? <div style={{height:'1rem'}}/> : null}
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
                            style={{marginRight:'1rem'}}
                        />
                        <MileLabel strike={milestone.done ? 1 : 0}>{milestone.title}</MileLabel>
                    </div>
                )
            })}
        </div>
    </TaskCard>
  )
}

export default Task