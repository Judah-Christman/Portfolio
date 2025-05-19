"use client"
import React, { Component, useState } from "react";
import "./css/styles.css";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    // updates value of newTask in the input on submission
    const handleInput = (event) =>{
        setNewTask(event.target.value);

    }

    // adds the newTask that was defined from the form submission to the tasks array
    const addTask = () =>{
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }
 
    // creates a new array called updatedTasks and sets it to copy tasks array filtering out the index of the undesireable item, then settin updatedTasks to tasks
    const removeTask = (index) =>{
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);

        

    }

    // decreases the index of item in tasks array
    const moveTaskUp = (index) =>{
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]] = [updateTasks[index-1], updateTasks[index]];
            setTasks(updateTasks)
        }
    }

    // increases teh index of item in tasks array
    const moveTaskDown = (index) =>{
        if(index < tasks.length -1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index+1]] = [updateTasks[index+1], updateTasks[index]];
            setTasks(updateTasks)
        }
    }


    return(
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div className="flex-container">
                <div className="input-container">
                    <input
                    type="text"
                    placeholder="Submit Task..."
                    value={newTask}
                    onChange={handleInput} />
                    <button className="add-button" onClick={addTask}>ADD</button>
                </div>
            </div>

            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => removeTask(index)}>Delete</button>
                        <button className="up-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="down-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ul>

        </div>

    );
}
export default ToDoList