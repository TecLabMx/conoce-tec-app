import { toast } from 'sonner'
import { OSRMResponseSchema, RouteFeature } from './validations/geojson'

export interface FetchRouteProps {
  start: {
    lat: number
    lng: number
  }
  end: {
    lat: number
    lng: number
  }
}

const ERROR_MESSAGE = 'Ocurrió un error al trazar la ruta'

export const fetchRoute = async ({ start, end }: FetchRouteProps) => {
  try {
    const URL = `https://router.project-osrm.org/route/v1/walking/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
    const res = await fetch(URL).then((res) => res.json())

    const { data, error } = OSRMResponseSchema.safeParse(res)

    if (error) {
      toast.error(ERROR_MESSAGE)
      return null
    }

    const { routes, waypoints } = data

    const route = routes[0]

    if (!route) {
      toast.error(ERROR_MESSAGE)
      return null
    }

    const startWaypoint = waypoints[0]
    const endWaypoint = waypoints[1]

    const processedRoute: RouteFeature = {
      type: 'Feature',
      geometry: route.geometry,
      properties: {
        distance: route.distance,
        duration: route.duration,
        start_name: startWaypoint.name,
        end_name: endWaypoint.name,
        weight: route.weight
      }
    }

    return processedRoute
  } catch (error) {
    console.error(error)
    toast.error(ERROR_MESSAGE)
    return null
  }
}
