import React, { useReducer, useState } from 'react'
import RPSscore from './RPSscore'
import RPSplayground from './RPSplayground'

export default function RPS() {
  
  let initialState = {
    playerMove: '',
    computerMove: ''
  }

  let [playerScore , setPlayerScore] = useState('')

  let [{playerMove , computerMove} , dispatch] = useReducer(gameFunc , initialState);


    function gameFunc(state , action){
      switch(action.type){
        case 'rock':
          return{...state, playerMove: action.payload ,computerMove: 'scissors'}
        case 'paper':
          return{...state , playerMove: action.payload , computerMove: 'paper'}
        case 'scissors':
          return{...state , playerMove: action.payload , computerMove: 'paper'}
        }

      if(state.playerMove == 'rock'){
        if(state.playerMove == 'rock' && state.computerMove == 'rock'){
          setPlayerScore(playerScore + 0)
          }else if(playerMove == 'rock' && computerMove == 'paper'){
           setPlayerScore(playerScore - 1)
          }else if(playerMove == 'rock' && computerMove == 'scissors'){
           setPlayerScore(playerScore + 1)
        }
      }else if(playerMove == 'paper'){
          if(playerMove == 'paper' && computerMove == 'paper'){
            setPlayerScore(playerScore + 0)
          }else if(playerMove == 'paper' && computerMove == 'scissors'){
            setPlayerScore(playerScore - 1)
          }else if(playerMove == 'rock' && computerMove == 'rock'){
            setPlayerScore(playerScore + 1)
          }
      }else if(playerMove == 'scissors'){
        if(playerMove == 'scissors' && computerMove == 'scissors'){
          setPlayerScore(playerScore + 0)
        }else if(playerMove == 'scissors' && computerMove == 'rock'){
           setPlayerScore(playerScore - 1)
        }else if(playerMove == 'scissors' && computerMove == 'paper'){
          setPlayerScore(playerScore + 1)
        }
      }else{
        console.log('pick something bro...')
      }
    }

    
  

  return (
    
    <>
      <div className='main-page w-full h-[100vh] py-[30px] flex flex-col justify-between'>
        <RPSscore score={playerScore}/>
        <RPSplayground dispatch={dispatch}/>
      </div>
    </>
  )
}
