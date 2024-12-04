import React, { useEffect, useReducer, useState } from 'react'
import RPSscore from './RPSscore'
import RPSplayground from './RPSplayground'

export default function RPS() {
  
  let initialState = {
    playerMove: '',
    computerMove: ''
  }

  let [playerScore , setPlayerScore] = useState(0)

  let [{playerMove , computerMove} , dispatch] = useReducer(gameFunc , initialState);
  function getComputerMove() {  
    const moves = ['rock', 'paper', 'scissors'];  
    return moves[Math.floor(Math.random() * moves.length)];  
  }



    function gameFunc(state , action){
      switch(action.type){
        case 'rock':
          return{...state, playerMove: action.payload ,computerMove: getComputerMove()}
        case 'paper':
          return{...state , playerMove: action.payload , computerMove: getComputerMove()}
        case 'scissors':
          return{...state , playerMove: action.payload , computerMove: getComputerMove()}
        default:
          return(state)  
        }

        
        

      
    }

    useEffect(()=>{
      switch(playerMove){
        case 'rock':
          if(playerMove == 'rock' && computerMove == 'rock'){
            setPlayerScore(prevScore => prevScore + 0)
          }else if(playerMove == 'rock' && computerMove == 'paper'){
            setPlayerScore(prevScore => prevScore - 1)
          }else if(playerMove == 'rock' && computerMove == 'scissors'){
            setPlayerScore(prevScore => prevScore + 1)
        }
        
        break
        case 'paper':
          if(playerMove == 'paper' && computerMove == 'paper'){
            setPlayerScore(prevScore => prevScore + 0)
          }else if(playerMove == 'paper' && computerMove == 'scissors'){
            setPlayerScore(prevScore => prevScore - 1)
          }else if(playerMove == 'paper' && computerMove == 'rock'){
            setPlayerScore(prevScore => prevScore + 1)
          }
          
        break
        case 'scissors':
        if(playerMove == 'scissors' && computerMove == 'scissors'){
          setPlayerScore(prevScore => prevScore + 0)
        }else if(playerMove == 'scissors' && computerMove == 'rock'){
           setPlayerScore(prevScore => prevScore - 1)
        }else if(playerMove == 'scissors' && computerMove == 'paper'){
          setPlayerScore(prevScore => prevScore + 1)
        }
        
        break
        default:
          console.log('hi')
      }
      console.log(playerMove , computerMove)
      console.log(playerScore)
  },[playerMove , computerMove])


    
    
  

    
  

  return (
    
    <>
      <div className='main-page w-full h-[100vh] py-[30px] flex flex-col justify-between'>
        <RPSscore score={playerScore}/>
        <RPSplayground dispatch={dispatch}/>
      </div>
    </>
  )
}



// if(playerMove == 'rock' && computerMove == 'rock'){
//   setPlayerScore(playerScore + 0)
//   }else if(playerMove == 'rock' && computerMove == 'paper'){
//    setPlayerScore(playerScore - 1)
//   }else if(playerMove == 'rock' && computerMove == 'scissors'){
//    setPlayerScore(playerScore + 1)
// }


// if(playerMove == 'paper' && computerMove == 'paper'){
//   setPlayerScore(playerScore + 0)
// }else if(playerMove == 'paper' && computerMove == 'scissors'){
//   setPlayerScore(playerScore - 1)
// }else if(playerMove == 'rock' && computerMove == 'rock'){
//   setPlayerScore(playerScore + 1)
// }

// if(playerMove == 'scissors' && computerMove == 'scissors'){
//   setPlayerScore(playerScore + 0)
// }else if(playerMove == 'scissors' && computerMove == 'rock'){
//    setPlayerScore(playerScore - 1)
// }else if(playerMove == 'scissors' && computerMove == 'paper'){
//   setPlayerScore(playerScore + 1)
// }



// if(playerMove == 'rock'){
//   console.log('rock has been set')
// }else if(playerMove == 'paper'){
//   console.log('paper has been set')
// }else if(playerMove == 'scissors'){
//   console.log('scissors has been set')
// }else{
//   console.log('pick something bro...')
// }