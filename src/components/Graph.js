import React, {useState} from 'react';
import {VictoryChart, VictoryBar, VictoryGroup, VictoryTooltip, VictoryPie, VictoryArea, VictoryTheme} from 'victory'
import './Graph.css'

const Graph = (props) => {
  const [type, setType] = useState(1);
  const [area, setArea] = useState(0);
  const data = [
    {type:'Circulating',amt:(props.supply/56000)*360},
    {type:'Burnt',amt:((56000-props.supply)/56000)*360}
  ]
  console.log(props.burns)

  return(
    <div>
      <div className='toggleDiv'>
        <button className='togButton' onClick={() => setType(0)}>Pie Chart</button>
        <button onClick={() => setType(1)} className='togButton'>Bar Chart</button>
        <button onClick={() => setType(2)} className='togButton'>Area Chart</button>
      </div>
      {type === 0 ?
        <div>
          <h1 className='graphTitle'>Circulating vs Burnt SPECTRE</h1>
            <VictoryPie
              data={data}
              x="type"
              y='amt'
              labels={data.type}
              height={275}
              colorScale='cool'
            />
        </div> : type === 1 ?
        <div>
          <h1 className='graphTitle'>Circulating vs Burnt SPECTRE Over Time</h1>
          <VictoryChart domainPadding={10} height={250}>
            <VictoryGroup offset={7}
              colorScale={"qualitative"}
            >
                <VictoryBar
                  data={props.burnGraph}
                  labelComponent={<VictoryTooltip />}
                  labels={'Burnt'}
                />
                <VictoryBar
                  data={props.supplyGraph}
                  labelComponent={<VictoryTooltip />}
                  labels={'Supply'}
                />
            </VictoryGroup>
          </VictoryChart>
        </div> :
        <div>
          <h1 className='graphTitle'>Types</h1>
          <div className='toggleDiv'>
            <button className='togButton' onClick={() => setArea(0)}>Total Burn</button>
            <button onClick={() => setArea(2)} className='togButton'>Total Supply</button>
            <button onClick={() => setArea(1)} className='togButton'>Individual</button>
          </div>
          {area === 0 ?
            <div>
              <h1 className='graphTitle areaTitle'>Cumulative Burn Numbers</h1>
              <VictoryChart
                theme={VictoryTheme.material}
                height={250}
                domainPadding={10}
                >
                  <VictoryArea
                    data={props.burnGraph}
                  />
                </VictoryChart>
          </div> : area === 1 ?
          <div>
            <h1 className='graphTitle areaTitle'>Individual Burn Numbers</h1>
            <VictoryChart
              theme={VictoryTheme.material}
              height={250}
              domainPadding={10}
              >
                <VictoryArea
                  data={props.indGraph}
                />
              </VictoryChart>
          </div> :
          <div>
            <h1 className='graphTitle areaTitle'>Cumulative Supply Numbers</h1>
            <VictoryChart
              theme={VictoryTheme.material}
              height={250}
              domainPadding={10}
              >
                <VictoryArea
                  data={props.supplyGraph}
                />
              </VictoryChart>
          </div>
        }
        </div>
      }
    </div>
  )
}
export default Graph;
