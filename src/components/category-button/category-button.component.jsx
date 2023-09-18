import "./category-button.styles.css";

const CategoryButton = (props) => {
  const { buttonText, className } = props;
  return <button className={`button-55 ${className}`}>{buttonText}</button>;
};
export default CategoryButton;
