import KeyboardKey from "./KeyboardKey";
import { validLetters } from "../globalVars"

const keyboardLetters = [...validLetters, "Enter", "Backspace"];

const Keyboard = (props) => (
    <div className="keyboard">
        {keyboardLetters.map(letterKey => 
        <KeyboardKey
            kKey={letterKey}
            key={letterKey}
            handleInput={props.handleInput} 
            usedLetters={props.usedLetters} 
            />)}
    </div>
)

export default Keyboard;