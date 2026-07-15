import "./AddTask.scss";
import "../../Button/Button.jsx";
import Button from "../../Button/Button.jsx";

const AddTask = () => {
    // handle form submit to API
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const title = formData.get("task-title");
        const url = "http://localhost:3000/tasks";
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                title: title,
                done: false,
            })
        });
        form.reset(); // reset value in input
    }

    return (
        <form className="add-task" onSubmit={e => handleSubmit(e)}>
            <input id="task-title" name="task-title" type="text" placeholder="Add Task" />
            <Button title="Add Task" classList="btn btn-primary"  />
        </form>
    )
}
export default AddTask;