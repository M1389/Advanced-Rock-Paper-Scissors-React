import React, { useEffect, useReducer, useState } from 'react'
import RPSscore from './RPSscore'
import RPSplayground from './RPSplayground'
import RPSresults from './RPSresults'

export default function RPS() {
  
  let initialState = {
    playerMove: '',
    computerMove: '',
    setWinner: ''
  }

  let [playerScore , setPlayerScore] = useState(0)
  let [showRes , setShowRes] = useState(false)
  let [{playerMove , computerMove , setWinner} , dispatch] = useReducer(gameFunc , initialState);
  function getComputerMove() {  
    const moves = ['rock', 'paper', 'scissors'];  
    return moves[Math.floor(Math.random() * moves.length)];  
  }



    function gameFunc(state , action){
      switch(action.type){
        case 'rock':
        case 'paper':
        case 'scissors':
          return{...state , playerMove: action.payload , computerMove: getComputerMove()}
        case 'setWinner':
          return{...state , setWinner: action.payload}
        default:
          return(state)  
        }

        
        

      
    }

    useEffect(()=>{
      switch(playerMove){
        case 'rock':
          if(playerMove == 'rock' && computerMove == 'rock'){
            setPlayerScore(prevScore => prevScore)
            dispatch({type: 'setWinner' , payload: 'tie'})
            setShowRes(true)
          }else if(playerMove == 'rock' && computerMove == 'paper'){
            setPlayerScore(prevScore => prevScore - 1)
            dispatch({type: 'setWinner' , payload: 'lose'})
            setShowRes(true)
          }else if(playerMove == 'rock' && computerMove == 'scissors'){
            setPlayerScore(prevScore => prevScore + 1)
            dispatch({type: 'setWinner' , payload: 'win'})
            setShowRes(true)
        }
        
        break
        case 'paper':
          if(playerMove == 'paper' && computerMove == 'paper'){
            setPlayerScore(prevScore => prevScore)
            dispatch({type: 'setWinner' , payload: 'tie'})
            setShowRes(true)
          }else if(playerMove == 'paper' && computerMove == 'scissors'){
            setPlayerScore(prevScore => prevScore - 1)
            dispatch({type: 'setWinner' , payload: 'lose'})
            setShowRes(true)
          }else if(playerMove == 'paper' && computerMove == 'rock'){
            setPlayerScore(prevScore => prevScore + 1)
            dispatch({type: 'setWinner' , payload: 'win'})
            setShowRes(true)
          }
          
        break
        case 'scissors':
        if(playerMove == 'scissors' && computerMove == 'scissors'){
          setPlayerScore(prevScore => prevScore)
          dispatch({type: 'setWinner' , payload: 'tie'})
          setShowRes(true)
        }else if(playerMove == 'scissors' && computerMove == 'rock'){
           setPlayerScore(prevScore => prevScore - 1)
           dispatch({type: 'setWinner' , payload: 'lose'})
           setShowRes(true)
        }else if(playerMove == 'scissors' && computerMove == 'paper'){
          setPlayerScore(prevScore => prevScore + 1)
          dispatch({type: 'setWinner' , payload: 'win'})
          setShowRes(true)
        }
        
        break
        default:
          console.log('hi')
      }
      console.log(playerMove , computerMove)
      console.log(playerScore)
      console.log(setWinner)
  },[playerMove , computerMove])


    function resShow(val) {
        setShowRes(val)
    }
    
  

    
  

  return (
    
    <>
      <div className='main-page w-full h-[112vh] py-[30px] flex flex-col justify-between'>
        <RPSscore score={playerScore}/>
        {showRes? <RPSresults resShow={resShow} loserWinner={setWinner} computerMove={computerMove} playerMove={playerMove} /> : <RPSplayground dispatch={dispatch} resShow={resShow}/>}
      </div>
    </>
  )
}



