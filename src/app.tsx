import { Navigation } from 'lucide-react'
import { Map } from '@vis.gl/react-maplibre'
import { Button } from './components/ui/button'

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

      <Button className='fixed left-4 bottom-4 z-10'>
        <Navigation />
      </Button>
    </>
  )
}

export default App
