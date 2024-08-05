import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import AllocationForm from './component/AllocationForm';

import Budget from './component/Budget';

import Currency from './component/Currency';

import ExpenseItem from './component/ExpenseItem';

import ExpenseList from './component/ExpenseList';

import ExpenseTotal from './component/ExpenseTotal';

import Remaining from './component/Remaining';

import { AppProvider } from './context/AppContext';


const App = () => {
  return (
    <AppProvider>
    <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                  <div className='row mt-3'>
                    <div className='col-sm'>
                      <Budget />
                    </div>   
                    <div className='col-sm'>
                      <Remaining />
                    </div>
                    <div className='col-sm'>
                      <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                      <Currency />
                    </div>
                    
                  </div>
                  <h3 className='mt-3'>Allocation</h3>
                  <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                  </div>
                  <h3 className='mt-3'>Change Allocation</h3>
                  <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                  </div>

            </div>
        </AppProvider>
    );
};
export default App;