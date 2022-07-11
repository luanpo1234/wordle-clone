import { letterColors } from "../globalVars";

const GameLetter = (props) => {
    const getColors = () => {
        if(props.isDone) {  // Color should only change after word is submitted
            if (props.letter === props.rightLetter){ // Right letter in the right position
                return { backgroundColor: letterColors.rightPosBg, color: letterColors.used }
            } else if (props.rightWord.includes(props.letter)){ //Right letter in the wrong position
                return { backgroundColor: letterColors.rightBg, color: letterColors.used }
            } else {
                return { backgroundColor: letterColors.wrongBg, color: letterColors.used }
            }
        }
    };

    return (
    <div className={"game-letter"} style={getColors()}>
        {props.letter}
    </div>
)};

export default GameLetter;