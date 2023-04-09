import "./styles.css";
const { useState, useRef, useEffect } = require("react");

const LetterButton = ({letter, handler}) => {
  
  return (
    <div onClick={handler} className="letter-button">
      <h3>{letter}</h3>
    </div>
  );
};

export default LetterButton;
