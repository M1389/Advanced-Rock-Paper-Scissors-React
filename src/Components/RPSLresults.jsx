import React from 'react'

export default function RPSLresults({resShowTwo, loserWinnerTwo , computerMoveTwo , playerMoveTwo}) {
    
    
    return (
    <div className=' w-[70%] h-[100%] mx-auto flex justify-around items-center px-4 py-[30px] flex-wrap'>
        <div className={`${playerMoveTwo=='rock'? 'rock-gradient': playerMoveTwo=='paper'? 'hand-gradient': playerMoveTwo=='scissors'? 'scissors-gradient': playerMoveTwo=='lizard'? 'lizard-gradient': 'spock-gradient'} relative w-[220px] h-[220px] rounded-full flex items-center justify-center cursor-pointer z-10`}>
            <div className={`${loserWinnerTwo=='win'? 'afterEffect' : ''} bg-white w-[80%] h-[80%] rounded-full flex items-center justify-center`}>
                <img onClick={()=>dispatch({type: 'paper', payload: 'paper'})} className='bg-white w-[70%] h-[70%] p-3' src={`./assets/images/${playerMoveTwo=='rock'? 'icon-rock.svg': playerMoveTwo=='paper'? 'icon-paper.svg':playerMoveTwo=='scissors'? 'icon-scissors.svg': playerMoveTwo=='lizard'? 'icon-lizard.svg' : 'icon-spock.svg'}`} alt="paper" />
            </div>
        </div>
        <div className='text-center'>
            <h2 className='text-[55px] font-bold text-white'>{loserWinnerTwo ==='win' ? 'YOU WIN' : loserWinnerTwo ==='lose' ? 'You Lose' : loserWinnerTwo === 'tie' ? 'DRAW' : 'none'}</h2>
            <button onClick={()=>resShowTwo(false)} className='bluet text-[25px]  bg-white py-[15px] px-[30px] rounded-xl'>PLAY AGAIN</button>
        </div>
        <div className={`${computerMoveTwo=='rock'? 'rock-gradient': computerMoveTwo=='paper'? 'hand-gradient': computerMoveTwo=='scissors'? 'scissors-gradient' : computerMoveTwo=='lizard'? 'lizard-gradient' : 'spock-gradient'} w-[220px] h-[220px] rounded-full flex items-center justify-center cursor-pointer relative`}>
            <div className={`${loserWinnerTwo=='win'? '' : 'afterEffect'} bg-white w-[80%] h-[80%] rounded-full flex items-center justify-center`}>
                <img onClick={()=>dispatch({type: 'paper', payload: 'paper'})} className='bg-white w-[70%] h-[70%] p-3' src={`./assets/images/${computerMoveTwo=='rock'? 'icon-rock.svg': computerMoveTwo=='paper'? 'icon-paper.svg': computerMoveTwo=='scissors'? 'icon-scissors.svg' : computerMoveTwo=='lizard'? 'icon-lizard.svg' : 'icon-spock.svg'}`} alt="paper" />
            </div>
        </div>
    </div>
    
  )
}
