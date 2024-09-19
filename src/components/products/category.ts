import { products } from '@/data/products'
import type { Product } from '@/types/product'

type Category = {
  title: string
  value: string
  products: Product[]
}

export const categories: Category[] = [
  {
    title: 'Sushi',
    value: 'sushi',
    products: products.filter(product => product.category === 'sushi'),
  },
  {
    title: 'Temaki',
    value: 'temaki',
    products: products.filter(product => product.category === 'temaki'),
  },
  {
    title: 'Combinados',
    value: 'pack',
    products: products.filter(product => product.category === 'pack'),
  },
  {
    title: 'Bebidas',
    value: 'beverage',
    products: products.filter(product => product.category === 'beverage'),
  },
]
