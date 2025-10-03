import { Map, Marker, Source, Layer } from '@vis.gl/react-maplibre'
import { Navigation, Pin } from 'lucide-react'
import { useGeolocation } from '@uidotdev/usehooks'
import { AsideMenu } from './components/map/AsideMenu'
import { INITIAL_MAP_STATES, INITIAL_MARKER_CLASSES, FINAL_MARKER_CLASSES, DATA_LAYER } from './lib/constants/map'
import { useMapRoutes } from './hooks/useMapRoutes'

const App = () => {
  const { markers, route, onAddMarker } = useMapRoutes()
  const { loading, error, latitude, longitude } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 10000
  })

  return (
    <Map onClick={async ({ lngLat }) => await onAddMarker(lngLat)} mapStyle='/styles/dark.json' {...INITIAL_MAP_STATES}>
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
      {latitude && longitude && (
        <Marker longitude={longitude} latitude={latitude}>
          <Navigation className='fill-red-400 stroke-red-600' />
        </Marker>
      )}
      <AsideMenu loading={loading} error={error} />
    </Map>
  )
}

export { App }
