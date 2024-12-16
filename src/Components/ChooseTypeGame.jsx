import React from 'react'

export default function ChooseTypeGame({dispatch}) {
  return (
    <>
     <div className='main-page w-[100%] h-[120vh] relative'>
            <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-3 items-center  p-6 rounded-2xl border-2 border-white w-[70%] max-[533px]:w-[95%]'>
                <h1 className='text-white font-semibold text-[42px] max-[391px]:text-[28px]'>Choose your Game:</h1>
                <div className='flex gap-[30px] justify-around flex-wrap'>
                    <img className='cursor-pointer hover:shadow-2xl shadow-black rounded-2xl p-3' onClick={()=>dispatch({type: 'gameTypeOne' , payload: true})}  src="./assets/images/image-rules-bonus.svg" alt="ROCK,PAPER,SCISSORS,SPOCK,LIZARD" />
                    <img className='cursor-pointer hover:shadow-2xl shadow-black rounded-2xl p-3' onClick={()=>dispatch({type: 'gameTypeTwo' , payload: true})} src="./assets/images/image-rules.svg" alt="ROCK,PAPER,SCISSORS" />
                </div>
            </div>
        </div>
    </>
  )
}
