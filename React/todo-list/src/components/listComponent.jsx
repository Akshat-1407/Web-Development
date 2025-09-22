function ListItem(props) {
    let {tasks, deleteTaskHandler} = props;
    return (
        <div>
            <ol className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => {deleteTaskHandler(index)}}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ListItem;