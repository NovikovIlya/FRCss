import { useState } from 'react'
import logo from './assets/image-equilibrium.jpg'
import ava from './assets/image-avatar.png'
import './App.css'

function App() {
  

  return (
    <>
      <div className='bg-[#0D1A2D] h-screen flex  justify-center items-center'>
        <div className='p-5 flex flex-col gap-2 text-white w-[250px] bg-[#15273F] text-left '>
          <img className='w-[250px]' src={logo}/>
          <div className='text-2xl font-bold'>Equilibrium</div>
          <div>Our Equilibrium collection promotes balance and calm</div>

          <div className='flex justify-between'>
            <div>0.041 ETH</div>
            <div>3 days left</div>
          </div>

          <div className='h-[1px] bg-gray-500'></div>

          <div className='flex gap-2'>
            <img className='w-[20px]' src={ava}/>
            <div>Creation of  Jules Wyern</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
