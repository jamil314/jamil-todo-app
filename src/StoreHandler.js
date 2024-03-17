import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { mockTasks } from './mockTasks'

export const useFilterStore = create((set) => ({
  filters: [],
  clearFilters: () => set({filters: []}),
  addFilter: (newFilter) => set((state) => ({ filters: [...state.filters, newFilter] })),
  deleteFilter: (field) => set((state) => 
    ({ filters: state.filters.filter((Filter) => { return Filter.field !== field } )})),
  updateFilter: (newFilter) => set((state) => 
    ({ filters: state.filters.map((Filter) => { return Filter.field === newFilter.field ? newFilter : Filter} )})),
}))

// const filterService = {
//   getFilters: () => useFilterStore.getState().filters,
//   setFilters: (filters) => useFilterStore.getState().setFilters(filters),
// };

export const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: mockTasks,
      addTask: (newTask) => set(({ tasks: [...get().tasks, newTask] })),
      deleteTask: (taskId) => set(
        ({ tasks: get().tasks.filter((task) => { return task.id !== taskId } )})),
      updateTask: (newTask) => set(
        ({ tasks: get().tasks.map((task) => { return task.id === newTask.id ? newTask : task} )})),
      getSortedFilteredTasks: () => {
        const rawTasks = get().tasks;
        const filters = useFilterStore.getState().filters;
        const filteredTask = rawTasks.filter(task => {
          let ok = true;
          filters.forEach(({field, max, min}) => {
              if(field === 'priority'){
                if(task[field] > max || task[field] < min) ok = false;
              } else if(field === 'progress') {
                  const {total, completed} = task.milestones.reduce((acc, cur) => {
                    acc.total++;
                    if(cur.done) acc.completed++;
                    return acc;
                  }, {total: 0, completed: 0})
                  const progress = total ? (completed * 100 / total) : 0;
                  if(progress > max || progress < min) ok = false;
              }
          })
          return ok;
        })
        return filteredTask;
      },
    }),
    {
      name: 'task-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

export const useOldTaskStore = create((set) => ({
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

