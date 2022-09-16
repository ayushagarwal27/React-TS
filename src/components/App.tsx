import React from 'react';
import pizzas from '../data/pizzas.json';
import PizzaItem from './PizzaList';
import AppCSS from './App.module.css';
import PizzaSvg from '../svg/pizza.svg';
import Cart from './Cart';
import AppStateProvider from './AppState';

const App = () => {
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSvg width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        <ul>
          {pizzas.map(pizza => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
