import VocabularyCard from "../../../../../components/vocabulary-card/vocabulary-card.component";
import { Fragment } from "react";
import woda from "../../../../../assets/vocabulary-pictures/food/drinks/water.png";
import kawa from "../../../../../assets/vocabulary-pictures/food/drinks/coffee.png";
import herbata from "../../../../../assets/vocabulary-pictures/food/drinks/tea.png";
import mleko from "../../../../../assets/vocabulary-pictures/food/drinks/milk.png";
import sok from "../../../../../assets/vocabulary-pictures/food/drinks/juice.png";
import wino from "../../../../../assets/vocabulary-pictures/food/drinks/wine.png";

const Drinks = () => {
  return (
    <Fragment>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="woda" picture={woda} />
        <VocabularyCard word="kawa" picture={kawa} />
        <VocabularyCard word="herbata" picture={herbata} />
      </div>
      <div className="grids-for-vocab-cards">
        <VocabularyCard word="mleko" picture={mleko} />
        <VocabularyCard word="sok" picture={sok} />
        <VocabularyCard word="wino" picture={wino} />
      </div>
    </Fragment>
  );
};

export default Drinks;
