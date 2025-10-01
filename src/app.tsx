import { Map, Marker, Source, Layer } from '@vis.gl/react-maplibre'
import { Navigation, Pin } from 'lucide-react'
import { Button } from './components/ui/Button'
import { INITIAL_VIEW_STATE, INITIAL_MARKER_CLASSES, FINAL_MARKER_CLASSES, DATA_LAYER } from './lib/constants/map'
import { useMapRoutes } from './hooks/useMapRoutes'

const App = () => {
  const { markers, route, onAddMarker } = useMapRoutes()

  return (
    <>
      <Map
        onClick={async ({ lngLat }) => await onAddMarker(lngLat)}
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle='https://tiles.openfreemap.org/styles/liberty'
      >
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
      </Map>

      <Button variant='outline' className='fixed left-4 bottom-4 z-10'>
        <Navigation className='fill-red-400 stroke-red-600' />
      </Button>
    </>
  )
}

export { App }
