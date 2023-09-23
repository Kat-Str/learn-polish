import VocabularyCard from "../../../../../components/vocabulary-card/vocabulary-card.component";
import { Fragment } from "react";
// Pictures
import woda from "../../../../../assets/vocabulary-pictures/food/drinks/woda.png";
import kawa from "../../../../../assets/vocabulary-pictures/food/drinks/kawa.png";
import herbata from "../../../../../assets/vocabulary-pictures/food/drinks/herbata.png";
import mleko from "../../../../../assets/vocabulary-pictures/food/drinks/mleko.png";
import sok from "../../../../../assets/vocabulary-pictures/food/drinks/sok.png";
import wino from "../../../../../assets/vocabulary-pictures/food/drinks/wino.png";
// Sounds
import wodaSound from "../../../../../assets/sounds/vocabulary-sounds/food/drinks/woda.mp3";
import kawaSound from "../../../../../assets/sounds/vocabulary-sounds/food/drinks/kawa.mp3";
import herbataSound from "../../../../../assets/sounds/vocabulary-sounds/food/drinks/herbata.mp3";
import mlekoSound from "../../../../../assets/sounds/vocabulary-sounds/food/drinks/mleko.mp3";
import sokSound from "../../../../../assets/sounds/vocabulary-sounds/food/drinks/sok.mp3";
import winoSound from "../../../../../assets/sounds/vocabulary-sounds/food/drinks/wino.mp3";

const Drinks = () => {
  return (
    <Fragment>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="woda" picture={woda} sound={wodaSound} />
        <VocabularyCard word="kawa" picture={kawa} sound={kawaSound} />
        <VocabularyCard word="herbata" picture={herbata} sound={herbataSound} />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="mleko" picture={mleko} sound={mlekoSound} />
        <VocabularyCard word="sok" picture={sok} sound={sokSound} />
        <VocabularyCard word="wino" picture={wino} sound={winoSound} />
      </div>
    </Fragment>
  );
};

export default Drinks;
