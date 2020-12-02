import { BrowserRouter, Route, Link } from "react-router-dom";

import Cabecera from "./cabecera";
import Nombres from "./nombres";

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Route exact path="/">
        <h1>Rutas en React</h1>
      </Route>
      <Route exact path="/nombres">
        <Nombres />
      </Route>
    </BrowserRouter>
  );
}

export default App;
