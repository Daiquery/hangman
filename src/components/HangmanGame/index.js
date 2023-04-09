import "./styles.css";
const { useState, useRef, useEffect } = require("react");

const HangmanGame = () => {
  const canvasRef = useRef(null);
  const width = 1000;
  const height = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // context.beginPath();
    // context.moveTo(75, 50);
    // context.lineTo(100, 75);
    // context.lineTo(100, 25);
    // context.fill();
    // maybe can be used as a back button?

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

    //head
    context.beginPath();
    context.arc(200, 130, 25, 0, 2 * Math.PI, false);
    context.stroke();
    //body
    context.beginPath();
    context.moveTo(200, 155);
    context.lineTo(200, 250);
    context.stroke();
    //right leg
    context.lineTo(225, 300);
    context.stroke();

    // left leg
    context.moveTo(200, 250);
    context.lineTo(175, 300);
    context.stroke();
    
    // right arm
    context.moveTo(200, 155);
    context.lineTo(175, 200);
    context.stroke();

    // left arm
    context.moveTo(200, 155);
    context.lineTo(225, 200);
    context.stroke();


    context.beginPath();
    context.rect(700, 35, 250, 400)
    context.stroke();

    



  }, []);

  const [usedLetters, setUsedLetters] = useState([]);
  const [word, setWord] = useState("");

  return (
    <div className="hangman-game">
      <canvas ref={canvasRef} width={width} height={height}></canvas>
    </div>
  );
};

export default HangmanGame;
