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
import calendar from './assets/calendar.png'
import time from './assets/time.png'
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
    width: 40rem;
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
    /* top: 1rem; */
    bottom: 1rem;
    right: 1rem;
    border-radius: 20px;
    /* opacity: 0; */
    /* transform: translateY(100%); */
    transition: opacity 0.3s, transform 0.3s;
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
    padding-bottom: 0.5rem;
`
const Title = styled.div`
    font-size: x-large;
    font-weight: 800;
    margin-right: calc(80px - 2rem);
    /* overflow-x: hidden;
    overflow-y: auto; */
`
const Tags = styled.div`
    right: 1rem;
    top: 1rem;
    position: absolute;
    display: flex;
    :first-child{
        margin-right: 0.5rem;
    }
`
const Footer = styled.div`
    height: 40px;
    border-top: 2px solid black;
    margin-top: 0.5rem;
    padding-top: 1rem;
`

const DeadlineContainer = styled.div`
    display: flex;
    flex-direction: column;
    img{
        height: 1rem;
        margin-right: 0.5rem;
    }
`


const deleteTask = useTaskStore((state) => state.deleteTask);
const updateTASK = useTaskStore((state) => state.updateTask);
const updateTask = useCreateOrUpdateTaskStore((state) => state.updateTask);

    const [action, setAction] = useState(null)

    const getCountDown = deadline => {
        const now = new Date().getTime();
        const countDownDate = new Date(deadline).getTime() + 24 * 60 * 60 * 1000 - 1;
      
        const difference = countDownDate - now;
      
        if (difference < 0) {
          return "Deadline Passed";
        }
      
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
      
        let countdownString = "";
        if (days === 0) {
          countdownString = "0 day remaining";
        //   countdownString = "Today";
        } else if (tomorrow.toDateString() === new Date(countDownDate).toDateString()) {
          countdownString = "Tomorrow";
        } else {
          countdownString = `${days} day${days > 1 ? "s" : ""} remaining`;
        }
      
        return countdownString;
    }

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
            <Tags>
                <img
                    alt='Priority'
                    src={[StarOff, oneStar, twoStar, threeStar, fourStar, fiveStar][task.priority]}
                    height={40}
                />
                <CircularProgressBar total={100} completed={task.progress} />
            </Tags>
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
        <Footer>
            {task['deadline-active'] ?
                <DeadlineContainer>
                    <span> 
                        <img src={calendar} alt=''/>
                        {task['deadline-date']}
                    </span> 
                    <span>
                        <img src={time} alt=''/>
                        {getCountDown(task['deadline-date'])}
                    </span>
                </DeadlineContainer> 
                : <span>Take your Time</span>
            }
        </Footer>
    </TaskCard>
  )
}

export default Task