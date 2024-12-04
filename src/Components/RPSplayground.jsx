import React from 'react'

export default function RPSplayground({dispatch}) {
  return (
    <>
        <div className='w-full '>
            <div className='w-[80%]  mx-auto flex items-center justify-center py-[50px]'>
                <div className='relative'>
                    <img src="./assets/images/bg-triangle.svg" alt="Game-triangle"/>
                    <div className='hand-gradient  absolute top-[-20px] left-[-20px] w-[120px] h-[120px] rounded-full flex items-center justify-center cursor-pointer'>
                        <div className=' bg-white w-[80%] h-[80%] rounded-full flex items-center justify-center'>
                            <img onClick={()=>dispatch({type: 'paper', payload: 'paper'})} className='bg-white w-[70%] h-[70%] p-3' src="./assets/images/icon-paper.svg" alt="paper" />
                        </div>
                    </div>

                    <div className='rock-gradient absolute top-[-20px] right-[-20px] w-[120px] h-[120px] flex items-center justify-center rounded-full cursor-pointer'>
                        <div className=' bg-white w-[80%] h-[80%] rounded-full flex items-center justify-center'>
                            <img onClick={()=>dispatch({type: 'rock', payload: 'rock'})} src="./assets/images/icon-rock.svg" className='bg-white  rounded-full' alt="rock" />
                        </div>
                    </div>

                    <div className='scissors-gradient absolute bottom-0 left-[50%] -translate-x-[50%] w-[120px] h-[120px] flex items-center justify-center rounded-full cursor-pointer'>
                        <div className=' bg-white w-[80%] h-[80%] rounded-full flex items-center justify-center'>
                            <img onClick={()=>dispatch({type: 'scissors', payload: 'scissors'})} src="./assets/images/icon-scissors.svg" className='bg-white  rounded-full p-3' alt="scissors" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
