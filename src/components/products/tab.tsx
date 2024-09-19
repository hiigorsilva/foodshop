import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

export const ProductsTab = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent className="mt-6" value="tab1">
        Conteúdo Tab 1
      </TabsContent>
      <TabsContent className="mt-6" value="tab2">
        Conteúdo Tab 2
      </TabsContent>
    </Tabs>
  )
}
