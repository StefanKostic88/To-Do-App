import ToDoItem from "../ToDoItem/ToDoItem";
import classes from "./ToDoListUl.module.css";
const ToDoListUl = ({ toDoListObj, onRemoveHandler }) => {
  const removeElHandler = (id) => {
    return onRemoveHandler(id);
  };
  return (
    <ul className={classes.list}>
      {toDoListObj.map((el) => (
        <li key={el.id}>
          <ToDoItem toDoItemData={el} onRemoveElHandler={removeElHandler} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoListUl;
