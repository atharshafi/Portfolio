import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TechStackIcons from './components/TechStackIcons';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex-col items-center justify-center min-h-screen bg-black p-4 font-mono'>
      <div className='text-7xl text-pretty text-gray-50 text-center font-extrabold p-2'>
        ATHAR SHAFI
      </div>
      <div className='text-3xl text-pretty text-blue-600 text-center font-normal'>
        Software Developer | AI/ML Enthusiast
      </div>
      <div className='text-2xl text-pretty text-gray-300 text-center font-thin py-5'>
        Turning ideas into intelligent, scalable solutions
      </div>
      <div className='text-5xl text-pretty text-blue-600 text-center font-semibold py-5'>
        Skills
      </div>
    <div className='flex items-center justify-center'>
    <TechStackIcons />
    </div>
    </div>
    
  )
}

export default App
