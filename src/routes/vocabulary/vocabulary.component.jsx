import { Link } from "react-router-dom";
import CategoryButton from "../../components/category-button/category-button.component";
import { Fragment } from "react";

const Vocabulary = () => {
  return (
    <Fragment>
      <Link to="/categories/vocabulary/food">
        <CategoryButton buttonText="Food" />
      </Link>
      <Link to="/categories/vocabulary/colors">
        <CategoryButton buttonText="Colors" />
      </Link>
      <Link to="/categories/vocabulary/numbers">
        <CategoryButton buttonText="Numbers" />
      </Link>
      <Link to="/categories/vocabulary/animals">
        <CategoryButton buttonText="Animals" />
      </Link>
    </Fragment>
  );
};

export default Vocabulary;
