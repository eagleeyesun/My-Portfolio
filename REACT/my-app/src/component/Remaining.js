import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, remaining, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);
    
    // Conditional logic to display alert if budget is exceeded
    if (remaining < 0) {
        alert('You cannot reduce the budget value lower than the spending');
    }

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;