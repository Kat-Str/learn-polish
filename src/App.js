import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Categories from "./routes/categories/categories.component";
import Vocabulary from "./routes/vocabulary/vocabulary.component";
import Grammar from "./routes/grammar/grammar.component";
import Phrases from "./routes/phrases/phrases.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/vocabulary" element={<Vocabulary />} />
        <Route path="/categories/phrases" element={<Phrases />} />
        <Route path="/categories/grammar" element={<Grammar />} />
      </Routes>
    </div>
  );
}

export default App;
