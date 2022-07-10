import { letterBgColors } from "../globalVars";

const KeyboardKey = ({ kKey, handleInput, usedLetters }) => {
    const getColor = () => {
        if (usedLetters.rightPosLetters.includes(kKey)){
            return letterBgColors.rightPos;
        } else if (usedLetters.rightLetters.includes(kKey)){
            return letterBgColors.right;
        } else if (usedLetters.wrongLetters.includes(kKey)){
            return letterBgColors.wrong;
        }
    };

    return (
    <div className={"keyboard-key"} style={{backgroundColor: getColor()}} onClick={() => handleInput(kKey)} >
        {kKey === "Backspace" ? "\u232b" : kKey}
    </div>
)};

export default KeyboardKey;