import NumberButton from "../../../components/number-button/number-button.component";

const Numbers = () => {
  return (
    <div className="all-numbers">
      <div className="number-block">
        <NumberButton className="numbers-one" number="0" word1="zero" />
        <NumberButton className="numbers-one" number="1" word1="jeden" />
        <NumberButton className="numbers-one" number="2" word1="dwa" />
        <NumberButton className="numbers-one" number="3" word1="trzy" />
        <NumberButton className="numbers-one" number="4" word1="cztery" />
        <NumberButton className="numbers-one" number="5" word1="pięć" />
        <NumberButton className="numbers-one" number="6" word1="sześć" />
        <NumberButton className="numbers-one" number="7" word1="siedem" />
        <NumberButton className="numbers-one" number="8" word1="osiem" />
        <NumberButton className="numbers-one" number="9" word1="dziewięć" />
        <NumberButton className="numbers-one" number="10" word1="dziesięć" />
      </div>
      <div className="number-block">
        <NumberButton
          className="numbers-two"
          number="11"
          word1="jede"
          word2="naście"
        />
        <NumberButton
          className="numbers-two"
          number="12"
          word1="dwa"
          word2="naście"
        />
        <NumberButton
          className="numbers-two"
          number="13"
          word1="trzy"
          word2="naście"
        />
        <NumberButton
          className="numbers-two"
          number="14"
          word1="czter"
          word2="naście"
        />
        <NumberButton
          className="numbers-two"
          number="15"
          word1="pięt"
          word2="naście"
        />
        <NumberButton
          className="numbers-two"
          number="16"
          word1="szes"
          word2="naście"
        />
        <NumberButton
          className="numbers-two"
          number="17"
          word1="siedem"
          word2="naście"
        />
        <NumberButton
          className="numbers-two"
          number="18"
          word1="osiem"
          word2="naście"
        />
        <NumberButton
          className="numbers-two"
          number="19"
          word1="dziewięt"
          word2="naście"
        />
      </div>
      <div className="number-block">
        <NumberButton
          className="numbers-three"
          number="20"
          word1="dwa"
          word2="dzieścia"
        />
        <NumberButton
          className="numbers-three"
          number="30"
          word1="trzy"
          word2="dzieści"
        />
        <NumberButton
          className="numbers-three"
          number="40"
          word1="czter"
          word2="dzieści"
        />
        <NumberButton
          className="numbers-three"
          number="50"
          word1="pięć"
          word2="dziesiąt"
        />
        <NumberButton
          className="numbers-three"
          number="60"
          word1="sześć"
          word2="dziesiąt"
        />
        <NumberButton
          className="numbers-three"
          number="70"
          word1="siedem"
          word2="dziesiąt"
        />
        <NumberButton
          className="numbers-three"
          number="80"
          word1="osiem"
          word2="dziesiąt"
        />
        <NumberButton
          className="numbers-three"
          number="90"
          word1="dziewięć"
          word2="dziesiąt"
        />
      </div>
      <div className="number-block">
        <NumberButton
          className="numbers-four"
          number="21"
          word1="dwadzieścia jeden"
        />
        <NumberButton
          className="numbers-four"
          number="22"
          word1="dwadzieścia dwa"
        />
        <NumberButton
          className="numbers-four"
          number="23"
          word1="dwadzieścia trzy"
        />
        <NumberButton
          className="numbers-four"
          number="24"
          word1="dwadzieścia cztery"
        />
        <NumberButton
          className="numbers-four"
          number="25"
          word1="dwadzieścia pięć"
        />
        <NumberButton
          className="numbers-four"
          number="26"
          word1="dwadzieścia sześć"
        />
        <NumberButton
          className="numbers-four"
          number="27"
          word1="dwadzieścia siedem"
        />
        <NumberButton
          className="numbers-four"
          number="28"
          word1="dwadzieścia osiem"
        />
        <NumberButton
          className="numbers-four"
          number="29"
          word1="dwadzieścia dziewięć"
        />
      </div>
      <div className="number-block">
        <NumberButton className="numbers-five" number="100" word1="sto" />
        <NumberButton
          className="numbers-five"
          number="200"
          word1="dwie"
          word2="ście"
        />
        <NumberButton
          className="numbers-five"
          number="300"
          word1="trzy"
          word2="sta"
        />
        <NumberButton
          className="numbers-five"
          number="400"
          word1="cztery"
          word2="sta"
        />
        <NumberButton
          className="numbers-five"
          number="500"
          word1="pięć"
          word2="set"
        />
        <NumberButton
          className="numbers-five"
          number="600"
          word1="sześć"
          word2="set"
        />
        <NumberButton
          className="numbers-five"
          number="700"
          word1="siedem"
          word2="set"
        />
        <NumberButton
          className="numbers-five"
          number="800"
          word1="osiem"
          word2="set"
        />
        <NumberButton
          className="numbers-five"
          number="900"
          word1="dziewięć"
          word2="set"
        />
      </div>
      <div className="number-block">
        <NumberButton className="numbers-six" number="1 000" word1="tysiąc" />
        <NumberButton
          className="numbers-six"
          number="2 000"
          word1="dwa tysiące"
        />
        <NumberButton
          className="numbers-six"
          number="3 000"
          word1="trzy tysiące"
        />
        <NumberButton
          className="numbers-six"
          number="4 000"
          word1="cztery tysiące"
        />
        <NumberButton
          className="numbers-six"
          number="5 000"
          word1="pięć tysięcy"
        />
        <NumberButton
          className="numbers-six"
          number="6 000"
          word1="sześć tysięcy"
        />
        <NumberButton
          className="numbers-six"
          number="7 000"
          word1="siedem tysięcy"
        />
        <NumberButton
          className="numbers-six"
          number="8 000"
          word1="osiem tysięcy"
        />
        <NumberButton
          className="numbers-six"
          number="9 000"
          word1="dziewięć tysięcy"
        />
        <NumberButton
          className="numbers-six"
          number="10 000"
          word1="dziesięć tysięcy"
        />
      </div>
    </div>
  );
};

export default Numbers;
