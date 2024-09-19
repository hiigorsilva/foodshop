import Link from 'next/link'
import { ContainerPage } from './container-page'
import { Separator } from './ui/separator'

export const Footer = () => {
  return (
    <footer className="w-full px-5">
      <ContainerPage>
        <Separator />
        <div className="flex justify-between items-center gap-4 text-sm py-6">
          <p className="text-muted-foreground">
            <span>© 2024 </span>
            <Link
              href="https://higorcode.com.br"
              target="_blank"
              className="hover:underline"
            >
              Higor Code
            </Link>
          </p>
          <p className="text-muted-foreground">Todos os direitos reservados.</p>
        </div>
      </ContainerPage>
    </footer>
  )
}
