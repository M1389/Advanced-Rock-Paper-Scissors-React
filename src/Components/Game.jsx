import React, { useReducer } from 'react'
import ChooseTypeGame from './ChooseTypeGame'
import RPS from './RPS'
import RPSL from './RPSL'

let initialState = {
  typeOne : false,
  typeTwo: false,
  gameQusetion: true
}

export default function Game() {

  let [ state , dispatch] = useReducer(gameType , initialState);
  
  function gameType(state , action){
    switch(action.type){
      case 'gameTypeOne':
        return{...state, typeOne: action.payload , typeTwo: false , gameQusetion: false}
      case 'gameTypeTwo' :
        return{...state, typeOne: false , typeTwo: action.payload , gameQusetion: false}
      }
  }

  return (
    <>
      {state.gameQusetion ? <ChooseTypeGame dispatch = {dispatch} /> : state.typeOne ? <RPSL/> :  state.typeTwo ? <RPS/>  : null }
    </>
  )
}

