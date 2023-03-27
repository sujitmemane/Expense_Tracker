import React, { useState }  from "react";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card';
 const Expenses=(props)=>{
   
   const [filteredYear,setFilteredYear]=useState('2020')
   const filterChangeHandler=(selectedYear)=>{
      setFilteredYear(selectedYear)
     
    }
  
const filteredExpense= props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredYear
})


    return(
   
      <div>
        <Card className='expenses' >
           <ExpensesFilter selected={filteredYear}  onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpense}></ExpensesChart>
        <ExpensesList items={filteredExpense}></ExpensesList>

         

        </Card>
      </div>
    )}
    export default Expenses