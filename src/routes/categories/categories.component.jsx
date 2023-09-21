import { Link } from "react-router-dom";
import CategoryButton from "../../components/category-button/category-button.component";
import "./categories.styles.css";
import CatGif from "../../assets/yolk-cat-laptop.gif";
import Bubble from "../../assets/unlock-categories-bubble.gif";

const Categories = () => {
  return (
    <div>
      <div className="grids">
        <div />
        <div>
          <h1>What do you want to learn?</h1>
          <Link to="/categories/vocabulary">
            <CategoryButton buttonText="Vocabulary" />
          </Link>
          <Link>
            <CategoryButton buttonText="Phrases" className="inactive" />
          </Link>
          <Link>
            <CategoryButton buttonText="Grammar" className="inactive" />
          </Link>
        </div>
        <div className="third-grid">
          <div />
          <div className="bubble-row">
            <img src={Bubble} alt="Speech Bubble" width="200px" />
          </div>
          <div>
            <img src={CatGif} alt="Cat GIF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
