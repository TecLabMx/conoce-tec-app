import { Navigation } from 'lucide-react'
import { Button } from '../ui/Button'

const LocationTracker = () => {
  return (
    <Button variant='outline' className='fixed left-4 bottom-4 z-10'>
      <Navigation className='fill-red-400 stroke-red-600' />
    </Button>
  )
}

export { LocationTracker }
