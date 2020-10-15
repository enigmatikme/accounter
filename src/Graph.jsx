import React, { useState } from 'react'
import { VictoryScatter, VictoryTooltip, VictoryChart, VictoryVoronoiContainer } from 'victory';

const Graph = ({data, xPoint}) => {
  const [render, setRender ] = useState(false);

  return (
    <div className="chartContainer__graph">
      <VictoryScatter
        data={data}
        labels={() => null}
        style={{
          data: {
            fill: "#000", fillOpacity: 0, stroke: "#000", strokeWidth: 1
          }, 
          labels: {
            fontSize: "11px",
            fill: "red",
            border: "black 1px solid",

          }
        }}
        events={[{
            target: "data",
            eventHandlers: {
                onClick: (e) => {
                  setRender(!render);
                    console.log("E +++++", e.target)
                    return [
                      {
                        target: "labels",
                        mutation: (props) => {
                            console.log("PROPS++++", props)
                            return props.text === props.datum.jolly ?
                            null : { text: props.datum.jolly }
                                // return props.text.length > 0 ?
                                //   'blee' : { text: "clicked" };
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