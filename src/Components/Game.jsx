import React, { useReducer, useState } from 'react'
import RPS from './RPS'
import RPSL from './RPSL'
import ChooseTypeGame from './ChooseTypeGame'

let initialState = {
    typeOne : false,
    typeTwo: false,
    gameQusetion: false
}

let [{typeOne, typeTwo , gameQusetion} , dispatch] = useReducer(gameType , initialState)


function gameType(state , action){

}

export default function Game() {
  return (
    <>
        {gameQusetion ? <ChooseTypeGame/> : console.log('hi')}
        
    </>
  )
}
