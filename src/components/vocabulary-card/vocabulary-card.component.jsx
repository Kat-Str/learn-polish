import "./vocabulary-card.styles.css";
import { Fragment } from "react";

const VocabularyCard = (props) => {
  const { word, picture, sound } = props;

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <Fragment>
      <button onClick={playSound} className="vocabulary-card">
        <div>{word}</div>
        <br />
        <div>
          <img src={picture} alt={word} className="word-picture" />
        </div>
      </button>
    </Fragment>
  );
};
export default VocabularyCard;
