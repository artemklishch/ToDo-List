import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { fetchTasksList, createTask, onChangeTask, onDeleteTask } from './tasksGateway';


class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList()
      .then(tasksList => {
        this.setState({
          tasks: tasksList
        });
      });
  };

  onCreate = text => {
    const newTask = {
      createdAt: new Date().toISOString(),
      text,
      done: false,
    };
    createTask(newTask)
      .then(() => this.fetchTasks());
  };

  handleTaskOnChange = id => {
    const changedTask = this.state.tasks.find(task => task.id === id);
    const { text, done } = changedTask;
    const updatedTask = {
      id,
      text,
      done: !done,
    };
    onChangeTask(updatedTask, id)
      .then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    onDeleteTask(id)
      .then(() => this.fetchTasks());
  };

  render() {
    const sortedTasks = [...this.state.tasks]
      .sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {
            sortedTasks.map(task =>
              <Task
                key={task.id}
                {...task}
                onChange={this.handleTaskOnChange}
                handleTaskDelete={this.handleTaskDelete}
              />)
          }
        </ul>
      </main>
    );
  }
};
export default TasksList;