import { createSelector } from 'reselect';

export const tasksListSelector = state => state.tasksData.tasks;

export const sortedListSelector = createSelector(
  [tasksListSelector],
  (tasksList) => {
    return [...tasksList].sort((a, b) => a.done - b.done);
  }
);