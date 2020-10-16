import React from 'react'
import Graph from './Graph';
import ActionItems from './ActionItems';

const ChartContainer = ({data, active, resetActive, xPoint, yPoint, handleClick, resetCount, deleteGraph}) => {
  return (
    <div className="chartContainer">
      <p>Accounter</p>
      <Graph data={data} xPoint={xPoint} />
      <ActionItems handleClick={handleClick} resetActive={resetActive} yPoint={yPoint} active={active} resetCount={resetCount} deleteGraph={deleteGraph} />
    </div>
  )
};

export default ChartContainer;