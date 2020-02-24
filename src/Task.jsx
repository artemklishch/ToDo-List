import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({id, text, done, onChange, handleTaskDelete}) => {
  const taskClasses = classNames('list-item', {'list-item_done': done});
  return (
    <li className={taskClasses}>
      <input 
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)} 
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => handleTaskDelete(id)}></button>
    </li>
  );
};
export default Task;

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};
Task.defaultProps = {
  text: '',
  done: false,
};