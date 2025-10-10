import { useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './UI.module.css'
import CardPattern from '../assets/moroccan-flower-dark.png'
import Bilbo from '../assets/bilbo-baggins.png'
import Cameron from '../assets/cameron-poe.png'
import Nikki from '../assets/nikki-cage.png'
import Pollux from '../assets/pollux-troy.png'

// we will duplicate (2 of each), shuffle, then load them
const cardImages = [{src: Cameron}, {src: Bilbo}, {src: Nikki}, {src: Pollux}]
// example later: [{src: Cameron, id: 123, matched: true}, ...]

export default function Game(props) {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // duplicate deck, shuffle, then store them in state
  const shuffleCards = () => {
    // duplicate the array so that there can be matching pairs
    const shuffledCards = [...cardImages, ...cardImages]
      // When a number is negative, leave it where it is, when it's positive, swap it with another item
      .sort(() => Math.random() - 0.5) // .sort() sorts in place, no duplicate of array | Math.random() is always a floating point num between 0 & 1 
      // map through each card, copy their properties and add a new one (id)
      .map((card) => ( // map creates a new array. Also, I don't have to say 'return' since I use () after the =>
        {...card, id: Math.round(Math.random() * 1000000)} // ...card has the 'src' key and its value
      ));

    setCards(shuffledCards)
    setTurns(0)
    // console.log(shuffledCards)
  }

  const handleChoice = (card) => {
    // console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    // When both cards are set, we need to compare them. S0 we use useEffect, which will also reset both choices because we don't want this function to run when both choices were already set beforehand, since that would be unintended behavior.
  }

  
  // Runs after a card is selected, but only does something meaningful once both choices exist.
  useEffect(() => {
    if (choiceOne && choiceTwo) { // make sure we have both choices
      if (choiceOne.src === choiceTwo.src) { // check if they match
        // we have an array of all of our shuffled cards inside cards (state)

        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              console.log('those cards match!')
              return {...card, matched: true} // spread the card properties (key value pairs) and add a new one called matched and set it to true
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log('these cards dont match!')
        setTimeout(() => resetTurn(), 1000) /// without this setTimeout, we wont even see the second card flip
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns used: {turns}</p>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <Card card={card} key={card.id} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched}/>
          ))}
        </div>
      </div>
    </>
  )
}

function Card(props) {
  
  const {card, handleChoice, flipped} = props
  
  const handleClick = () => {handleChoice(card)}

  return (
    <div className={styles.flip_card}>
      <div className={cx(styles.flip_card_inner, {[styles.active]: flipped})} onClick={handleClick}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card front" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt="card back" />
        </div>
      </div>
    </div>
  )
}
