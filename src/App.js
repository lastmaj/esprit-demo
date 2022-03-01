import './App.css'
import Product from './components/Product'

function App() {
  const name = 'Issa'

  const data = [
    { name: 'apple airpods', price: 500, qty: 5 },
    { name: 't-shirt rouge', price: 5, qty: 47 },
    { name: 'watch', price: 50, qty: 10 },
  ]

  return (
    <>
      <div className="App">
        <p>Welcome to react, {name}!</p>
      </div>
      <Product name={data[0].name} price={data[0].price} qty={data[0].qty} />
      <Product name={data[1].name} price={data[1].price} qty={data[1].qty} />
      <Product name={data[2].name} price={data[2].price} qty={data[2].qty} />
    </>
  )
}

export default App
