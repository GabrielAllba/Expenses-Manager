
import './App.css';
import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

 const DUMMY_EXPENSES = [
   {id: 'e1', title: "Car Insurance", amount: 294.67, date: new Date(2022, 5, 28) },
   {id: 'e2',
     title: "Motorcycle Insurance",
     amount: 24.67,
     date: new Date(2022, 6, 22),
   },
   {id: 'e3', title: "Bike Insurance", amount: 25.67, date: new Date(2022, 1, 18) },
   {id: 'e4', title: "Truck Insurance", amount: 28.67, date: new Date(2022, 2, 11) },
   {id: 'e5', title: "2020 Insurance", amount: 28.67, date: new Date(2022, 2, 11) },
 ];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      const x =  [expense, ...prevExpenses]
      console.log(x)
      return x
    })

    
  }

  
  return (
    <div className="outer">
      <h2 className="outer">let's get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
