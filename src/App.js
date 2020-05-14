import React from 'react';
import AddComponent from './components/AddComponent/AddComponent';
import './App.scss';
import { createStore } from 'redux';
// import todoApp from './reducers';
// const store = createStore(todoApp);

import Button from 'react-bootstrap/Button';
import TaskListComponent from "./components/TaskListComponent/TaskListComponent";


function App() {
  return (
    <div className="App">
      <h1>Task manager</h1>
        <div className="grid">
            <div className="add">
                <h2>Add new task</h2>
                <Button variant="primary">Add task</Button>{' '}
            </div>
            <AddComponent/>
            <TaskListComponent/>
        </div>
    </div>
  );
}



function openAddComponent () {
    console.log(1)
    // изменяется стейт компонента добавления добавления задания
}

export default App;
