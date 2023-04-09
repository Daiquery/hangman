import { bigStringOfWords } from "../../api/wordsList";
import LetterButton from "../LetterButton";
import "./styles.css";
const { useState, useRef, useEffect } = require("react");

const HangmanGame = () => {
  const rdmWords = bigStringOfWords;
  const randomWord = rdmWords.split(' ').filter((w) => {return w.length > 4})[(Math.floor(Math.random() * rdmWords.length))];
  const [gameState, setGameState] = useState(1);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  console.log(incorrectGuesses);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [word, setWord] = useState("");
  const [letters, setLetters] = useState(
    "ABCDEFGHJIKLMNOPQRSTUVWXYZ".split("")
  );

console.log(rdmWords.split(' ').filter((w) => {return w.length > 4})[Math.floor(2.2)])
console.log(randomWord);
  const startGame = () => {
    setGameState(1);
  };

  const handleGameTurn = (letter) => {
    if (word.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter]);
    } else {
      setIncorrectGuesses([...incorrectGuesses, letter]);
    }
  };

  const canvasRef = useRef(null);
  const width = 1000;
  const height = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, width, height);

    switch (gameState) {
      case 0:
        context.font = "48px serif";
        context.fillText("Click to start game!", width / 2 - 200, height / 2);
        break;
      case 1:
        function hangNoose() {
          // the hang thing
          context.beginPath();
          context.moveTo(100, 55);
          context.lineTo(100, 435);
          context.stroke();
          context.moveTo(100, 55);
          context.lineTo(200, 55);
          context.stroke();
          context.lineTo(200, 105);
          context.stroke();
        }

        function hangman() {
          if (incorrectGuesses.length >= 1) {
            //head
            context.beginPath();
            context.arc(200, 130, 25, 0, 2 * Math.PI, false);
            context.stroke();
          }
          if (incorrectGuesses.length >= 2) {
            //body
            context.beginPath();
            context.moveTo(200, 155);
            context.lineTo(200, 250);
            context.stroke();
          }

          if (incorrectGuesses.length >= 3) {
            // right leg
            context.moveTo(200, 250);
            context.lineTo(225, 300);
            context.stroke();
          }

          if (incorrectGuesses.length >= 4) {
            // left leg
            context.moveTo(200, 250);
            context.lineTo(175, 300);
            context.stroke();
          }

          if (incorrectGuesses.length >= 5) {
            // right arm
            context.moveTo(200, 155);
            context.lineTo(175, 200);
            context.stroke();
          }

          if (incorrectGuesses.length >= 6) {
            // left arm
            context.moveTo(200, 155);
            context.lineTo(225, 200);
            context.stroke();
          }
        }

        function usedLetterBox() {
          context.beginPath();
          context.rect(700, 35, 250, 400);
          context.stroke();
        }

        hangNoose();
        hangman();

      default:
        break;
    }
  }, [incorrectGuesses]);

  return (
    <div className="hangman-game">
      <h1 className="hangman-game__title">Hangman</h1>
      <canvas
        onClick={() => {
          startGame();
        }}
        ref={canvasRef}
        width={width}
        height={height}
      ></canvas>
      {gameState ? (
        <div className="hangman-game__controls">
          {letters.map((letter, i) => {
            return (
              <LetterButton
                letter={letter}
                handler={() => {
                  handleGameTurn(letter);
                }}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default HangmanGame;
