import "./category-button.styles.css";
import clickSound from "../../assets/sounds/app-sounds/click-sound.wav";

const CategoryButton = (props) => {
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const { buttonText, className } = props;
  return (
    <button onClick={playSound} className={`button-55 ${className}`}>
      {buttonText}
    </button>
  );
};
export default CategoryButton;
