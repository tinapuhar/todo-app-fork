import {useEffect, useState} from "react";
import TaskItem from "../TaskItem/TaskItem.jsx";
import "./TaskList.scss";
const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let newTasks = [
            {name: "Learn React Native", id: 0},
            {name: "Learn SCSS", id: 1}];
        setTasks(newTasks);
    },[])
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <TaskItem task={task.name} key={index} />
            ))}
        </div>
    )
}
export default TaskList;