import { GridMapUs } from '@datalith/gridmap/src'
import notes from '@datalith/gridmap/src/components/GridMapUs/README.md'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { genCoordsValueUs } from '../scripts'

const defaultData = genCoordsValueUs(2000)
const side = 5

storiesOf('DATALITHS|GridMap.GridMapUs', module)
  .addParameters({ notes })
  .add('custom - cross', () => {
    return (
      <GridMapUs
        style={{ backgroundColor: '#082e3a' }}
        side={side}
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        stroke="#04FFBF"
        customRender={({ x, y, value }, defaultProps) => (
          <path
            strokeWidth={value * 0.5}
            d={`M${x - value / 2} ${y - value / 2} 
                L${x + value / 2} ${y + value / 2} 
                M${x + value / 2} ${y - value / 2} 
                L${x - value / 2} ${y + value / 2}`}
            {...defaultProps}
          />
        )}
      />
    )
  })
  .add('custom - text', () => {
    return (
      <GridMapUs
        side={side}
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        customRender={({ x, y, datum }, defaultProps) => (
          <text
            x={x}
            y={y}
            textAnchor="middle"
            fontSize={5}
            fontWeight={700}
            alignmentBaseline="middle"
            {...defaultProps}
          >
            {datum ? '|' : '―'}
          </text>
        )}
      />
    )
  })
  .add('custom - triangles', () => {
    return (
      <GridMapUs
        side={side}
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        customRender={({ x, y, value }, defaultProps) => (
          <path
            strokeWidth={value * 0.5}
            d={`M${x - value} ${y + value} 
                L${x + value} ${y + value} 
                L${x} ${y - value} 
                Z`}
            {...defaultProps}
          />
        )}
      />
    )
  })
