import "./TaskItem.scss";
import Button from "../Button/Button.jsx";

const TaskItem = (props) => {
    return (
        <div className="task-item">
            <span>{props.task}</span>
            <span>
                <Button classList="btn btn-secondary" title="Done"/>
                <Button classList="btn btn-adjacent" title="Remove"/>
             </span>
            </div>
    )
}

export default TaskItem;