import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Simple/Counter'
import Greeting from './Components/Simple/Greeting'
import UserDetail from './Components/APICall/UserDetail'
import UserDetailFunctionComp from './Components/APICall/UserDetailFunctionComp'
import CommonServiceFileCompo from './Components/APICall/CommonServiceFileCompo'
import CommonExamples from './Components/JS-Practice/CommonExamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   {/* <Counter></Counter> <Greeting initialName="John" />*/}
    <CommonExamples></CommonExamples>
    </>
  )
}

export default App
