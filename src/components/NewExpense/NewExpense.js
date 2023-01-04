import React from 'react'

import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => { 
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }
    return (
        <div>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm> 
        </div>
    );
}

export default NewExpense