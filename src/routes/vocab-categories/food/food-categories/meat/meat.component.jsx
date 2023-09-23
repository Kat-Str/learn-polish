import VocabularyCard from "../../../../../components/vocabulary-card/vocabulary-card.component";
import { Fragment } from "react";
// Pictures
import wieprzowina from "../../../../../assets/vocabulary-pictures/food/meat/wieprzowina.png";
import wołowina from "../../../../../assets/vocabulary-pictures/food/meat/wołowina.png";
import kurczak from "../../../../../assets/vocabulary-pictures/food/meat/kurczak.png";
import ryba from "../../../../../assets/vocabulary-pictures/food/meat/ryba.png";
import kiełbasa from "../../../../../assets/vocabulary-pictures/food/meat/kiełbasa.png";
import wędlina from "../../../../../assets/vocabulary-pictures/food/meat/wędlina.png";
// Sounds
import wieprzowinaSound from "../../../../../assets/sounds/vocabulary-sounds/food/meat/wieprzowina.mp3";
import wołowinaSound from "../../../../../assets/sounds/vocabulary-sounds/food/meat/wołowina.mp3";
import kurczakSound from "../../../../../assets/sounds/vocabulary-sounds/food/meat/kurczak.mp3";
import rybaSound from "../../../../../assets/sounds/vocabulary-sounds/food/meat/ryba.mp3";
import kiełbasaSound from "../../../../../assets/sounds/vocabulary-sounds/food/meat/kiełbasa.mp3";
import wędlinaSound from "../../../../../assets/sounds/vocabulary-sounds/food/meat/wędlina.mp3";

const Meat = () => {
  return (
    <Fragment>
      <div className="grids-for-vocab-cards">
        <VocabularyCard
          word="wieprzowina"
          picture={wieprzowina}
          sound={wieprzowinaSound}
        />
        <VocabularyCard
          word="wołowina"
          picture={wołowina}
          sound={wołowinaSound}
        />
        <VocabularyCard word="kurczak" picture={kurczak} sound={kurczakSound} />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="ryba" picture={ryba} sound={rybaSound} />
        <VocabularyCard
          word="kiełbasa"
          picture={kiełbasa}
          sound={kiełbasaSound}
        />
        <VocabularyCard word="wędlina" picture={wędlina} sound={wędlinaSound} />
      </div>
    </Fragment>
  );
};

export default Meat;
