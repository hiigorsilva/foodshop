import { ContainerPage } from '@/components/container-page'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { TabsSkeleton } from '@/components/products/skeleton'
import { ProductsTab } from '@/components/products/tab'
import { Suspense } from 'react'

const Home = () => {
  return (
    <div className="min-h-dvh w-full flex flex-col">
      <Header />
      <main className="flex-1 px-5 py-8">
        <ContainerPage>
          <TabsSkeleton />
          <Suspense fallback={<TabsSkeleton />}>
            <ProductsTab />
          </Suspense>
        </ContainerPage>
      </main>
      <Footer />
    </div>
  )
}
export default Home
