import "./number-button.styles.css";
import { Fragment } from "react";

const NumberButton = (props) => {
  const { className, number, word1, word2, sound } = props;

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <Fragment>
      <button className={`number-button ${className}`} onClick={playSound}>
        <div className="number">{number}</div>
        <div>
          {word1}
          <u>{word2}</u>
        </div>
      </button>
    </Fragment>
  );
};

export default NumberButton;
