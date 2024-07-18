import React, { useState } from 'react';

const IncomeForm = ({ incomeList, setIncomeList, totalIncome, updateTotalIncome }) => {
  const [incomeName, setIncomeName] = useState('');
  const [incomeDate, setIncomeDate] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  useEffect(() => {
  const storedIncomeList = JSON.parse(localStorage.getItem('incomeList')) || [];
    setIncomeList(storedIncomeList);
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newIncome = {
      name: incomeName,
      date: incomeDate,
      amount: parseFloat(incomeAmount),
    };

    setIncomeList([...incomeList, newIncome]);
    updateTotalIncome(totalIncome + newIncome.amount);

    setIncomeName('');
    setIncomeDate('');
    setIncomeAmount('');
  };

  const handleDeleteIncome = (index, amount) => {
    const updatedIncomeList = [...incomeList];
    updatedIncomeList.splice(index, 1);

    setIncomeList(updatedIncomeList);
    updateTotalIncome(totalIncome - amount);
  };

  return (
    <div>
         <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="incomeName">Income Name:</label>
          <input
            type="text"
            id="incomeName"
            value={incomeName}
            onChange={(e) => setIncomeName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="incomeDate">Income Date:</label>
          <input
            type="date"
            id="incomeDate"
            value={incomeDate}
            onChange={(e) => setIncomeDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="incomeAmount">Income Amount:</label>
          <input
            type="number"
            id="incomeAmount"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Income</button>
      </form>

      <div>
        <h2>Income List</h2>
        {incomeList.length === 0 ? (
          <p>No income added yet.</p>
        ) : (
          <ul>
            {incomeList.map((income, index) => (
              <li key={index}>
                <strong>Name:</strong> {income.name}, <strong>Date:</strong>{' '}
                {income.date}, <strong>Amount:</strong> ${income.amount}
                <button onClick={() => handleDeleteIncome(index, income.amount)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

<p className="total-income" title="Total Income">
          Total Income: ${totalIncome.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default IncomeForm;