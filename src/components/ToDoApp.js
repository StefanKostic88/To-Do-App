import React, { useState, useEffect } from "react";
import Card from "./UI/Card.js";
import ToDoForm from "./Form/ToDoForm.js";
import ToDoContainer from "./ToDoContainer/ToDoContainer.js";
import classes from "./ToDoApp.module.css";

const ToDoApp = () => {
  const [toDoArr, setToDoArr] = useState([]);
  // const [storage, setStorage] = useState([]);

  // useEffect(() => {
  //   if (localStorage.length !== 0) {
  //     setToDoArr((prevStat) => [
  //       ...prevStat,
  //       ...JSON.parse(localStorage.getItem("ToDos")),
  //     ]);
  //   }
  //   console.log("mount");

  //   return () => {
  //     console.log("clear");
  //   };
  // }, []);

  // console.log();
  const onSubmitHandler = (toDo) => {
    setToDoArr((prevArr) => {
      return [...prevArr, { toDoTitle: toDo, id: Date.now() }];
    });
  };

  const idSignalHandler = (id) => {
    setToDoArr((prevArr) => {
      return [...prevArr.filter((el) => el.id !== id)];
    });
  };
  const clearArrHandler = () => {
    setToDoArr(() => []);
    localStorage.removeItem("ToDos");
  };
  // localStorage.setItem("ToDos", JSON.stringify(toDoArr));
  // console.log(toDoArr);

  return (
    <Card className={classes["to-do-container"]}>
      <h1 className={classes.heading}>To Do App</h1>
      <ToDoForm onToDoSubmit={onSubmitHandler} />;
      <ToDoContainer
        toDoListData={toDoArr}
        onIdSignal={idSignalHandler}
        onRemoveAllHandler={clearArrHandler}
      />
    </Card>
  );
};

export default ToDoApp;
