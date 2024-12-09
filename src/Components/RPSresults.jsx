import React from 'react'

export default function RPSresults({resShow, loserWinner , computerMove , playerMove}) {
    
  
    return (
    <div className=' w-[70%] h-[100%] mx-auto flex justify-around items-center px-4 py-[30px]'>
        <div className={`${playerMove=='rock'? 'rock-gradient': playerMove=='paper'? 'hand-gradient': 'scissors-gradient'} relative w-[220px] h-[220px] rounded-full flex items-center justify-center cursor-pointer z-10`}>
            <div className={`${loserWinner=='win'? 'afterEffect' : ''} bg-white w-[80%] h-[80%] rounded-full flex items-center justify-center`}>
                <img onClick={()=>dispatch({type: 'paper', payload: 'paper'})} className='bg-white w-[70%] h-[70%] p-3' src={`./assets/images/${playerMove=='rock'? 'icon-rock.svg': playerMove=='paper'? 'icon-paper.svg': 'icon-scissors.svg'}`} alt="paper" />
            </div>
        </div>
        <div className='text-center'>
            <h2 className='text-[55px] font-bold text-white'>{loserWinner=='win'? 'You Win' : loserWinner=='lose' ? 'You Lose' : 'Draw'}</h2>
            <button onClick={()=>resShow(false)} className='bluet text-[25px]  bg-white py-[15px] px-[30px] rounded-xl'>PLAY AGAIN</button>
        </div>
        <div className={`${computerMove=='rock'? 'rock-gradient': computerMove=='paper'? 'hand-gradient': 'scissors-gradient'} w-[220px] h-[220px] rounded-full flex items-center justify-center cursor-pointer relative`}>
            <div className={`${loserWinner=='win'? '' : 'afterEffect'} bg-white w-[80%] h-[80%] rounded-full flex items-center justify-center`}>
                <img onClick={()=>dispatch({type: 'paper', payload: 'paper'})} className='bg-white w-[70%] h-[70%] p-3' src={`./assets/images/${computerMove=='rock'? 'icon-rock.svg': computerMove=='paper'? 'icon-paper.svg': 'icon-scissors.svg'}`} alt="paper" />
            </div>
        </div>
    </div>
    
  )
}
