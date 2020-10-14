import React, { useState } from 'react'
import { VictoryScatter } from 'victory';

const Graph = ({data, handleClick }) => {
  return (
    <div className="chartContainer__graph">
      <VictoryScatter
        data={data}
      />
    </div>
  )
};

export default Graph;