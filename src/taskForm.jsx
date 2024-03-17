import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useCreateOrUpdateTaskStore, useTaskStore } from "./StoreHandler";
import { uid } from 'uid';
import StarOn from './assets/star-on.png'
import StarOff from './assets/star-off.png'
import Delete from './assets/remove.png'


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
/* const SelectField = styled.select`
    font-size: large;
` */
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
    max-height: 50vh;
    overflow-y: scroll;
    padding-right: 8px;
    scrollbar-width: thin;
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
const MileItem = styled.div`
    height: 24px;
    margin: 6px 4px;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const AddMileBtn = styled.button`
    width: 100%;
    min-width: 250px;
    margin-top: 12px;
    padding: 4px 0;
    border-radius: 20px;
    transition: all 0.3s;
    &:hover{
        cursor: pointer;
        word-spacing: 8px;
        letter-spacing: 2px
    }
`

const CheckField = styled.input`
    height: 20px;
    width: 20px;
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
    const [milestones, setMilestones] = useState([]);
    const [priority, setPriority] = useState(0);
    
    const addTask = useTaskStore((state) => state.addTask);
    const updateTask = useTaskStore((state) => state.updateTask);
    const closeModal = useCreateOrUpdateTaskStore((state) => state.cancel);
    const defaultTask = useCreateOrUpdateTaskStore((state) => state.taskModal.defaultTask) || {
        label: '',
        description: '',
        milestones: [],
    }

    useEffect(() => {
        setMilestones(defaultTask.milestones)
        setPriority(defaultTask.priority)
    }, []);
    
    const submitForm = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTask = defaultTask;
        formData.forEach((value, key) => {
            if(!key.startsWith('milestone'))
                newTask[key] = value;
        });

        newTask.priority = priority;
        newTask.milestones = milestones;
        newTask.updatedAt = new Date();
        defaultTask.id ? updateTask(newTask) : addTask({...newTask, id: uid(), createdAt: newTask.updatedAt})
        closeModal();
    }

    const handleChangeMilestone = e => {
        const {name, value} = e.target;
        // eslint-disable-next-line
        const [field, id, attribute] = name.split('.');
        switch (attribute) {
            case 'done':
                setMilestones(milestones.map((milestone, idx) => {
                    // eslint-disable-next-line
                    if(id == idx) milestone.done = !milestone.done
                    return milestone
                }))
                return;
                case 'title':
                setMilestones(milestones.map((milestone, idx) => {
                    // eslint-disable-next-line
                    if(id == idx) milestone.title = value
                    return milestone
                }))
                return;
            case 'delete':
            // eslint-disable-next-line
                setMilestones(milestones.filter((milestone, idx) => id != idx))
                return;
            default :
            return;
        }
        
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
            {
                [0, 1, 2, 3, 4].map((id) => {
                    return (<img 
                        alt=''
                        src={priority > id ? StarOn : StarOff}
                        onClick={() => setPriority(id + 1)}    
                    />
                )})
            }
        </InputGroup>
        <InputGroup>
            <Label>Milestones :</Label>
            <div>
            <MilestoneGroup>
                {milestones.map((milestone, index) => {
                    return (
                        <div key={`milestone${index}`} style={{display:'flex'}}>
                            <MileItem>
                                <CheckField
                                    type='checkbox'
                                    defaultChecked={milestone.done ? 'on' : null}
                                    value={milestone.done}
                                    name={`milestone.${index}.done`}
                                    onChange={handleChangeMilestone}
                                />
                            </MileItem>
                            <MileItem>
                                <InputField
                                    type='text'
                                    value={milestone.title}
                                    name={`milestone.${index}.title`}
                                    onChange={handleChangeMilestone}
                                />
                            </MileItem>
                            <MileItem>
                                <img 
                                    name={`milestone.${index}.delete`}
                                    src={Delete}
                                    alt='delete' 
                                    onClick={handleChangeMilestone}
                                />
                            </MileItem>
                        </div>
                    )}
                )}
            </MilestoneGroup>
            <AddMileBtn
                onClick={(e) => {e.preventDefault(); setMilestones([...milestones, {title:'new milestone', done:false}])}}
            > + Add Milestone </AddMileBtn>
            </div>
            </InputGroup>
        <ButtonGroup>
            <Button onClick={closeModal}>
                Cancel
            </Button>
              <Button onClick={(e) => { e.preventDefault(); setShowResetConfirmation(true)} }>
                Reset
              </Button>
            <Button onClick={(e) => { e.preventDefault(); setShowConfirmation(true)} }> Submit </Button>
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