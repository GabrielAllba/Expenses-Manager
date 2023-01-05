import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

import Card from '../UI/Card'
import './Expenses.css'
import { useState } from 'react'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
const changeFilter = (value) => {
  console.log(value);
};

const handleOnChangeFilterMonth = (value) => {
  console.log(value);
};
    const handleChange = (x) => {
      console.log(x)
    }

    const [selectYear, setYear] = useState(2022);

    const handleChangeYear = (value) => {
      setYear(value)
      
    }
    const filteredArray = props.item.filter(
      (expense) => expense.date.getFullYear() === selectYear
    );
    

    return (
      <div>
        <Card className="outer">
          <ExpensesFilter
            onChangeFilter={changeFilter}
            onChangeFilterMonth={handleOnChangeFilterMonth}
            expenses={props.item}
            onChangeYear={handleChangeYear}
          ></ExpensesFilter>
          <ExpensesChart expenses={filteredArray}></ExpensesChart>
          {filteredArray.length === 0 ? (
            <p>No expenses found</p>
          ) : (
            filteredArray.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                changeAmount={handleChange}
                date={expense.date}
                amount={expense.amount}
              ></ExpenseItem>
            ))
          )}
        </Card>
      </div>
    );
}
export default Expenses