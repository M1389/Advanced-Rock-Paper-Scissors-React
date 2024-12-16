import React from 'react'

export default function RPSscore({score}) {
  return (
    <>
        <div className='flex justify-between items-center border-2 border-white w-[50%] p-5 rounded-3xl mx-auto max-[929px]:w-[90%] max-[400px]:w-full'>
            <div>
                <img  src="./assets/images/logo.svg" alt="Rock,Paper,Scissors" />
            </div>
            <div className='bg-white flex flex-col items-center justify-between px-[45px] py-[10px] rounded-xl max-[400px]:px-[20px]'>
                <p className='bluet text-[30px] font-semibold'>score</p>
                <h2 className='grayt text-[55px] font-bold'>{score}</h2>
            </div>
        </div>
    </>
  )
}
