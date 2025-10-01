import { Map } from '@vis.gl/react-maplibre'
import { Navigation } from 'lucide-react'
import { Button } from './components/ui/Button'
import { INITIAL_VIEW_STATE } from './lib/constants/map'

const App = () => {
  return (
    <>
      <Map initialViewState={INITIAL_VIEW_STATE} mapStyle='https://tiles.openfreemap.org/styles/liberty' />

      <Button className='fixed left-4 bottom-4 z-10'>
        <Navigation />
      </Button>
    </>
  )
}

export default App
