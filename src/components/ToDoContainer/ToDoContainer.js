import ToDoListUl from "./ToDoUl/ToDoListUl.js";
import Button from "../UI/Button.js";
import ToDoContainerStyle from "./ToDoContainer.module.css";

const ToDoContainer = ({ toDoListData, onIdSignal, onRemoveAllHandler }) => {
  const removeHandler = (id) => {
    return onIdSignal(id);
  };
  const removeAllHandler = () => {
    onRemoveAllHandler();
  };
  return (
    <div className={ToDoContainerStyle.container}>
      <div className={ToDoContainerStyle.wraper}>
        <h2 className={ToDoContainerStyle.title}>Your Activities for today</h2>
        <Button className={""} onClick={removeAllHandler}>
          Remove All
        </Button>
      </div>
      <ToDoListUl toDoListObj={toDoListData} onRemoveHandler={removeHandler} />
    </div>
  );
};

export default ToDoContainer;
