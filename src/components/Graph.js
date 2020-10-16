import React, {useState} from 'react';
import {VictoryChart, VictoryBar, VictoryGroup} from 'victory'

const Graph = (props) => {
  return(
    <div>
      <VictoryChart>
        <VictoryGroup offset={7}
          colorScale={"qualitative"}
          >
          <VictoryBar
            data={props.burnGraph}
          />
          <VictoryBar
            data={props.supplyGraph}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}
export default Graph;
