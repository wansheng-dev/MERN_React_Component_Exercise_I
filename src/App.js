import React from 'react';
import './App.css';
import CounterCC from './components/CounterCC';
import CounterFC from './components/CounterFC';

function App() {
  return (
    <>
      <div className="App">
        <CounterCC firstName="Jane" lastName="Doe" Age={45} hairColor="Black"/>
        <CounterCC firstName="John" lastName="Smith" Age={88} hairColor="Brown"/>
      </div>
      <div className="App">
        <CounterFC firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
        <CounterFC firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
      </div>
    </>
  );
}

export default App;
