import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  //return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev/" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev/" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)


  function handlePriceChanges(event){
    let a = parseFloat(event.target.value) | 0
    setPrice(a)
  }

  function handleDiscountChanges(event){
    let b = parseFloat(event.target.value) | 0
    setDiscount(b)
  }

  const grossPrice = price - discount
  const VAT = (grossPrice * 0.07).toFixed(2)
  const total = grossPrice + parseFloat(VAT)
  //"toFixed returns strings, therefore parseFloat is necessary"
return (
    <div className = "container">
      <h1>VAT Calculator After Discount</h1>
      <div className = "card">
        <span className='label'>
        Price:
        <input  type = "number" 
                placeholder="Price"
                onChange = {handlePriceChanges} />
        </span>
        <span className='label'>
        Discount: 
        <input  type = "number"
                placeholder="Discount"
                onChange = {handleDiscountChanges} />
        </span>
        <div>
          Gross Price = {grossPrice} <br/>
          VAT = {VAT} <br/>
          Total = {total}
        </div>
      </div>
    </div>
  )
}

export default App

 
