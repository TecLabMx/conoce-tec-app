import type { FC, ReactNode } from 'react'
import { Toaster } from 'sonner'

interface AppWrapperProps {
  children: ReactNode
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster closeButton richColors position='top-right' />
    </>
  )
}

export { AppWrapper }
