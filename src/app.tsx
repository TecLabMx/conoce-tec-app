import { Map, Marker, Source, Layer } from '@vis.gl/react-maplibre'
import { Pin } from 'lucide-react'
import { LocationTracker } from './components/map/LocationTracker'
import { INITIAL_MAP_STATES, INITIAL_MARKER_CLASSES, FINAL_MARKER_CLASSES, DATA_LAYER } from './lib/constants/map'
import { useMapRoutes } from './hooks/useMapRoutes'

const App = () => {
  const { markers, route, onAddMarker } = useMapRoutes()

  return (
    <Map onClick={async ({ lngLat }) => await onAddMarker(lngLat)} mapStyle='https://tiles.openfreemap.org/styles/liberty' {...INITIAL_MAP_STATES}>
      {route && (
        <Source id='route' type='geojson' data={route}>
          <Layer {...DATA_LAYER} />
        </Source>
      )}
      {markers.map(({ lng, lat }, i) => (
        <Marker key={lng + lat} longitude={lng} latitude={lat}>
          <Pin className={i === 0 ? INITIAL_MARKER_CLASSES : FINAL_MARKER_CLASSES} />
        </Marker>
      ))}
      <LocationTracker />
    </Map>
  )
}

export { App }
