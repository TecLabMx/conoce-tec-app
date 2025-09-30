import { Navigation } from 'lucide-react'
import { Map } from '@vis.gl/react-maplibre'

const App = () => {
  return (
    <>
      <Map
        initialViewState={{
          longitude: -94.556299,
          latitude: 18.005684,
          zoom: 17
        }}
        mapStyle='https://tiles.openfreemap.org/styles/liberty'
      />

      <button className='bg-white fixed left-4 bottom-4 p-2 z-10'>
        <Navigation />
      </button>
    </>
  )
}

export default App
