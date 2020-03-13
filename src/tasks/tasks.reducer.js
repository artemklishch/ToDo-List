import { FORM_TASKS_LIST } from './tasks.actions';

const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  switch(action.type){
    case FORM_TASKS_LIST: return {
      ...state,
      tasks: action.payload.tasks,
    };
    default: return state;
  };
};