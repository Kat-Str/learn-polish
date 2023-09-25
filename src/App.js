import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Categories from "./routes/categories/categories.component";
import Vocabulary from "./routes/vocabulary/vocabulary.component";
import Grammar from "./routes/grammar/grammar.component";
import Phrases from "./routes/phrases/phrases.component";
import Food from "./routes/vocab-categories/food/food.component";
import Fruit from "./routes/vocab-categories/food/food-categories/fruit/fruit.component";
import Vegetables from "./routes/vocab-categories/food/food-categories/vegetables/vegetables.component";
import Drinks from "./routes/vocab-categories/food/food-categories/drinks/drinks.component";
import Colors from "./routes/vocab-categories/colors/colors.component";
import Animals from "./routes/vocab-categories/animals/animals.component";
import Meat from "./routes/vocab-categories/food/food-categories/meat/meat.component";
import Dishes from "./routes/vocab-categories/food/food-categories/dishes/dishes.component";
import Numbers from "./routes/vocab-categories/numbers/numbers.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/vocabulary" element={<Vocabulary />} />
        <Route path="/categories/phrases" element={<Phrases />} />
        <Route path="/categories/grammar" element={<Grammar />} />
        <Route path="/categories/vocabulary/food" element={<Food />} />
        <Route path="/categories/vocabulary/food/fruit" element={<Fruit />} />
        <Route
          path="/categories/vocabulary/food/vegetables"
          element={<Vegetables />}
        />
        <Route path="/categories/vocabulary/food/drinks" element={<Drinks />} />
        <Route path="/categories/vocabulary/colors" element={<Colors />} />
        <Route path="/categories/vocabulary/animals" element={<Animals />} />
        <Route path="/categories/vocabulary/food/meat" element={<Meat />} />
        <Route path="/categories/vocabulary/food/dishes" element={<Dishes />} />
        <Route path="/categories/vocabulary/numbers" element={<Numbers />} />
      </Routes>
    </div>
  );
}

export default App;
