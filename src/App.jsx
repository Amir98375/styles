import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
//import { Button } from '@mui/material'
import { Button } from './components/Button'
 import { Div } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Div>
      <Button color={'white'} bg={'#50a3a6'} >Primary Button</Button>

      <Button color={"black"} bg={'white'}>Default Button</Button>
<Button color={"black"} bg= {"white"}>
  Dashed Button
</Button>
<Button color={"black"} bg={"white"}>
  Link Button
</Button>
<Button color={'#50a3a6'} bg={"white"}  >Install</Button>
      </Div>
      
    {/* <Button >click me</Button>
    <Button color={'red'} bg={'black'} >sign me</Button>
    
    <Div>
    <Button>submit</Button> */}
    {/* </Div> */}
   
    </div>
  )
}

export default App
