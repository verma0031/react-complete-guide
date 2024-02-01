import React from "react";
import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div >
      <div>
        {props.title}
        <h2>{props.location}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
