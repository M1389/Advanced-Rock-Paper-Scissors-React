import React, { useEffect, useReducer, useState } from 'react';
import RPSLscore from './RPSLscores';
import RPSLplayground from './RPSLplayground';
import RPSLresults from './RPSLresults';

import { Container } from 'postcss'
import RPSLrules from './RPSLrules';

export default function RPSL() {
  
  let initialState = {
    playerMoveTwo: '',
    computerMoveTwo: '',
    setWinnerTwo: ''
  }

  let [playerScoreTwo , setplayerScoreTwo] = useState(0)
  let [showResTwo , setshowResTwo] = useState(false)
  let [{playerMoveTwo , computerMoveTwo , setWinnerTwo} , dispatch] = useReducer(gameFunc , initialState);
  function getcomputerMoveTwo() {  
    const moves = ['rock', 'paper', 'scissors' , 'spock' , 'lizard'];  
    return moves[Math.floor(Math.random() * moves.length)];  
  }



    function gameFunc(state , action){
      switch(action.type){
        case 'rock':
        case 'paper':
        case 'scissors':
        case 'spock':
        case 'lizard':
          return{...state , playerMoveTwo: action.payload , computerMoveTwo: getcomputerMoveTwo()}
        case 'setWinnerTwo':
          return{...state , setWinnerTwo: action.payload}
        default:
          return(state)  
        }

        
        

      
    }

    useEffect(()=>{
      switch(playerMoveTwo){
        case 'rock':
          if(playerMoveTwo == 'rock' && computerMoveTwo == 'rock'){
            setplayerScoreTwo(prevScore => prevScore)
            dispatch({type: 'setWinnerTwo' , payload: 'tie'})
            setshowResTwo(true)
          }else if(playerMoveTwo == 'rock' && computerMoveTwo == 'paper'){
            setplayerScoreTwo(prevScore => prevScore - 1)
            dispatch({type: 'setWinnerTwo' , payload: 'lose'})
            setshowResTwo(true)
          }else if(playerMoveTwo == 'rock' && computerMoveTwo == 'scissors'){
            setplayerScoreTwo(prevScore => prevScore + 1)
            dispatch({type: 'setWinnerTwo' , payload: 'win'})
            setshowResTwo(true)
          }else if(playerMoveTwo == 'rock' && computerMoveTwo == 'lizard'){
            setplayerScoreTwo(prevScore => prevScore + 1)
            dispatch({type: 'setWinnerTwo' , payload: 'win'})
            setshowResTwo(true)
          }else if(playerMoveTwo == 'rock' && computerMoveTwo == 'spock'){
            setplayerScoreTwo(prevScore => prevScore - 1)
            dispatch({type: 'setWinnerTwo' , payload: 'lose'})
            setshowResTwo(true)
          }
        
        break
        case 'paper':
          if(playerMoveTwo == 'paper' && computerMoveTwo == 'paper'){
            setplayerScoreTwo(prevScore => prevScore)
            dispatch({type: 'setWinnerTwo' , payload: 'tie'})
            setshowResTwo(true)
          }else if(playerMoveTwo == 'paper' && computerMoveTwo == 'scissors'){
            setplayerScoreTwo(prevScore => prevScore - 1)
            dispatch({type: 'setWinnerTwo' , payload: 'lose'})
            setshowResTwo(true)
          }else if(playerMoveTwo == 'paper' && computerMoveTwo == 'rock'){
            setplayerScoreTwo(prevScore => prevScore + 1)
            dispatch({type: 'setWinnerTwo' , payload: 'win'})
            setshowResTwo(true)
          }else if(playerMoveTwo == 'paper' && computerMoveTwo == 'lizard'){
            setplayerScoreTwo(prevScore => prevScore - 1)
            dispatch({type: 'setWinnerTwo' , payload: 'lose'})
            setshowResTwo(true)
          }else if(playerMoveTwo == 'paper' && computerMoveTwo == 'spock'){
            setplayerScoreTwo(prevScore => prevScore + 1)
            dispatch({type: 'setWinnerTwo' , payload: 'win'})
            setshowResTwo(true)
          }
          
        break
        case 'scissors':
        if(playerMoveTwo == 'scissors' && computerMoveTwo == 'scissors'){
          setplayerScoreTwo(prevScore => prevScore)
          dispatch({type: 'setWinnerTwo' , payload: 'tie'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'scissors' && computerMoveTwo == 'rock'){
           setplayerScoreTwo(prevScore => prevScore - 1)
           dispatch({type: 'setWinnerTwo' , payload: 'lose'})
           setshowResTwo(true)
        }else if(playerMoveTwo == 'scissors' && computerMoveTwo == 'paper'){
          setplayerScoreTwo(prevScore => prevScore + 1)
          dispatch({type: 'setWinnerTwo' , payload: 'win'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'scissors' && computerMoveTwo == 'lizard'){
          setplayerScoreTwo(prevScore => prevScore + 1)
          dispatch({type: 'setWinnerTwo' , payload: 'win'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'scissors' && computerMoveTwo == 'spock'){
          setplayerScoreTwo(prevScore => prevScore - 1)
          dispatch({type: 'setWinnerTwo' , payload: 'lose'})
          setshowResTwo(true)
        }
        
        break

        case 'spock':
        if(playerMoveTwo == 'spock' && computerMoveTwo == 'spock'){
          setplayerScoreTwo(prevScore => prevScore)
          dispatch({type: 'setWinnerTwo' , payload: 'tie'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'spock' && computerMoveTwo == 'rock'){
           setplayerScoreTwo(prevScore => prevScore + 1)
           dispatch({type: 'setWinnerTwo' , payload: 'win'})
           setshowResTwo(true)
        }else if(playerMoveTwo == 'spock' && computerMoveTwo == 'paper'){
          setplayerScoreTwo(prevScore => prevScore - 1)
          dispatch({type: 'setWinnerTwo' , payload: 'lose'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'spock' && computerMoveTwo == 'lizard'){
          setplayerScoreTwo(prevScore => prevScore - 1)
          dispatch({type: 'setWinnerTwo' , payload: 'lose'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'spock' && computerMoveTwo == 'scissors'){
          setplayerScoreTwo(prevScore => prevScore + 1)
          dispatch({type: 'setWinnerTwo' , payload: 'win'})
          setshowResTwo(true)
        }
        
        break


        case 'lizard':
        if(playerMoveTwo == 'lizard' && computerMoveTwo == 'lizard'){
          setplayerScoreTwo(prevScore => prevScore)
          dispatch({type: 'setWinnerTwo' , payload: 'tie'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'lizard' && computerMoveTwo == 'rock'){
           setplayerScoreTwo(prevScore => prevScore - 1)
           dispatch({type: 'setWinnerTwo' , payload: 'lose'})
           setshowResTwo(true)
        }else if(playerMoveTwo == 'lizard' && computerMoveTwo == 'paper'){
          setplayerScoreTwo(prevScore => prevScore + 1)
          dispatch({type: 'setWinnerTwo' , payload: 'win'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'lizard' && computerMoveTwo == 'scissors'){
          setplayerScoreTwo(prevScore => prevScore - 1)
          dispatch({type: 'setWinnerTwo' , payload: 'lose'})
          setshowResTwo(true)
        }else if(playerMoveTwo == 'lizard' && computerMoveTwo == 'spock'){
          setplayerScoreTwo(prevScore => prevScore + 1)
          dispatch({type: 'setWinnerTwo' , payload: 'win'})
          setshowResTwo(true)
        }
        
        break

        default:
          console.log('hi')
      }
      console.log(playerMoveTwo , computerMoveTwo)
      console.log(playerScoreTwo)
      
  },[playerMoveTwo , computerMoveTwo])


    function resShowTwo(val) {
        setshowResTwo(val);
    }
    
  

    
  

  return (
    
    <>
      <div className='main-page w-full h-[112vh] py-[30px] flex flex-col justify-between'>
        <RPSLrules game={'RPSL'} />
        <RPSLscore score={playerScoreTwo}/>
        {showResTwo? <RPSLresults resShowTwo={resShowTwo} loserWinnerTwo={setWinnerTwo} computerMoveTwo={computerMoveTwo} playerMoveTwo={playerMoveTwo}/> : <RPSLplayground dispatch={dispatch} resShowTwo={resShowTwo}/>}
      </div>
    </>
  )
}



