import { Link } from "react-router-dom";
import { Fragment } from "react";
import CatGif from "../../assets/yolk-cat-reading.gif";
import CategoryButton from "../../components/category-button/category-button.component";


const Directory = () => {
  return (
    <Fragment>
      <h1>Let's learn Polish!</h1>
      <img src={CatGif} alt="Cat GIF" />
      <Link to="/categories">
        <CategoryButton buttonText="Start" />
      </Link>
    </Fragment>
  );
};

export default Directory;
