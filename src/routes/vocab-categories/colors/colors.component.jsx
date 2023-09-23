import VocabularyCard from "../../../components/vocabulary-card/vocabulary-card.component";
import { Fragment } from "react";
// Pictures
import czerwony from "../../../assets/vocabulary-pictures/colors/czerwony.png";
import pomarańczowy from "../../../assets/vocabulary-pictures/colors/pomarańczowy.png";
import żółty from "../../../assets/vocabulary-pictures/colors/żółty.png";
import zielony from "../../../assets/vocabulary-pictures/colors/zielony.png";
import niebieski from "../../../assets/vocabulary-pictures/colors/niebieski.png";
import fioletowy from "../../../assets/vocabulary-pictures/colors/fioletowy.png";
import różowy from "../../../assets/vocabulary-pictures/colors/różowy.png";
import biały from "../../../assets/vocabulary-pictures/colors/biały.png";
import czarny from "../../../assets/vocabulary-pictures/colors/czarny.png";
import szary from "../../../assets/vocabulary-pictures/colors/szary.png";
import brązowy from "../../../assets/vocabulary-pictures/colors/brązowy.png";
// Sounds
import czerwonySound from "../../../assets/sounds/vocabulary-sounds/colors/czerwony.mp3";
import pomarańczowySound from "../../../assets/sounds/vocabulary-sounds/colors/pomarańczowy.mp3";
import żółtySound from "../../../assets/sounds/vocabulary-sounds/colors/żółty.mp3";
import zielonySound from "../../../assets/sounds/vocabulary-sounds/colors/zielony.mp3";
import niebieskiSound from "../../../assets/sounds/vocabulary-sounds/colors/niebieski.mp3";
import fioletowySound from "../../../assets/sounds/vocabulary-sounds/colors/fioletowy.mp3";
import różowySound from "../../../assets/sounds/vocabulary-sounds/colors/różowy.mp3";
import białySound from "../../../assets/sounds/vocabulary-sounds/colors/biały.mp3";
import szarySound from "../../../assets/sounds/vocabulary-sounds/colors/szary.mp3";
import czarnySound from "../../../assets/sounds/vocabulary-sounds/colors/czarny.mp3";
import brązowySound from "../../../assets/sounds/vocabulary-sounds/colors/brązowy.mp3";

const Colors = () => {
  return (
    <Fragment>
      <div className="grids-for-vocab-cards">
        <VocabularyCard
          className="color-card"
          word="czerwony"
          picture={czerwony}
          sound={czerwonySound}
        />
        <VocabularyCard
          className="color-card"
          word="pomarańczowy"
          picture={pomarańczowy}
          sound={pomarańczowySound}
        />
        <VocabularyCard
          className="color-card"
          word="żółty"
          picture={żółty}
          sound={żółtySound}
        />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard
          className="color-card"
          word="zielony"
          picture={zielony}
          sound={zielonySound}
        />
        <VocabularyCard
          className="color-card"
          word="niebieski"
          picture={niebieski}
          sound={niebieskiSound}
        />
        <VocabularyCard
          className="color-card"
          word="fioletowy"
          picture={fioletowy}
          sound={fioletowySound}
        />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard
          className="color-card"
          word="różowy"
          picture={różowy}
          sound={różowySound}
        />
        <VocabularyCard
          className="color-card"
          word="biały"
          picture={biały}
          sound={białySound}
          id="biały"
        />
        <VocabularyCard
          className="color-card"
          word="szary"
          picture={szary}
          sound={szarySound}
        />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard
          className="color-card"
          word="czarny"
          picture={czarny}
          sound={czarnySound}
        />
        <VocabularyCard
          className="color-card"
          word="brązowy"
          picture={brązowy}
          sound={brązowySound}
        />
      </div>
    </Fragment>
  );
};

export default Colors;
