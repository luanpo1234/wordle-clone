import Keyboard from "./components/Keyboard";
import GameGrid from "./components/GameGrid";
import Message from "./components/Message";
import { useState, useEffect } from "react";
import { validLetters } from "./globalVars";
import { wordList } from "./wordList";
import { nanoid } from "nanoid";

function App() {
  //Constants:
  //
  const numLetters = 5;
  const numWords = 5;

  // States:
  //
    
  const createWords = (numWords, numLetters) => {
    const newWords = [];
    for (let i=0;i<numWords; i++) {
      newWords.push({
        "letters" : Array(numLetters).fill(""),
        "id"      : nanoid(),
        "isDone"  : false
      })
    }
    return newWords;
  }

  const [words, setWords] = useState(createWords(numWords, numLetters));
  const [currTry, setCurrTry] = useState(0);
  const [rightWord, setRightWord] = useState(wordList[Math.floor(Math.random()*wordList.length)].split(""));
  console.log(rightWord);
  //const [rightWord, setRightWord] = useState("geese".toUpperCase().split(""));
  const [gameOver, setGameOver] = useState(false);
  const [usedLetters, setUsedLetters] = useState({
    "wrongLetters"    : [],
    "rightLetters"    : [],
    "rightPosLetters" : []
  });
  const [message, setMessage] = useState();
  //const [numRounds, setNumRounds] = useState(0); // !!! Sem isso os componentes não rerenderizam, arruma depois

  //Functions:
  //
  const handleKeyDown = event => handleInput(event.key);
  
  // Helper function, check if array has no empty strings
  const isFull = (arr) => arr.filter(elmt => elmt.length > 0).length === arr.length;

  const submitLetter = (letter, idx) => {
    let category;
    if (letter.toUpperCase()===rightWord[idx]) {
      category = "rightPosLetters"
    } else if (rightWord.includes(letter.toUpperCase())){
      category = "rightLetters"
    } else {
      category = "wrongLetters"
    }
    setUsedLetters(prevLetters => {
      return {...prevLetters, [category]: prevLetters[category].concat([letter])}
    })
  }

  const endGame = (won) => {
    setGameOver(true);
    const message = won ? "You won!" : `Game over! The word was ${rightWord.join("")}.`;
    setMessage(message);
  }

  const submitWord = () => {
    if (isFull(words[currTry]["letters"])) {
      if (wordList.includes(words[currTry]["letters"].join(""))) {
        for (let i=0; i<words[currTry]["letters"].length;i++){
          submitLetter(words[currTry]["letters"][i], i)
        }
      setWords(prevWords => prevWords.map((elmt, index) =>
        index === currTry
        ? {...elmt, isDone:true}
        : elmt
      ));
      words[currTry]["letters"].join("") === rightWord.join("") && endGame(true);
      currTry === numWords -1 && endGame(false);
      setCurrTry(prevTry => prevTry + 1)
     // setNumRounds(prevNum => prevNum + 1);
     // setUsedLetters(prevLetters => prevLetters.concat(words[currTry]["letters"]))
      } else {
        setMessage("Word not found!");
      }
    }
  }

  const handleInput = input => {
    if (!gameOver) {
      if (validLetters.includes(input.toUpperCase())) {
        input = input.toUpperCase();
        setMessage("");
        const currWords = structuredClone(words);
        currWords[currTry]["letters"][currWords[currTry]["letters"].indexOf("")] = input; //Getting first empty item in words.letters, setting it to input
      // setNumRounds(prevNum => prevNum + 1);
        setWords(currWords);
    } else if (input === "Backspace"){
      const index = 
        isFull(words[currTry]["letters"]) ?
        words[currTry]["letters"].length-1 : 
        words[currTry]["letters"].indexOf("")-1;
      const currWords = structuredClone(words);
      currWords[currTry]["letters"][index] = "";
      setWords(currWords);
    } else if (input === "Enter") {
      submitWord()
    }
  }
};

  useEffect(() => {
    if (!gameOver) {
      window.addEventListener('keydown', handleKeyDown);
      // Clean up this component
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [handleKeyDown]);

  return (
    <div className="App">
      <Message message={message} />
      <GameGrid words={words} rightWord={rightWord} />
      <Keyboard handleInput={handleInput} usedLetters={usedLetters} />
    </div>
  );
}

export default App;

/* const [words, setWords] = useState(() => Array.from(
    {length: numWords}, () => Array(numLetters).fill("")
  )); */