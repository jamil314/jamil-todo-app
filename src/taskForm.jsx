import React, { useState } from 'react'
import styled from 'styled-components'
import { useCreateOrUpdateTaskStore, useTaskStore } from "./StoreHandler";
import { uid } from 'uid';
import StarOn from './assets/star-on.png'
import StarOff from './assets/star-off.png'


const TaskFormComponent = styled.form`
    background-color: var(--color-secondary);
    color: var(--color-text);
    padding: 20px;
    border-radius: 12px;
    /* width: 350px; */
    font-size: larger;
    display: flex;
    flex-direction: column;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`
const InputField = styled.input`
    font-size: large;
    width: 500px
`
const SelectField = styled.select`
    font-size: large;
`
const InputGroup = styled.div`
    padding: 4px 0;
    display: flex;
    img{
        height: 20px;
    }
`
const Label = styled.div`
    /* text-align: end; */
    width: 140px;
`

const MilestoneGroup = styled.div`
    
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
    width: ${(props) => (props.wide ? '120px' : '80px')};
    color: black;
    font-size: large;
`
const CheckField = styled.input`
    height: 20px;
    width: 20px;
    margin: 8px;
`

const ConfirmModal = styled.div`
    background-color: var(--color-secondary);
    color: var(--color-text);
    padding: 20px;
    border-radius: 12px;
    position: fixed;
    visibility: visible;
    scale: ${(props) => (props.show ? 1 : 0)};
`

const TaskForm = () => {

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showResetConfirmation, setShowResetConfirmation] = useState(false);
    
    const addTask = useTaskStore((state) => state.addTask);
    const updateTask = useTaskStore((state) => state.updateTask);
    const closeModal = useCreateOrUpdateTaskStore((state) => state.cancel);
    const defaultTask = useCreateOrUpdateTaskStore((state) => state.taskModal.defaultTask) || {
        label: '',
        description: '',
        milestones: [],
    }

    const [milestones, setMilestones] = useState(defaultTask.milestones);

    const submitForm = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTask = defaultTask;
        const tmpMilestones = {}
        formData.forEach((value, key) => {
            if(key.startsWith('milestone')) {
                const keys = key.split('.');
                tmpMilestones[keys[1]] = ({...tmpMilestones[keys[1]], [keys[2]]:value});
            } else newTask[key] = value;
        });

        newTask.updatedAt = new Date();
        newTask.milestones = Object.values(tmpMilestones);
        defaultTask.id ? updateTask(newTask) : addTask({...newTask, id: uid(), createdAt: newTask.updatedAt})
        closeModal();
    }

    return ( 
        <TaskFormComponent 
            onSubmit={submitForm}
            show={!showConfirmation && !showResetConfirmation}
            onReset={() => setMilestones(defaultTask.milestones || [])}
        >

        <InputGroup>
            <Label>Title :</Label>
            <InputField
                type='text'
                defaultValue={defaultTask.title}
                placeholder='Title...'
                name='title'
            />
        </InputGroup>
        <InputGroup>
            <Label>Description :</Label>
            <InputField
                type='text'
                defaultValue={defaultTask.description}
                placeholder='Description...'
                name='description'
            />
        </InputGroup>

        <InputGroup>
            <Label>Priority :</Label>
            <img src={StarOn}/>
            <img src={StarOn}/>
            <img src={StarOn}/>
            <img src={StarOff}/>
            <img src={StarOff}/>
        </InputGroup>
        <InputGroup>
            <Label>Milestones :</Label>
            <MilestoneGroup>
                {milestones.map((milestone, index) => {
                    return (
                        <div>
                            <CheckField
                                type='checkbox'
                                defaultChecked={milestone.done}
                                name={`milestone.${index}.done`}
                                />
                                <InputField
                                type='text'
                                defaultValue={milestone.title}
                                name={`milestone.${index}.title`}
                            />
                        </div>
                    )}
                )}
                <button onClick={(e) => {e.preventDefault(); setMilestones([...milestones, {title:'new milestone', done:false}])}}> + Add Milestone </button>
            </MilestoneGroup>
        </InputGroup>

        {/* <InputGroup>
            <Label>Priority :</Label>
            <SelectField 
                name="priority"
                defaultValue={defaultTask.priority}
            >
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="low">Low</option>
            </SelectField>
        </InputGroup> */}
        {/* <InputGroup>
            <Label>Status :</Label>
            <SelectField 
                name="status"
                defaultValue={defaultTask.status}
                >
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
            <option value="pending">Pending</option>
            </SelectField>
        </InputGroup> */}
        <ButtonGroup>
            <Button onClick={closeModal}>
                Cancel
            </Button>
              <Button onClick={(e) => { e.preventDefault(); setShowResetConfirmation(true)} }>
                Reset
              </Button>
            <Button onClick={(e) => { e.preventDefault(); setShowConfirmation(true)} }> Submit </Button>
            {/* <Button type='submit'> confirm </Button> */}
        </ButtonGroup>
        <ConfirmModal show={showConfirmation}>
            <h3> Are you sure you want to submit this? </h3>
            <ButtonGroup>
                <Button wide onClick={(e) => { e.preventDefault(); setShowConfirmation(false)} }>
                    Go Back </Button>
                <Button type='submit'>Confirm</Button>
            </ButtonGroup>
        </ConfirmModal>
        <ConfirmModal show={showResetConfirmation}>
            <h3> Are you sure you want to reset the form? </h3>
            <ButtonGroup>
                <Button wide onClick={(e) => { e.preventDefault(); setShowResetConfirmation(false)} }>
                    Go Back </Button>
                <Button type="reset" onClick={() => setShowResetConfirmation(false)}>Confirm</Button>
            </ButtonGroup>
        </ConfirmModal>
        
    </TaskFormComponent>
  )
}

export default TaskForm