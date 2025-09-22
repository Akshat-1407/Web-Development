import React from "react"
import InputBox from "./components/inputComponent";
import ListItem from "./components/listComponent"

function TaskList() {

    const [input, setInput] = React.useState("") // Input State
    const [tasks, setTasks] = React.useState([]) // Task List State

    const addTaskHandler = () => {
        const taskList = [...tasks];
        if(input) {
            taskList.push(input);
        }
        setTasks(taskList);
        setInput("");
    }

    const inputBoxHandler = (event) => {
        const newTask = event.target.value;
        setInput(newTask);
    }

    const deleteTaskHandler = (index) => {
        const filteredArr = tasks.filter((currentElement, currentIndex) => currentIndex !== index);
        setTasks(filteredArr);
    }


    return (
        <div className="todo-app">
            <h1>Todo App</h1>

            <InputBox 
                input={input}
                inputBoxHandler={inputBoxHandler}
                addTaskHandler={addTaskHandler}
            ></InputBox>

            <ListItem
                tasks={tasks}
                deleteTaskHandler={deleteTaskHandler}
            ></ListItem>

        </div>
    );
}

export default TaskList;