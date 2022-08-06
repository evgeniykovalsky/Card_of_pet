import React from 'react';
import { Card } from './components/Card';


 import './App.css';
import { cards } from './data/cards';

function App() {
  return (<>
  {cards.map(card=><Card cards={card} key={card.id}/>)}
    </>
  );
}

export default App;
