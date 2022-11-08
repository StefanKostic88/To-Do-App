import React, { useState } from "react";
import Button from "../UI/Button.js";
import classes from "./ToDoForm.module.css";

const ToDoForm = ({ onToDoSubmit }) => {
  const [toDoInput, setToDoInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChangeInputHandler = (e) => {
    setToDoInput(() => e.target.value);
    setIsValid(true);
  };

  const toDoSubmitHandler = (e) => {
    e.preventDefault();
    if (toDoInput.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onToDoSubmit(toDoInput);
    setIsValid(true);
    setToDoInput(() => "");
  };
  const resetHandler = (e) => {
    setToDoInput(() => "");
  };

  return (
    <form onSubmit={toDoSubmitHandler} className={classes.form}>
      <label className={classes.label}>Enter your item</label>
      <input
        onChange={onChangeInputHandler}
        value={toDoInput}
        className={`${classes["input-control"]} ${!isValid && classes.red}`}
        type="text"
      ></input>
      <div className={classes["btn-container"]}>
        <Button type="submit" className={classes.sub}>
          Add
        </Button>
        <Button type="reset" onClick={resetHandler} className={classes.reset}>
          Reset
        </Button>
      </div>
    </form>
  );
};
export default ToDoForm;
