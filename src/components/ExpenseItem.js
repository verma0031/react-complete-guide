import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const clickHandler = (event) => {
    console.log(event);
    // const expenseItem = event.currentTarget.closest('.expense-item');
    // console.log(expenseItem)
    // console.log(expenseItem.parentNode);
    // if (expenseItem && expenseItem.parentNode) {
    //   expenseItem.parentNode.removeChild(expenseItem);
    // }

    event.target.parentElement.remove();
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      ></ExpenseDetails>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
