import "./AddTask.scss";

const AddTask = () => {
    return (
        <form className="add-task">
            <input id="task-title" name="task-title" type="text" placeholder="Add Task" />
            <input type="submit" value="Add Task" />
        </form>
    )
}
export default AddTask;