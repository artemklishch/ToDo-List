import {
  fetchTasksList,
  onChangeTask,
  createTask,
  onDeleteTask
} from './tasksGateway';

export const FORM_TASKS_LIST = 'FORM_TASKS_LIST';

export const onFormTasksList = tasks => {
  return {
    type: FORM_TASKS_LIST,
    payload: { tasks, }
  };
};


export const getTasksLists = () => {
  const thunkActions = (dispatch) => {
    return fetchTasksList()
      .then(tasks => dispatch(onFormTasksList(tasks)))
  };
  return thunkActions;
};

export const handleTaskOnChange = id => {
  const thunkActions = (dispatch, getState) => {
    const state = getState();
    const changedTask = state.tasksData.tasks.find(task => task.id === id);
    const { done } = changedTask;
    const updatedTask = {
      ...changedTask,
      done: !done,
    };
    return onChangeTask(updatedTask, id)
      .then(() => fetchTasksList())
      .then(tasks => dispatch(onFormTasksList(tasks)));
  };
  return thunkActions;
};

export const onCreateCertainTask = text => {
  const thunkActions = (dispatch) => {
    const newTask = {
      text,
      done: false,
    };
    return createTask(newTask)
      .then(() => fetchTasksList())
      .then(tasks => dispatch(onFormTasksList(tasks)));
  };
  return thunkActions;
};

export const handleTaskDelete = id => {
  const thunkActions = (dispatch) => {
    return onDeleteTask(id)
      .then(() => fetchTasksList())
      .then(tasks => dispatch(onFormTasksList(tasks)));
  };
  return thunkActions;
};