import React, { useState } from 'react'
import { VictoryScatter, VictoryLabel } from 'victory';

const Graph = ({data}) => {
  const [render, setRender] = useState(false);

  return (
    <div className="chartContainer__graph">
      <VictoryScatter
        data={data}
        labels={() => null}
        style={{
          data: {
            fill: "#000", fillOpacity: 0, stroke: "#000", strokeWidth: 1,
          }, 
          labels: {
            fontSize: "11px",
            fill: "white",
          }
        }}
        labelComponent={
          <VictoryLabel
          backgroundStyle={{ fill: "#393939" }}
          dy={-15}
          backgroundPadding={4}
        />}
        events={[{
            target: "data",
            eventHandlers: {
              onClick: (e) => {
                setRender(!render);
                  return [
                    {
                      target: "labels",
                      mutation: (props) => {
                          return props.text === props.datum.date ? 
                            null : {text: props.datum.date}
                      }
                    }
                  ];
                }
              }
          }]}
      />
    </div>
  )
};

export default Graph;