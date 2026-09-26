import Alert from "./Alert";


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