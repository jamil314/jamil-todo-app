import { create } from 'zustand'
import { mockTasks } from './mockTasks'

export const useStore = create((set) => ({
  tasks: mockTasks,
  increasePopulation: () => set((state) => ({ tasks: [...state.tasks, state.tasks[2]] })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
}))