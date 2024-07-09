import FilterableProduceTable from '@/components/filterable-product-table'

function Home() {
  const products = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
  ]
  return (
    <div className="h-full overflow-auto">
      <div>
        {new Array(25).fill(0).map((v, idx) => {
          return (
            <div className="text-white h-[40px]" key={idx}>
              Home{idx}
            </div>
          )
        })}
      </div>
      <div className="fixed right-0 top-0 m-4 w-[400px]">
        <FilterableProduceTable products={products} />
      </div>
    </div>
  )
}

export default Home
