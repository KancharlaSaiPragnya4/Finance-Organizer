// ExpensesForm.jsx
import React, { useState } from 'react';
import './ExpensesForm.css';

const ExpensesForm = ({ expenseList, setExpenseList, totalExpenses, updateTotalExpenses }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseReceipts, setExpenseReceipts] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      name: expenseName,
      date: expenseDate,
      amount: parseFloat(expenseAmount),
      category: expenseCategory,
      receipts: expenseReceipts,
    };

    setExpenseList([...expenseList, newExpense]);
    updateTotalExpenses(totalExpenses + newExpense.amount);

    setExpenseName('');
    setExpenseDate('');
    setExpenseAmount('');
    setExpenseCategory('');
    setExpenseReceipts([]);
  };

  const handleDeleteExpense = (index, amount) => {
    const updatedExpenseList = [...expenseList];
    updatedExpenseList.splice(index, 1);

    setExpenseList(updatedExpenseList);
    updateTotalExpenses(totalExpenses - amount);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="expenseName">Expense Name:</label>
          <input
            type="text"
            id="expenseName"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expenseDate">Expense Date:</label>
          <input
            type="date"
            id="expenseDate"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expenseAmount">Expense Amount:</label>
          <input
            type="number"
            id="expenseAmount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expenseCategory">Expense Category:</label>
          <input
            type="text"
            id="expenseCategory"
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expenseReceipt">Expense Receipt:</label>
          <input
            type="file"
            id="expenseReceipt"
            onChange={(e) => setExpenseReceipts([...expenseReceipts, e.target.files[0]])}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>

      <div>
        <h2>Expense List</h2>
        {expenseList.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul>
            {expenseList.map((expense, index) => (
              <li key={index}>
                <strong>Name:</strong> {expense.name}, <strong>Date:</strong> {expense.date},{' '}
                <strong>Amount:</strong> ${expense.amount}, <strong>Category:</strong> {expense.category}
                {expense.receipts && (
                  <div>
                    <strong>Receipts:</strong>
                    <ul>
                      {expense.receipts.map((receipt, i) => (
                        <li key={i}>
                          <img
                            src={URL.createObjectURL(receipt)}
                            alt={`Receipt ${i}`}
                            style={{ maxWidth: '350px', maxHeight: '350px' }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button onClick={() => handleDeleteExpense(index, expense.amount)}>Delete</button>
              </li>
            ))}
          </ul>
        )}

        <p className="total-expenses" title="Total Expenses">
          Total Expenses: ${totalExpenses.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ExpensesForm;








