import { z } from 'zod'
import { Feature, LineString } from 'geojson'

const CoordinateSchema = z.tuple([z.number(), z.number()])

const GeometrySchema = z.object({
  coordinates: z.array(CoordinateSchema),
  type: z.literal('LineString')
})

const RouteSchema = z.object({
  distance: z.number(),
  duration: z.number(),
  weight: z.number(),
  geometry: GeometrySchema
})

export const OSRMResponseSchema = z.object({
  code: z.literal('Ok'),
  routes: z.array(RouteSchema).min(1),
  waypoints: z
    .array(
      z.object({
        name: z.string(),
        location: CoordinateSchema
      })
    )
    .min(2)
})

export type OSRMResponse = z.infer<typeof OSRMResponseSchema>
export type RouteFeature = Feature<LineString>
