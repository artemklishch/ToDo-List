// const baseUrl = 'https://crudcrud.com/api/596c50ea77984d89b4e3ab8d8999cb04/tasks';
const baseUrl = 'https://5e4e9b9e6272aa0014230d88.mockapi.io/api/v1/tasks';


export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    });
    // .then(tasksList =>
    //   tasksList.map(({ _id, ...elem }) => ({ id: _id, ...elem })));
};

export const createTask = newTask => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': "application/json;charset=utf-8"
    },
    body: JSON.stringify(newTask),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
    });
};

export const onChangeTask = (updatedTask, id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': "application/json;charset=utf-8"
    },
    body: JSON.stringify(updatedTask),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
    });
}

export const onDeleteTask = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
    });
};