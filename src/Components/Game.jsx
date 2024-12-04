import React from 'react'


let initialState = {
  typeOne : false,
  typeTwo: false,
  gameQusetion: false
}

let [ {typeOne , typeTwo , gameQusetion} , dispatch] = useReducer(gameType , initialState)


function gameType(state , action){
switch(action.type){
  case 'gameTypeOne':
    return{...state, typeOne: true , typeTwo: false , gameQusetion: false}
  case 'gameTypeTwo' :
    return{...state, typeOne: false , typeTwo: true , gameQusetion: false}

}


export default function Game() {
  return (
    <div>Game</div>
  )
}




