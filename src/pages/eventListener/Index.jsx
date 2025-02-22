import './index.css'

const Index = () => {

    const handelClick = () => {
        console.log("I was clicked")
    }

    const handelMouseOver = () => {
        console.log("I was Hovered")
    }
  return (
    <main className="container">
        <img
         src="/src/assets/بزنس كارت.jpg" 
         alt="بزنس كارد"
         onMouseOver={handelMouseOver} />
        <button onClick={handelClick}>Click me</button>
    </main>
  )
}

export default Index