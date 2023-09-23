import VocabularyCard from "../../../../../components/vocabulary-card/vocabulary-card.component";
import { Fragment } from "react";
// Pictures
import marchew from "../../../../../assets/vocabulary-pictures/food/vegetables/marchew.png";
import ziemniak from "../../../../../assets/vocabulary-pictures/food/vegetables/ziemniak.png";
import pomidor from "../../../../../assets/vocabulary-pictures/food/vegetables/pomidor.png";
import brokuł from "../../../../../assets/vocabulary-pictures/food/vegetables/brokuł.png";
import papryka from "../../../../../assets/vocabulary-pictures/food/vegetables/papryka.png";
import cebula from "../../../../../assets/vocabulary-pictures/food/vegetables/cebula.png";
// Sounds
import marchewSound from "../../../../../assets/sounds/vocabulary-sounds/food/vegetables/marchew.mp3";
import ziemniakSound from "../../../../../assets/sounds/vocabulary-sounds/food/vegetables/ziemniak.mp3";
import pomidorSound from "../../../../../assets/sounds/vocabulary-sounds/food/vegetables/pomidor.mp3";
import brokułSound from "../../../../../assets/sounds/vocabulary-sounds/food/vegetables/brokuł.mp3";
import paprykaSound from "../../../../../assets/sounds/vocabulary-sounds/food/vegetables/papryka.mp3";
import cebulaSound from "../../../../../assets/sounds/vocabulary-sounds/food/vegetables/cebula.mp3";

const Vegetables = () => {
  return (
    <Fragment>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="marchew" picture={marchew} sound={marchewSound} />
        <VocabularyCard
          word="ziemniak"
          picture={ziemniak}
          sound={ziemniakSound}
        />
        <VocabularyCard word="pomidor" picture={pomidor} sound={pomidorSound} />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="brokuł" picture={brokuł} sound={brokułSound} />
        <VocabularyCard word="papryka" picture={papryka} sound={paprykaSound} />
        <VocabularyCard word="cebula" picture={cebula} sound={cebulaSound} />
      </div>
    </Fragment>
  );
};

export default Vegetables;
