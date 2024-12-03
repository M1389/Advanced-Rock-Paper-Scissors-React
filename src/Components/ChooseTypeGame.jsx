import React from 'react'

export default function ChooseTypeGame() {
  return (
    <>
     <div className='main-page w-[100%] h-[100vh] relative'>
            <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-3 items-center  p-6 rounded-2xl border-2 border-white'>
                <h1 className='text-white font-semibold text-[42px]'>Choose your Game:</h1>
                <div className='flex gap-[30px]'>
                    <img className='cursor-pointer hover:shadow-2xl shadow-black' onClick={()=>setChooseType('RPS')} src="./assets/images/image-rules-bonus.svg" alt="ROCK,PAPER,SCISSORS,SPOCK,LIZARD" />
                    <img className='cursor-pointer hover:shadow-2xl shadow-black' onClick={()=>setChooseType('RPSL')} src="./assets/images/image-rules.svg" alt="ROCK,PAPER,SCISSORS" />
                </div>
            </div>
        </div>
    </>
  )
}
