import NumberButton from "../../../components/number-button/number-button.component";
// Sounds
import zero from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/0.mp3";
import jeden from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/1.mp3";
import dwa from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/2.mp3";
import trzy from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/3.mp3";
import cztery from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/4.mp3";
import pięć from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/5.mp3";
import sześć from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/6.mp3";
import siedem from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/7.mp3";
import osiem from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/8.mp3";
import dziewięć from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/9.mp3";
import dziesięć from "../../../assets/sounds/vocabulary-sounds/numbers/0-10/10.mp3";
//
import jedenaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/11.mp3";
import dwanaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/12.mp3";
import trzynaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/13.mp3";
import czternaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/14.mp3";
import piętnaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/15.mp3";
import szesnaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/16.mp3";
import siedemnaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/17.mp3";
import osiemnaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/18.mp3";
import dziewiętnaście from "../../../assets/sounds/vocabulary-sounds/numbers/11-19/19.mp3";
//
import dwadzieściaJeden from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/21.mp3";
import dwadzieściaDwa from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/22.mp3";
import dwadzieściaTrzy from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/23.mp3";
import dwadzieściaCztery from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/24.mp3";
import dwadzieściaPięć from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/25.mp3";
import dwadzieściaSześć from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/26.mp3";
import dwadzieściaSiedem from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/27.mp3";
import dwadzieściaOsiem from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/28.mp3";
import dwadzieściaDziewięć from "../../../assets/sounds/vocabulary-sounds/numbers/21-29/29.mp3";
//
import dwadzieścia from "../../../assets/sounds/vocabulary-sounds/numbers/20-90/20.mp3";
import trzydzieści from "../../../assets/sounds/vocabulary-sounds/numbers/20-90/30.mp3";
import czterdzieści from "../../../assets/sounds/vocabulary-sounds/numbers/20-90/40.mp3";
import pięćdziesiąt from "../../../assets/sounds/vocabulary-sounds/numbers/20-90/50.mp3";
import sześćdziesiąt from "../../../assets/sounds/vocabulary-sounds/numbers/20-90/60.mp3";
import siedemdziesiąt from "../../../assets/sounds/vocabulary-sounds/numbers/20-90/70.mp3";
import osiemdziesiąt from "../../../assets/sounds/vocabulary-sounds/numbers/20-90/80.mp3";
import dziewięćdziesiąt from "../../../assets/sounds/vocabulary-sounds/numbers/20-90/90.mp3";
//
import sto from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/100.mp3";
import dwieście from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/200.mp3";
import trzysta from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/300.mp3";
import czterysta from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/400.mp3";
import pięćset from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/500.mp3";
import sześćset from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/600.mp3";
import siedemset from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/700.mp3";
import osiemset from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/800.mp3";
import dziewięćset from "../../../assets/sounds/vocabulary-sounds/numbers/100-900/900.mp3";
//
import tysiąc from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/1000.mp3";
import dwaTysiące from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/2000.mp3";
import trzyTysiące from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/3000.mp3";
import czteryTysiące from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/4000.mp3";
import pięćTysięcy from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/5000.mp3";
import sześćTysięcy from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/6000.mp3";
import siedemTysięcy from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/7000.mp3";
import osiemTysięcy from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/8000.mp3";
import dziewięćTysięcy from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/9000.mp3";
import dziesięćTysięcy from "../../../assets/sounds/vocabulary-sounds/numbers/1000-10 000/10 000.mp3";

const Numbers = () => {
  return (
    <div className="all-numbers">
      <div className="number-block">
        <NumberButton
          className="numbers-one"
          number="0"
          word1="zero"
          sound={zero}
        />
        <NumberButton
          className="numbers-one"
          number="1"
          word1="jeden"
          sound={jeden}
        />
        <NumberButton
          className="numbers-one"
          number="2"
          word1="dwa"
          sound={dwa}
        />
        <NumberButton
          className="numbers-one"
          number="3"
          word1="trzy"
          sound={trzy}
        />
        <NumberButton
          className="numbers-one"
          number="4"
          word1="cztery"
          sound={cztery}
        />
        <NumberButton
          className="numbers-one"
          number="5"
          word1="pięć"
          sound={pięć}
        />
        <NumberButton
          className="numbers-one"
          number="6"
          word1="sześć"
          sound={sześć}
        />
        <NumberButton
          className="numbers-one"
          number="7"
          word1="siedem"
          sound={siedem}
        />
        <NumberButton
          className="numbers-one"
          number="8"
          word1="osiem"
          sound={osiem}
        />
        <NumberButton
          className="numbers-one"
          number="9"
          word1="dziewięć"
          sound={dziewięć}
        />
        <NumberButton
          className="numbers-one"
          number="10"
          word1="dziesięć"
          sound={dziesięć}
        />
      </div>
      <div className="number-block">
        <NumberButton
          className="numbers-two"
          number="11"
          word1="jede"
          word2="naście"
          sound={jedenaście}
        />
        <NumberButton
          className="numbers-two"
          number="12"
          word1="dwa"
          word2="naście"
          sound={dwanaście}
        />
        <NumberButton
          className="numbers-two"
          number="13"
          word1="trzy"
          word2="naście"
          sound={trzynaście}
        />
        <NumberButton
          className="numbers-two"
          number="14"
          word1="czter"
          word2="naście"
          sound={czternaście}
        />
        <NumberButton
          className="numbers-two"
          number="15"
          word1="pięt"
          word2="naście"
          sound={piętnaście}
        />
        <NumberButton
          className="numbers-two"
          number="16"
          word1="szes"
          word2="naście"
          sound={szesnaście}
        />
        <NumberButton
          className="numbers-two"
          number="17"
          word1="siedem"
          word2="naście"
          sound={siedemnaście}
        />
        <NumberButton
          className="numbers-two"
          number="18"
          word1="osiem"
          word2="naście"
          sound={osiemnaście}
        />
        <NumberButton
          className="numbers-two"
          number="19"
          word1="dziewięt"
          word2="naście"
          sound={dziewiętnaście}
        />
      </div>
      <div className="number-block">
        <NumberButton
          className="numbers-three"
          number="20"
          word1="dwa"
          word2="dzieścia"
          sound={dwadzieścia}
        />
        <NumberButton
          className="numbers-three"
          number="30"
          word1="trzy"
          word2="dzieści"
          sound={trzydzieści}
        />
        <NumberButton
          className="numbers-three"
          number="40"
          word1="czter"
          word2="dzieści"
          sound={czterdzieści}
        />
        <NumberButton
          className="numbers-three"
          number="50"
          word1="pięć"
          word2="dziesiąt"
          sound={pięćdziesiąt}
        />
        <NumberButton
          className="numbers-three"
          number="60"
          word1="sześć"
          word2="dziesiąt"
          sound={sześćdziesiąt}
        />
        <NumberButton
          className="numbers-three"
          number="70"
          word1="siedem"
          word2="dziesiąt"
          sound={siedemdziesiąt}
        />
        <NumberButton
          className="numbers-three"
          number="80"
          word1="osiem"
          word2="dziesiąt"
          sound={osiemdziesiąt}
        />
        <NumberButton
          className="numbers-three"
          number="90"
          word1="dziewięć"
          word2="dziesiąt"
          sound={dziewięćdziesiąt}
        />
      </div>
      <div className="number-block">
        <NumberButton
          className="numbers-four"
          number="21"
          word1="dwadzieścia jeden"
          sound={dwadzieściaJeden}
        />
        <NumberButton
          className="numbers-four"
          number="22"
          word1="dwadzieścia dwa"
          sound={dwadzieściaDwa}
        />
        <NumberButton
          className="numbers-four"
          number="23"
          word1="dwadzieścia trzy"
          sound={dwadzieściaTrzy}
        />
        <NumberButton
          className="numbers-four"
          number="24"
          word1="dwadzieścia cztery"
          sound={dwadzieściaCztery}
        />
        <NumberButton
          className="numbers-four"
          number="25"
          word1="dwadzieścia pięć"
          sound={dwadzieściaPięć}
        />
        <NumberButton
          className="numbers-four"
          number="26"
          word1="dwadzieścia sześć"
          sound={dwadzieściaSześć}
        />
        <NumberButton
          className="numbers-four"
          number="27"
          word1="dwadzieścia siedem"
          sound={dwadzieściaSiedem}
        />
        <NumberButton
          className="numbers-four"
          number="28"
          word1="dwadzieścia osiem"
          sound={dwadzieściaOsiem}
        />
        <NumberButton
          className="numbers-four"
          number="29"
          word1="dwadzieścia dziewięć"
          sound={dwadzieściaDziewięć}
        />
      </div>
      <div className="number-block">
        <NumberButton
          className="numbers-five"
          number="100"
          word1="sto"
          sound={sto}
        />
        <NumberButton
          className="numbers-five"
          number="200"
          word1="dwie"
          word2="ście"
          sound={dwieście}
        />
        <NumberButton
          className="numbers-five"
          number="300"
          word1="trzy"
          word2="sta"
          sound={trzysta}
        />
        <NumberButton
          className="numbers-five"
          number="400"
          word1="cztery"
          word2="sta"
          sound={czterysta}
        />
        <NumberButton
          className="numbers-five"
          number="500"
          word1="pięć"
          word2="set"
          sound={pięćset}
        />
        <NumberButton
          className="numbers-five"
          number="600"
          word1="sześć"
          word2="set"
          sound={sześćset}
        />
        <NumberButton
          className="numbers-five"
          number="700"
          word1="siedem"
          word2="set"
          sound={siedemset}
        />
        <NumberButton
          className="numbers-five"
          number="800"
          word1="osiem"
          word2="set"
          sound={osiemset}
        />
        <NumberButton
          className="numbers-five"
          number="900"
          word1="dziewięć"
          word2="set"
          sound={dziewięćset}
        />
      </div>
      <div className="number-block">
        <NumberButton
          className="numbers-six"
          number="1 000"
          word1="tysiąc"
          sound={tysiąc}
        />
        <NumberButton
          className="numbers-six"
          number="2 000"
          word1="dwa tysiące"
          sound={dwaTysiące}
        />
        <NumberButton
          className="numbers-six"
          number="3 000"
          word1="trzy tysiące"
          sound={trzyTysiące}
        />
        <NumberButton
          className="numbers-six"
          number="4 000"
          word1="cztery tysiące"
          sound={czteryTysiące}
        />
        <NumberButton
          className="numbers-six"
          number="5 000"
          word1="pięć tysięcy"
          sound={pięćTysięcy}
        />
        <NumberButton
          className="numbers-six"
          number="6 000"
          word1="sześć tysięcy"
          sound={sześćTysięcy}
        />
        <NumberButton
          className="numbers-six"
          number="7 000"
          word1="siedem tysięcy"
          sound={siedemTysięcy}
        />
        <NumberButton
          className="numbers-six"
          number="8 000"
          word1="osiem tysięcy"
          sound={osiemTysięcy}
        />
        <NumberButton
          className="numbers-six"
          number="9 000"
          word1="dziewięć tysięcy"
          sound={dziewięćTysięcy}
        />
        <NumberButton
          className="numbers-six"
          number="10 000"
          word1="dziesięć tysięcy"
          sound={dziesięćTysięcy}
        />
      </div>
    </div>
  );
};

export default Numbers;
