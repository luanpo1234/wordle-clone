import { letterColors } from "../globalVars";

const KeyboardKey = ({ kKey, handleInput, usedLetters }) => {
    const getColors = () => {
        if (usedLetters.rightPosLetters.includes(kKey)){
            return { backgroundColor: letterColors.rightPosBg, color: letterColors.used }
        } else if (usedLetters.rightLetters.includes(kKey)){
            return { backgroundColor: letterColors.rightBg, color: letterColors.used }
        } else if (usedLetters.wrongLetters.includes(kKey)){
            return { backgroundColor: letterColors.wrongBg, color: letterColors.used }
        }
    };

    return (
    <div className={"keyboard-key"} style={getColors()} onClick={() => handleInput(kKey)} >
        {kKey === "Backspace" ? "\u232b" : kKey}
    </div>
)};

export default KeyboardKey;