import classes from "./ToDoItem.module.css";
import Button from "../../UI/Button.js";
import Card from "../../UI/Card.js";
const ToDoItem = ({ toDoItemData, onRemoveElHandler }) => {
  const removeItemHandler = () => {
    onRemoveElHandler(toDoItemData.id);
  };
  return (
    <Card className={classes.itemCard}>
      <h2>{toDoItemData.toDoTitle}</h2>
      <Button onClick={removeItemHandler}>Remove</Button>
    </Card>
  );
};

export default ToDoItem;
