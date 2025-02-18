import React from 'react'
import "./index.css"

const Index = () => {

  const [count, setCount] = React.useState(0)

  const add = () =>{
    setCount(prevCount => prevCount +1)
  }

  const subtract = () =>{
    setCount(prevCount => prevCount -1)
  }

  return (
    <main className='container'>
        <h1>It will be good practies for useState </h1>
        <div className='counter'>
            <button onClick={subtract} className='minus' aria-label='Decrease count'>-</button>
            <h2 className='count'>{count}</h2>
            <button onClick={add} className='plus' aria-label='Increase count'>+</button>
        </div>
    </main>
  )
}

export default Index