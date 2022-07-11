import GameWord from "./GameWord";
import { nanoid } from 'nanoid'

const GameGrid = (props) => {
    return (
    <div className="game-grid">
        {props.words.map((w, index) => 
        <GameWord 
            word={w}
            key={nanoid()}
            usedLetters={props.usedLetters}
            rightWord={props.rightWord}
            shake={props.shakeWord === index ? "shake-word" : ""}
            />)}  
    </div> )
};

export default GameGrid;