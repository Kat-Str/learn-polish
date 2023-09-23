import VocabularyCard from "../../../../../components/vocabulary-card/vocabulary-card.component";
import { Fragment } from "react";
// Pictures
import kanapka from "../../../../../assets/vocabulary-pictures/food/dishes/kanapka.png";
import pierogi from "../../../../../assets/vocabulary-pictures/food/dishes/pierogi.png";
import kotlet from "../../../../../assets/vocabulary-pictures/food/dishes/kotlet.png";
import zupa from "../../../../../assets/vocabulary-pictures/food/dishes/zupa.png";
import zupkaChińska from "../../../../../assets/vocabulary-pictures/food/dishes/zupkaChińska.png";
// Sounds
import kanapkaSound from "../../../../../assets/sounds/vocabulary-sounds/food/dishes/kanapka.mp3";
import pierogiSound from "../../../../../assets/sounds/vocabulary-sounds/food/dishes/pierogi.mp3";
import kotletSound from "../../../../../assets/sounds/vocabulary-sounds/food/dishes/kotlet.mp3";
import zupaSound from "../../../../../assets/sounds/vocabulary-sounds/food/dishes/zupa.mp3";
import zupkaChińskaSound from "../../../../../assets/sounds/vocabulary-sounds/food/dishes/zupkaChińska.mp3";

const Dishes = () => {
  return (
    <Fragment>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="kanapka" picture={kanapka} sound={kanapkaSound} />
        <VocabularyCard word="pierogi" picture={pierogi} sound={pierogiSound} />
        <VocabularyCard word="kotlet" picture={kotlet} sound={kotletSound} />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="zupa" picture={zupa} sound={zupaSound} />
        <VocabularyCard
          word="zupka chińska"
          picture={zupkaChińska}
          sound={zupkaChińskaSound}
        />
      </div>
    </Fragment>
  );
};

export default Dishes;
