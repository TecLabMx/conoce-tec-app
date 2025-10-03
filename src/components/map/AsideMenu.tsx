import type { FC } from 'react'
import type { GeolocationState } from '@uidotdev/usehooks'
import { CircleAlert, Pin, ChevronRight } from 'lucide-react'
import { Input } from '../ui/Input'

interface AsideMenuProps {
  loading?: boolean
  error?: GeolocationState['error']
}

const AsideMenu: FC<AsideMenuProps> = ({ loading, error }) => {
  return (
    <>
      <div className='hidden w-full max-w-md h-full fixed top-0 left-0 z-10 p-4 xl:flex'>
        <aside className='w-full h-full flex flex-col gap-4 bg-white overflow-y-auto rounded-xl border-slate-200 border px-4 py-6'>
          {loading ? (
            <div
              className='size-28 bg-gradient-to-b from-transparent via-white to-transparent bg-[length:25px_400%] bg-no-repeat animate-matrix m-auto'
              style={{
                backgroundImage: `
                linear-gradient(#0000 calc(1*100%/6),#000 0 calc(3*100%/6),#0000 0),
                linear-gradient(#0000 calc(2*100%/6),#000 0 calc(4*100%/6),#0000 0),
                linear-gradient(#0000 calc(3*100%/6),#000 0 calc(5*100%/6),#0000 0)`
              }}
            />
          ) : (
            <>
              <Input placeholder='Filtrar por nombre del lugar' className='w-full' />
              {error ? (
                <span className='text-red-600 flex gap-2 items-center bg-red-50 p-2 border border-red-400 rounded-lg'>
                  <CircleAlert size={20} />
                  <p className='text-sm'>Tu ubicación no puede ser determinada. Por favor intentalo de nuevo.</p>
                </span>
              ) : (
                <span className='text-green-600 flex gap-2 items-center bg-green-50 p-2 border border-green-400 rounded-lg'>
                  <CircleAlert size={20} />
                  <p className='text-sm'>Tu ubicación esta siendo obtenida en tiempo real.</p>
                </span>
              )}
              {Array.from({ length: 6 }).map((_, i) => (
                <button
                  className='w-full rounded-lg flex gap-4 border-slate-200 border p-4 items-center duration-200 cursor-pointer hover:border-slate-700 focus:border-slate-700'
                  key={i}
                >
                  <div className='aspect-square w-11 flex bg-[#F2F3F2] text-black/50 rounded-lg'>
                    <Pin className='m-auto' size={18} />
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-base font-medium'>Laboratorio</p>
                    <p className='text-black/50 text-sm'>Haz clic para marcar una ruta</p>
                  </div>
                  <ChevronRight className='text-black/50 ml-auto' />
                </button>
              ))}
            </>
          )}
        </aside>
      </div>
    </>
  )
}

export { AsideMenu }
