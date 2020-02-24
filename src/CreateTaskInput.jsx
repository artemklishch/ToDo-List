import React, { Component } from 'react';

class CreateTaskInput extends Component{
  state = {
    value: '',
  };
  getValue = event => {
    this.setState({
      value: event.target.value,
    });
  };
  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value:''
    });
  };
  render(){
    return (
      <div className="create-task">
        <input 
          className="create-task__input"
          type="text" value={this.state.value}
          onChange={this.getValue} 
        />
        <button className="btn create-task-btn" onClick={this.handleTaskCreate}>Create</button>
      </div>
    );
  }
};
export default CreateTaskInput;