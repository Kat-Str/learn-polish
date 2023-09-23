import VocabularyCard from "../../../../../components/vocabulary-card/vocabulary-card.component";
import { Fragment } from "react";
// Pictures
import jabłko from "../../../../../assets/vocabulary-pictures/food/fruit/jabłko.png";
import banan from "../../../../../assets/vocabulary-pictures/food/fruit/banan.png";
import cytryna from "../../../../../assets/vocabulary-pictures/food/fruit/cytryna.png";
import arbuz from "../../../../../assets/vocabulary-pictures/food/fruit/arbuz.png";
import truskawka from "../../../../../assets/vocabulary-pictures/food/fruit/truskawka.png";
// Sounds
import jabłkoSound from "../../../../../assets/sounds/vocabulary-sounds/food/fruit/jabłko.mp3";
import bananSound from "../../../../../assets/sounds/vocabulary-sounds/food/fruit/banan.mp3";
import cytrynaSound from "../../../../../assets/sounds/vocabulary-sounds/food/fruit/cytryna.mp3";
import arbuzSound from "../../../../../assets/sounds/vocabulary-sounds/food/fruit/arbuz.mp3";
import truskawkaSound from "../../../../../assets/sounds/vocabulary-sounds/food/fruit/truskawka.mp3";

const Fruit = () => {
  return (
    <Fragment>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="jabłko" picture={jabłko} sound={jabłkoSound} />
        <VocabularyCard word="banan" picture={banan} sound={bananSound} />
        <VocabularyCard word="cytryna" picture={cytryna} sound={cytrynaSound} />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="arbuz" picture={arbuz} sound={arbuzSound} />
        <VocabularyCard
          word="truskawka"
          picture={truskawka}
          sound={truskawkaSound}
        />
      </div>
    </Fragment>
  );
};

export default Fruit;
