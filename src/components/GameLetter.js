import { letterBgColors } from "../globalVars";

const GameLetter = (props) => {
    const getColor = () => {
        if(props.isDone) {  // Color should only change after word is submitted
            if (props.letter === props.rightLetter){ // Right letter in the right position
                return letterBgColors.rightPos
            } else if (props.rightWord.includes(props.letter)){ //Right letter in the wrong position
                return letterBgColors.right
            } else {
                return letterBgColors.wrong;
            }
        }
    };

    return (
    <div className={"game-letter"} style={{backgroundColor: getColor()}}>
        {props.letter}
    </div>
)};

export default GameLetter;

//<div className=props.isDone ? getClassName() : 