import { useState } from 'react'
import './App.css'
import TopContent from './components/TopContent'
import BottomContent from './components/BottomContent'
import BottomBar from './components/BottomBar'

function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary h-screen md:max-w-screen-md md:m-auto'>
     <TopContent />
     <BottomContent />
     <BottomBar />
    </div>
  )
}

export default Dashboard
