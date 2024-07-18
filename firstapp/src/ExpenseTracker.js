import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import IncomeForm from './IncomeForm';
import ExpensesForm from './ExpensesForm';
import './ExpenseTracker.css';
import './IncomeForm.css';
import './ExpensesForm.css';

const ExpenseTracker = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [incomeList, setIncomeList] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
 

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const updateTotalIncome = (newTotalIncome) => {
    setTotalIncome(newTotalIncome);
  };

  const updateTotalExpenses = (newTotalExpenses) => {
    setTotalExpenses(newTotalExpenses);
  };

  const displayMonthTotal = () => {
    const selectedYear = prompt('Enter the year (e.g., 2023)');
    const selectedMonth = prompt('Enter the month (e.g., January)');

    if (selectedYear && selectedMonth) {
      const selectedMonthIncome = incomeList
        .filter(
          (income) =>
            new Date(income.date).getFullYear() === parseInt(selectedYear, 10) &&
            new Date(income.date).toLocaleString('en-US', { month: 'long' }) === selectedMonth
        )
        .reduce((sum, income) => sum + income.amount, 0);

      const selectedMonthExpenses = expenseList
        .filter(
          (expense) =>
            new Date(expense.date).getFullYear() === parseInt(selectedYear, 10) &&
            new Date(expense.date).toLocaleString('en-US', { month: 'long' }) === selectedMonth
        )
        .reduce((sum, expense) => sum + expense.amount, 0);

      const selectedMonthTotal = selectedMonthIncome - selectedMonthExpenses;

      alert(`Total Balance for ${selectedMonth} ${selectedYear}: $${selectedMonthTotal.toFixed(2)}`);
    }
  };

 
  const handleLogout = () => {
    
    console.log('Logout successful');
    // Redirect the user to the login page after logout
    navigate('/login'); // Use the navigate function to redirect
  };

 

  return (
    <div className="expense-tracker-container">
      <div className="sidebar">
        <div
          className={`tab ${selectedTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleTabClick('dashboard')}
        >
          Dashboard
        </div>
        <div
          className={`tab ${selectedTab === 'income' ? 'active' : ''}`}
          onClick={() => handleTabClick('income')}
        >
          Income
        </div>
        <div
          className={`tab ${selectedTab === 'expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('expenses')}
        >
          Expenses
        </div>
        
      </div>

      <div className="content">
        {selectedTab === 'income' && (
          <div className="Lform-container">
            <h1>Income Tracker</h1>
            <IncomeForm
              incomeList={incomeList}
              setIncomeList={setIncomeList}
              totalIncome={totalIncome}
              updateTotalIncome={updateTotalIncome}
            />
          </div>
        )}

        {selectedTab === 'expenses' && (
          <div className="form-container">
            <h1>Expense Tracker</h1>
            <ExpensesForm
              expenseList={expenseList}
              setExpenseList={setExpenseList}
              totalExpenses={totalExpenses}
              updateTotalExpenses={updateTotalExpenses}
            />
          </div>
        )}

        {selectedTab === 'dashboard' && (
          <div className="dashboard-container">
            <div>
              <h1>Financial summary</h1>
              <div className="balance-container">
                <p className="Font">Total Balance: ${totalIncome - totalExpenses}</p>
               
              </div>

              <div className="recent-transactions">
                <h2 className="hello2">Recent Incomes</h2>
                <ul>
                  {incomeList.slice(0, 5).map((income, index) => (
                    <li key={index}>
                      <strong>{income.name}</strong>: ${income.amount.toFixed(2)} on {income.date}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="recent-transactions">
                <h2 className="hello1">Recent Expenses</h2>
                <ul>
                  {expenseList.slice(0, 5).map((expense, index) => (
                    <li key={index}>
                      <strong>{expense.name}</strong>: ${expense.amount.toFixed(2)} on {expense.date}
                    </li>
                  ))}
                </ul>
                <button className="hello" onClick={displayMonthTotal}>
                  History
                </button>
              </div>
            </div>

            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}


      </div>
    </div>
  );
};

export default ExpenseTracker;


