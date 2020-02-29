import React from 'react';
import './App.css';

import {Header }from './components/Header';
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import {  GlobalProvider } from "./context/GlobalState";
// import { FilterForm } from "./components/FilterForm";
import {FormFilter} from './components/FormItens'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <FormFilter />
      </div>
    </GlobalProvider>
  );
}


export default App;
