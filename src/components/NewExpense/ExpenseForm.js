import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    const [buttonAdd, setButtonAdd] = useState(1)

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
        setButtonAdd(1)
    }
    const handleExpense = () => {
      if(buttonAdd==1){
        setButtonAdd(0)
      }else{
        setButtonAdd(1)
      }
    }
    const cancelAdd = () => {
      setButtonAdd(1)
    }

    if(buttonAdd===1){
      return (
        <div className="new-expense__actions">
          <button type="submit" onClick={handleExpense}>Add Expense</button>
        </div>
      );
    }else{
      return (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
              required
                value={userInput.enteredTitle}
                type="text"
                onChange={titleChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
              required
                value={userInput.enteredAmount}
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input required
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
            <div className="new-expense__cancel">
              <button onClick={cancelAdd}>Cancel</button>
            </div>
          </div>
        </form>
      );
    }
};

export default ExpenseForm;
