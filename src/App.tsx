import React from 'react';
import { Card } from './components/Card';


 import './App.css';
import { cards } from './data/cards';

function App() {
  return (<>
  {cards.map(card=><Card cards={card} key={card.id}/>)}
  
  {/* <Film films={film[0]}/>
  <Film films={film[1]}/>
  <Film films={film[2]}/> */}
  </>
  );
}

export default App;
