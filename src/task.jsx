import React from 'react'
import styled from "styled-components";
import Done from './assets/done.png'
import Delete from './assets/delete.png'
import Edit from './assets/edit.png'

const Task = ({task}) => {
    const TaskCard = styled.li`
    list-style: none;
    opacity: ${task.status == "Done" ? 0.5 : 1};
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
  return (
    <TaskCard>
        <Action className="action">
            <ActionButton src={Delete} hint="Delete"/>
            <ActionButton src={Edit}/>
            <ActionButton src={Done}/>
        </Action>
        <Header>
            <Title>{task.title}</Title>
            <div className="tags">
                <Tag>{task.status}</Tag>
                <Tag>{task.priority}</Tag>
            </div>
        </Header>
        <text>{task.description}</text>
    </TaskCard>
  )
}

export default Task