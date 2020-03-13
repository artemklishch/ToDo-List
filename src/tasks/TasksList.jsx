import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import PropTypes from 'prop-types';

const TasksList = ({
  tasks,
  onCreateCertainTask,
  handleTaskOnChange,
  handleTaskDelete}) => {
  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={onCreateCertainTask} />
      <ul className="list">
        {
          tasks.map(task =>
            <Task
              key={task.id}
              {...task}
              onChange={handleTaskOnChange}
              handleTaskDelete={handleTaskDelete}
            />)
        }
      </ul>
    </main>
  );
};
export default TasksList;

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  onCreateCertainTask: PropTypes.func.isRequired,
  handleTaskOnChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};
TasksList.defaultValue = {
  tasks: [],
};