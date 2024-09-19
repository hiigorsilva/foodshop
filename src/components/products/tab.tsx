import { categories } from '@/components/products/category'
import { EmptyProducts } from '@/components/products/empty'
import { ProductItem } from '@/components/products/product-item'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getAllProducts } from '@/services/product'

export const ProductsTab = async () => {
  const products = await getAllProducts()

  return (
    <Tabs defaultValue={products[0].category} className="w-full">
      <TabsList className="w-full">
        {categories.map(category => (
          <TabsTrigger
            className="flex-1"
            key={category.value}
            value={category.value}
          >
            {category.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map(category => (
        <TabsContent key={category.value} value={category.value}>
          {/* LISTA DE PRODUTOS */}
          {category.products.length > 0 && (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {category.products.map(product => (
                <ProductItem key={product.id} product={product} />
              ))}
            </ul>
          )}

          {/* SEM PRODUTOS */}
          {category.products.length === 0 && <EmptyProducts />}
        </TabsContent>
      ))}
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}
