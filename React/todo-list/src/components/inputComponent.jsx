function InputBox(props) {
    let {input, inputBoxHandler, addTaskHandler} = props;
    return (
        <div>
            <input type="text" value={input} onChange={inputBoxHandler}/>
            <button onClick={addTaskHandler}>Add Task</button>
        </div>
    )
}

export default InputBox;