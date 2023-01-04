import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    const [userInput, SetUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        SetUserInput((prevState) => {
            
            return {
                ...prevState, enteredTitle: event.target.value
            }
        })
        
    }
    const amountChangeHandler = (event) => {
        SetUserInput({
          ...userInput,
          enteredAmount: event.target.value,
        });
    }
    const dateChangeHandler = (event) => {
        SetUserInput({
          ...userInput,
          enteredDate: event.target.value,
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: parseFloat(userInput.enteredAmount), 
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        SetUserInput({
            enteredTitle: '',
            enteredDate: '',
            enteredAmount:''
        })
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2023-12-12"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
