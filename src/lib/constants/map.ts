import type { LayerProps } from '@vis.gl/react-maplibre'

export const DATA_LAYER: LayerProps = {
  type: 'line',
  paint: {
    'line-color': '#007cbf',
    'line-width': 4
  }
}

export const INITIAL_MAP_STATES = {
  initialViewState: {
    longitude: -94.557891,
    latitude: 18.00682,
    zoom: 17
  },
  maxBounds: [
    [-94.565, 18.0],
    [-94.55, 18.015]
  ]
}

export const INITIAL_MARKER_CLASSES = 'fill-green-400 stroke-green-600'
export const FINAL_MARKER_CLASSES = 'fill-blue-400 stroke-blue-600'
