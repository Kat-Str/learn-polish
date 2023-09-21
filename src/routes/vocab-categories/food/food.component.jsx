import { Link } from "react-router-dom";
import CategoryButton from "../../../components/category-button/category-button.component";
import { Fragment } from "react";

const Food = () => {
  return (
    <Fragment>
      <Link to="/categories/vocabulary/food/fruit">
        <CategoryButton buttonText="Fruit" />
      </Link>
      <Link to="/categories/vocabulary/food/vegetables">
        <CategoryButton buttonText="Vegetables" />
      </Link>
      <Link to="/categories/vocabulary/food/drinks">
        <CategoryButton buttonText="Drinks" />
      </Link>
    </Fragment>
  );
};

export default Food;
