import { CartSidebar } from '@/components/cart/sidebar'
import { ContainerPage } from '@/components/container-page'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full px-5">
      <ContainerPage>
        <div className="flex justify-between items-center gap-4 py-4">
          <Link href="/">
            <Logo />
          </Link>
          <div className="space-x-4">
            <ThemeToggle />
            <CartSidebar />
          </div>
        </div>
      </ContainerPage>
    </header>
  )
}
