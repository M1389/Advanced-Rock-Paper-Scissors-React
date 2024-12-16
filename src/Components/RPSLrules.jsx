import React, { useState } from 'react'
import boxicons from 'boxicons'

const RPSLrules = ({game}) => {
    const [isHidden , setIsHidden] = useState(false)
    
    
  return (
    <>
        <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] py-[20px] bg-white z-50 rounded-3xl shadow-2xl shadow-black mb-6  ${isHidden ? 'hidden' : ''}`}>
        <div className='flex justify-between mx-4 my-2'>
            <h2 className='text-[26px] font-bold'>Rules</h2>
            <button onClick={()=>setIsHidden(true)} >
                <box-icon name='x'></box-icon>
            </button>
        </div>
        <img src={`./assets/images/${game == 'RPSL' ? 'image-rules-bonus.svg' : 'image-rules.svg'}`}  alt="rules" className='w-[90%] mx-auto' />
    </div>
    <button onClick={()=>setIsHidden(false)} className='fixed bottom-4 right-4 border-2 border-white bg-transparent px-[29px] py-[7px] font-semibold rounded-xl text-white text-[25px] '>Rules</button>
    </>

  )
}

export default RPSLrules;