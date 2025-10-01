import type { RouteFeature } from '../validations/geojson'
import type { MarkerItem } from '../types/misc'
import { useState } from 'react'
import { fetchRoute } from '../lib/osrm'

const useMapRoutes = () => {
  const [markers, setMarkers] = useState<MarkerItem[]>([])
  const [route, setRoute] = useState<RouteFeature | null>(null)

  const onAddMarker = async (markerLocation: MarkerItem) => {
    const { lng, lat } = markerLocation

    if (markers.length === 2) {
      setMarkers([])
      setRoute(null)
      return
    }

    setMarkers([...markers, { lng, lat }])

    if (markers.length === 1) {
      const route = await fetchRoute({ start: markers[0], end: { lng, lat } })
      setRoute(route)
    }
  }

  return { markers, route, onAddMarker }
}

export { useMapRoutes }
