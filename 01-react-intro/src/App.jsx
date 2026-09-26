import sushiImage from './sushi.jpg';
import './App.css'

function App() {

  const luckyNumber = Math.floor(Math.random() * 10000 + 1);
  const recommendations = <ul>
    <li>Gozen</li>
    <li>Tempura</li>
    <li>Ramen</li>
  </ul>

  return (
    <>
      {/* We can only return one JSX element at a time, but that JSX element
      can contain children elements */}
      <h1>Sakuara Japanese Restaurant</h1>
      <h2 style={{
        fontFamily:"Tahoma",
        fontSize:"24px",
        backgroundColor:"rgba(255,0,255,255)"
        
      }}>Japanese Food So Authentic You Will Fly to Japan For Better</h2>
      <img src={sushiImage}/>
      <p>Today date is {new Date().toDateString()}</p>
      <p>Your lucky number is {luckyNumber}</p>
      {recommendations}
    </>

  )
}

// export is same as module.exports (CommonJS library for export and importing)
// but React uses ES6 modules, so it will be import/export
export default App;