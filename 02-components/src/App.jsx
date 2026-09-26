// In React, a component is the following
// 1. it's a function
// 2. it returns JSX
// 3. and the first alphabet of the function is uppercase
//
// all component functions in React the first argument will be the properties
// of the instance
function Alert(props) {
    // JSX are essentially JavaScript objects, so we can assign to variables,
    // we can also return from functions
  return <div style={{
    padding: "10px",
    border: "1px solid black",
    backgroundColor: props.bgColor ? props.backgroundColor : "green",
    margin:"5px"
  }}>{props.message}</div>
}


function App() {


  return <>
    <h1>SingaSnack</h1>
    <h2>Traditional Singaporean Snacks</h2>
    <Alert message="50% of all fried stuff"/>
    <Alert message="All shippings are free for National Day"/>
    <Alert message="Make sure to secure your account" bgColor="red"/>
  </>

}

export default App;