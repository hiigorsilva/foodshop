import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const ContainerPage = ({ children }: Props) => {
  return <div className="max-w-5xl mx-auto">{children}</div>
}
