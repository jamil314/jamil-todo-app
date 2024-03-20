import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { mockTasks } from './mockTasks'

const calculateProgress = task => {
  if(task.status==='Done') return 100;
  const {total, completed} = task.milestones.reduce((acc, cur) => {
    acc.total++;
    if(cur.done) acc.completed++;
    return acc;
  }, {total: 0, completed: 0})
  const progress = total ? (completed * 100 / total) : 0;
  return progress;
} 

export const useFilterStore = create((set) => ({
  filters: [],
  toFilter: true,
  clearFilters: () => set({filters: []}),
  addFilter: (newFilter) => set((state) => ({...state, filters: [...state.filters, newFilter] })),
  deleteFilter: (field) => set((state) => 
    ({...state, filters: state.filters.filter((Filter) => { return Filter.field !== field } )})),
  updateFilter: (newFilter) => set((state) => 
    ({...state, filters: state.filters.map((Filter) => { return Filter.field === newFilter.field ? newFilter : Filter} )})),
  toggleFilter: () => set((state) => ({...state, toFilter: !state.toFilter}) ),
}))

export const useSortStore = create((set) => ({
  catagory:[
    {param:'Priority', value:0},
    {param:'Progress', value:0},
    {param:'Deadline', value:0},
  ],
  updateCatagory: (newCatagory) => set((state) => ({catagory: newCatagory})),
}))

export const useSearchStore = create((set) => ({
  param: '',
  setSearchParam: (newParam) => set(() => ({param: newParam}))
}))

const applySearch = (raw, searchParam) => {
  return raw.filter(task => {
    if(task.title.toLowerCase().includes(searchParam.toLowerCase()) ||
    task.description.toLowerCase().includes(searchParam.toLowerCase()) ) return true;
    let matched = false;
    task.milestones.forEach(mile => {
      if(!matched)
        if(mile.title.toLowerCase().includes(searchParam.toLowerCase())) {
          matched = true;
        }
    })
    return matched
  })
}

const applyFilter = (raw, filters) => {
  return raw.filter(task => {
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
}

const applysort = (raw, sortCatagory) => {
  return raw.sort((a, b) => {
    let ret = 0;
    sortCatagory.forEach(cat => {
      if(ret === 0) {
        if(cat.param !== 'Deadline') {
          const x = a[cat.param.toLowerCase()];
          const y = b[cat.param.toLowerCase()];
          if(cat.value > 0) ret =  (x === y ? 0 : x < y ? -1 : 1);
          else if(cat.value < 0) ret =  (x === y ? 0 : x > y ? -1 : 1);
        } else {
          if(a['deadline-active'] && b['deadline-active']) {
            const ta = new Date(a['deadline-date']).getTime();
            const tb = new Date(b['deadline-date']).getTime();
            if(cat.value > 0) ret = ta - tb;
            else if(cat.value < 0) ret = tb - ta; 
          } else if(a['deadline-active']) {
            if(cat.value > 0) ret = -1; 
            else if(cat.value < 0) ret = 1;
          } else if(b['deadline-active']) {
            if(cat.value > 0) ret = 1;
            else if(cat.value < 0) ret = -1; 
          }
        }
      }
    })
    return ret;
  })
}

export const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: mockTasks,
      addTask: (newTask) => set(({ tasks: [...get().tasks, {...newTask, progress:calculateProgress(newTask)}] })),
      deleteTask: (taskId) => set(
        ({ tasks: get().tasks.filter((task) => { return task.id !== taskId } )})),
      updateTask: (newTask) => set(
        ({ tasks: get().tasks.map((task) => { return task.id === newTask.id ? {...newTask, progress:calculateProgress(newTask)} : task} )})),
      getSortedFilteredTasks: () => {
        return applysort( applyFilter( applySearch( get().tasks
                                      , useSearchStore.getState().param )
                          , useFilterStore.getState().toFilter ? useFilterStore.getState().filters : [] )
                , useSortStore.getState().catagory )
      },
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => sessionStorage),
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

