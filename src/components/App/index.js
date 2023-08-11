import { Home } from "../routes/home.js"
import { Facile } from "../routes/facile.js";
import { Moyen } from "../routes/moyen.js";
import { Difficile } from "../routes/difficile.js";

import { Routes, Route } from "react-router-dom"
export function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/niveau/facile" element={<Facile />} />
        <Route path="/niveau/moyen" element={<Moyen />} />
        <Route path="/niveau/difficile" element={<Difficile />} />
      </Routes>

    </>
  );

}