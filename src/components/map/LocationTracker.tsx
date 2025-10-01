import { useEffect } from 'react'
import { Navigation } from 'lucide-react'
import { Button } from '../ui/Button'
import { toast } from 'sonner'

const LocationTracker = () => {
  useEffect(() => {
    const onGetLocation = async () => {
      try {
        const permission = await navigator.permissions.query({ name: 'geolocation' })

        if (permission.state === 'granted') {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const lat = pos.coords.latitude
              const lon = pos.coords.longitude
              toast.success(`Ubicación obtenida: lat ${lat}, lon ${lon}`)
            },
            (error) => {
              toast.error('Error al obtener la ubicación. ' + error.message)
            }
          )
        } else {
          toast.error('Necesitas habilitar la localización para poder ver tu ubicación actual.')
        }
      } catch (error) {
        console.error(error)
        toast.error('Error al consultar permisos de geolocalización.')
      }
    }

    onGetLocation()
  }, [])

  return (
    <Button variant='outline' className='fixed left-4 bottom-4 z-10'>
      <Navigation className='fill-red-400 stroke-red-600' />
    </Button>
  )
}

export { LocationTracker }
