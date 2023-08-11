// // import logo from './logo.svg';
// // import Header from './components/Header';
// // import Card from "./components/Card";
// // import Home from "./components/Home";
// // import Too from "./components/Too";
// import Index from "./components/Index"
// import Tasks from "./components/Tasks"
// import React,{useState} from 'react'
// import AddTask from "./components/AddTask"
// // import Input from "./components/Input"

// function App() {
//   const[tasks,setTasks] = useState([
//     {id:1,text:"untah1"},
//     {id:2,text:"untah2"},
//     {id:3,text:"untah3"},
//   ])
//   const handleDeleteTask = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };
//   const addTask = (task) => {
//     // console.log(task);
//     const taskId = Math.floor(Math.random() * 100000);
//     const newTask = { id: taskId, text: task };
//     // console.log(newTask);
//     setTasks([...tasks, newTask]);
//   };
//   return (
//     <div className="container">
//       <Index/>
//       <AddTask onAdd={addTask} />
//       <br />
//       {tasks.length > 0 ? (
//         <Tasks tasks={tasks} onDelete={handleDeleteTask} />
//       ) : (
//         "No Tasks"
//       )}
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import Index from './components/Index';
// import Tasks from './components/Tasks';
// import AddTask from './components/AddTask';

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, text: 'untah1' },
//     { id: 2, text: 'untah2' },
//     { id: 3, text: 'untah3' },
//   ]);

//   const handleDeleteTask = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   const addTask = (task) => {
//     const taskId = Math.floor(Math.random() * 100000);
//     const newTask = { id: taskId, text: task };
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div className="container">
//       <Index />
//       <AddTask onAdd={addTask} />
//       <br />
//       {tasks.length > 0 ? (
//         <Tasks tasks={tasks} onDelete={handleDeleteTask} />
//       ) : (
//         'No Tasks'
//       )}
//     </div>
//   );
// }

// export default App;


// import "./App.css";
// import Header from "./components/Index";
// import Card from "./components/Card";
// import Home from "./components/Home";
// import Tasks from "./components/Tasks";
// import React, { useState } from "react";
// import AddTask from "./components/AddTask";
// import Task from "./components/Task";
import {Users} from "./components/Users"
import Table from "./components/Table"
import { useState } from "react";
// jsx
function App() {
  // const [tasks, setTasks] = useState([
  //   { id: 1, text: "Read a book" },
  //   { id: 2, text: "Shop for groceries" },
  //   { id: 3, text: "Meet John" },
  // ]);
  // const ner = "Baigal";
  // let bool = false;

  // delete
  // const deleteTask = (id) => {
  //   // console.log("delete", id);
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };
  // // add Task
  // const addTask = (task) => {
  //   // console.log(task);
  //   const taskId = Math.floor(Math.random() * 100000);
  //   const newTask = { id: taskId, text: task };
  //   // console.log(newTask);
  //   setTasks([...tasks, newTask]);
  // };
  // return (
  //   <div className="container">
  //     {/* <div className="App">{1 + 1}</div>
  //     <h2>{ner}</h2>
  //     <h1>{bool === true ? "True bna" : "False bna"}</h1> */}
  //     {/* <Card /> */}
  //     {/* <Home /> */}
  //     <Header />
  //     <AddTask onAdd={addTask} />
  //     <br />
  //     {tasks.length > 0 ? (
  //       <Tasks tasks={tasks} onDelete={deleteTask} />
  //     ) : (
  //       "No Tasks"
  //     )}
  //   </div>
  const [query, setQuery] = useState("");
  const keys = ["name","number","email"];
  const Search = (data) =>
  {
    return data.filter((item)=>{
      keys.some((key) =>item[key].toLowerCase().includes(query))
    })
  }
  return (
    <div>
      <input
      type="text"
      palaceholder = "Search"
      className="search"
      onchange={(e) => setQuery(e.target.value.tolowerCase())}/>
      {<Table data = {Search(Users)}/>}
    </div>
  )
}

export default App;