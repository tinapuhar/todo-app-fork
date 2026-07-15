import "./TaskItem.scss";
import Button from "../Button/Button.jsx";

const TaskItem = (props) => {
    return (
        <div className="task-item">
            {props.task}
            <Button classList="btn btn-secondary" title="Done"/>
            <Button classList="btn btn-adjacent" title="Remove"/>
        </div>
    )
}

export default TaskItem;