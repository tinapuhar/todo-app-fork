import {useEffect, useState} from "react";
import TaskItem from "../TaskItem/TaskItem.jsx";
import "./TaskList.scss";
const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const url = "https://api.jsonsilo.com/b56253e9-9bb1-40f8-aaac-bc5797bb9f4c";
    const [error, setError] = useState(null);
    useEffect(() => {

        const fetchTasks = async () => {

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "X-SILO-KEY": import.meta.env.VITE_JSON_KEY,
                    },

                });
                const data = await response.json();
                console.log(data);
                setTasks(data.tasks);

            } catch (error) {
                console.error(error);
                setError(error.message);
            }
        };

        fetchTasks();

    }, [url]);

    if (error) {

        return <p>{error}</p>;

    }
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <TaskItem task={task.title} key={index} id={task.id} done={task.done}/>
            ))}
        </div>
    )
}
export default TaskList;