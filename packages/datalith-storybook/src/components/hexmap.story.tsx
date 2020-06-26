import italyTopology from '@datalith/gridmap/src/json/italy.json'
import { HexMap } from '@datalith/hexmap/src'
import notes from '@datalith/hexmap/src/components/HexMap/README.md'
import { storiesOf } from '@storybook/react'
import { geoNaturalEarth1 } from 'd3-geo'
import * as React from 'react'
import { feature } from 'topojson'
import { genCoordsValueIt } from '../scripts'

interface ItalyAtlas extends TopoJSON.Topology {
  objects: {
    sub: TopoJSON.GeometryCollection
  }
}

const italyAtlas = italyTopology as any

const defaultData = genCoordsValueIt(2000)
const side = 5
const italy = feature(italyAtlas, (italyAtlas as ItalyAtlas).objects.sub)
const projection = geoNaturalEarth1()

storiesOf('DATALITHS|HexMap.HexMap', module)
  .addParameters({ notes })
  .add('default', () => {
    return (
      <HexMap
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        side={side}
        featureCollection={italy}
        projection={projection}
      />
    )
  })
  .add('stroke', () => {
    return (
      <HexMap
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        side={side}
        featureCollection={italy}
        projection={projection}
        stroke="#000"
        fill="transparent"
      />
    )
  })
  .add('tooltip', () => {
    return (
      <HexMap
        side={side}
        data={defaultData}
        coords={d => [d.lng, d.lat]}
        value={d => d.value}
        featureCollection={italy}
        projection={projection}
        tooltip={({ value }) => `<p><b>Value: </b>${value.toFixed(2)}</p>`}
      />
    )
  })
