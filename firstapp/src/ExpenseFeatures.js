import React from 'react';
import './ExpenseFeatures.css'; // Import the CSS file for styling
import { FaFlag, FaChartPie, FaCut, FaDollarSign } from 'react-icons/fa';

function ExpenseFeatures() {
  return (
    <div className="expense-features">
      <h2>Features We Offer</h2>
      <div className="feature-container">
        <div className="feature">
          <FaFlag />
          <h3>Expense Tracking</h3>
          <p>Keep track of your daily expenses with ease.</p>
        </div>
        <div className="feature">
          <FaChartPie />
          <h3>Income Tracking</h3>
          <p>Keep track of your daily incomes</p>
        </div>
        <div className="feature">
          <FaCut />
          <h3> History</h3>
          <p>Provides history of your finance over years</p>
        </div>
        <div className="feature">
          <FaDollarSign />
          <h3>Financial Success</h3>
          <p>Take control of your finances and work towards financial success.</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseFeatures;