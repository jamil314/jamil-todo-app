import { create } from 'zustand'
import { mockTasks } from './mockTasks'

export const useTaskStore = create((set) => ({
  tasks: mockTasks,
  increasePopulation: () => set((state) => ({ tasks: [...state.tasks, state.tasks[2]] })),
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  deleteTask: (taskId) => set((state) => 
    ({ tasks: state.tasks.filter((task) => { return task.id !== taskId } )})),
  updateTask: (newTask) => set((state) => 
    ({ tasks: state.tasks.map((task) => { return task.id === newTask.id ? newTask : task} )})),
}))


export const useCreateOrUpdateTaskStore = create((set) => ({
  taskModal: {
    open: false,
    defaultTask: null 
  },
  createTask: () => set({taskModal:{open: true, defaultTask: null}}),
  cancel: () => set({taskModal:{open: false}}),
  updateTask: (defaultTask) => set({taskModal:{open: true, defaultTask: defaultTask}}),
})) 