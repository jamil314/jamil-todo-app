import React from 'react'
import styled from 'styled-components'
import { useStore } from "./StoreHandler";

const TaskFormComponent = styled.form`
    background-color: var(--color-secondary);
    color: var(--color-text);
    padding: 20px;
    border-radius: 12px;
    /* width: 350px; */
    font-size: larger;
    display: flex;
    flex-direction: column;
`
const InputField = styled.input`
    font-size: large;
`
const SelectField = styled.select`
    font-size: large;
`
const InputGroup = styled.div`
    padding: 4px 0;
    display: flex;
`
const Label = styled.div`
    /* text-align: end; */
    width: 140px;

`
const ButtonGroup = styled.div`
    margin-top: 24px;
    padding-top: 12px;
    border-top: solid aliceblue 2px;
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const Button = styled.button`
    border: solid aliceblue 2px;
    background-color: aliceblue;
    height: 40px;
    width: 80px;
    color: black;
    font-size: large;
`

const TaskForm = ({setshowModal, oldTask}) => {
    const addTask = useStore((state) => state.addTask);

    const submitForm = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTask = {};
        formData.forEach((value, key) => {
            newTask[key] = value;
        });
        addTask(newTask)
    }

    return (
    <TaskFormComponent onSubmit={submitForm}>
        <InputGroup>
            <Label>Title :</Label>
            <InputField
                type='text'
                placeholder='Title...'
                name='title'
            />
        </InputGroup>
        <InputGroup>
            <Label>Description :</Label>
            <InputField
                type='text'
                placeholder='Description...'
                name='description'
            />
        </InputGroup>
        <InputGroup>
            <Label>Priority :</Label>
            <SelectField name="priority">
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="low">Low</option>
            </SelectField>
        </InputGroup>
        <InputGroup>
            <Label>Status :</Label>
            <SelectField name="status">
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
            <option value="pending">Pending</option>
            </SelectField>
        </InputGroup>
        <ButtonGroup>
            <Button onClick={() => setshowModal(false)}> Cancel </Button>
            <Button> Reset </Button>
            <Button type='submit'> confirm </Button>
        </ButtonGroup>
        
    </TaskFormComponent>
  )
}

export default TaskForm