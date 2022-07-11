import GameLetter from "./GameLetter";
import { nanoid } from 'nanoid'

const GameWord = (props) => {
    return (
    <div className={`game-word ${props.shake}`}>
       {props.word.letters.map(
        (letter, index) => 
        <GameLetter 
            letter = {letter}
            isDone = {props.word.isDone}
            key = {nanoid()}
            usedLetters = {props.usedLetters}
            rightWord = {props.rightWord}
            rightLetter = {props.rightWord[index]}
            />)}
    </div>
)};

export default GameWord;