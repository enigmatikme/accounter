import React from 'react'
import Graph from './Graph';
import ActionItems from './ActionItems';

const ChartContainer = ({data, handleClick}) => {
  return (
    <div className="chartContainer">
      Accounter
      <Graph data={data} handleClick={handleClick} />
      <ActionItems />
    </div>
  )
};

export default ChartContainer;