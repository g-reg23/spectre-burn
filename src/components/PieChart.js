import React, { Component } from 'react';
import { VictoryPie, VictoryLegend,VictoryChart } from 'victory';


const Pie = (props) => {
  console.log(props.supp);
  const initial = 56000;
  const burnt = (56000-props.supp)*360;
  const circ = props.supp*360;
  return (
    <div>
      <div className='innerPieDiv'>
        <VictoryChart>
            <VictoryPie data={[
              {x:'Circulating', y: circ},
              {x:'Burnt', y: burnt,}
            ]}
            colorScale={['whitesmoke', 'lightgoldenrodyellow']} height={175} className='pieChart' labelRadius={55}/>
        </VictoryChart>

      </div>
    </div>
  )
};

export default Pie
