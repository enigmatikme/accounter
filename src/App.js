import React, { useState } from 'react';
import ChartContainer from './ChartContainer';
import './App.css'
import Header from './Header';

const App = () => {
  const [data, setData] = useState([null])
  const [xPoint, setXPoint] = useState(0)
  const [yPoint, setYPoint] = useState(0);
  const [active, setActive] = useState(false);
  const [resetActive, setResetActive] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    if (data[0] === null) {
      setData([...data, data.shift()])
    }

    setActive(true);
    setResetActive(false);
    setData([...data, 
      { x: xPoint + 1, 
        y: yPoint + 1, 
        symbol: "circle", 
        size: 3, 
        jolly: `10/${xPoint === 0 ? '1' : xPoint + 1}/2020` }
      ])
      setXPoint(xPoint + 1);
      setYPoint(yPoint + 1);
  }

  const resetCount = () => {
    setYPoint(0);
    setResetActive(true);
  }

  const deleteGraph = (e) => {
    e.preventDefault();
    setActive(!active);
    setXPoint(0);
    setYPoint(0);
    setData([null]);
    
  }

  return (
    <div className="App">
      <Header />
      <ChartContainer data={data} xPoint={xPoint} yPoint={yPoint} resetActive={resetActive} active={active} handleClick={handleClick} resetCount={resetCount} deleteGraph={deleteGraph} />
    </div>
  );
}

export default App;
