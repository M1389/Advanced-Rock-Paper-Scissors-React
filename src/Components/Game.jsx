import React from 'react'
import RPS from './RPS'
import RPSL from './RPSL'

export default function Game() {
  return (
    <>
        <div className='main-page w-full h-[100vh] relative'>
            <div className='absolute'>
                <img src="./assets/images/image-rules-bonus.svg" alt="ROCK,PAPER,SCISSORS,SPOCK,LIZARD" />
                <img src="./assets/images/image-rules-bonus.svg" alt="ROCK,PAPER,SCISSORS" />
            </div>
        </div>
    </>
  )
}
