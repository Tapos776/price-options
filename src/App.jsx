import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/Navbar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'
function App() {
  return (
    <>
     <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-5xl bg-yellow-400 text-center p-5'> Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
   
    </>
  )
}

export default App
