import GameWord from "./GameWord";
import { nanoid } from 'nanoid'

const GameGrid = (props) => {
    //console.log("grid updated");
    return (
    <div className="game-grid">
        {props.words.map(w => 
        <GameWord 
            word={w}
            key={nanoid()}
            usedLetters={props.usedLetters}
            rightWord={props.rightWord}
            />)}  
    </div> )
};

export default GameGrid;