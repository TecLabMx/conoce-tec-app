import { useGeolocation } from '@uidotdev/usehooks'
import { Navigation, CircleAlert } from 'lucide-react'
import { Button } from '../ui/Button'
import { Marker } from '@vis.gl/react-maplibre'

const LocationTracker = () => {
  const { loading, error, latitude, longitude } = useGeolocation()

  return (
    <>
      {loading && (
        <section className='fixed top-0 left-0 w-full flex h-full z-[1] bg-black/50'>
          <div className='m-auto w-fit p-12 bg-white rounded-lg'>
            <div
              className='size-28 bg-gradient-to-b from-transparent via-white to-transparent bg-[length:25px_400%] bg-no-repeat animate-matrix'
              style={{
                backgroundImage: `
                linear-gradient(#0000 calc(1*100%/6),#000 0 calc(3*100%/6),#0000 0),
                linear-gradient(#0000 calc(2*100%/6),#000 0 calc(4*100%/6),#0000 0),
                linear-gradient(#0000 calc(3*100%/6),#000 0 calc(5*100%/6),#0000 0)`
              }}
            />
          </div>
        </section>
      )}
      {error ? (
        <div className='w-full top-0 left-0 p-4 fixed'>
          <section className='w-fit max-w-full bg-red-50 border-2 text-red-600 border-red-200 p-4 rounded-lg flex gap-2 items-center text-sm'>
            <CircleAlert size={22} />
            <p className='flex break-after-all'>Sucedio un error al obtener la ubicación actual</p>
          </section>
        </div>
      ) : (
        <>
          <Marker longitude={longitude} latitude={latitude}>
            <Navigation className='fill-red-400 stroke-red-600' />
          </Marker>
          <Button variant='outline' className='fixed left-4 bottom-4'>
            <Navigation className='fill-red-400 stroke-red-600' />
          </Button>
        </>
      )}
    </>
  )
}

export { LocationTracker }
