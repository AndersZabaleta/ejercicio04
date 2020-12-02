import { useState } from "react";

const Nombres = () => {
  const [nombres, setNombres] = useState(["Elena", "Luis", "Diego"]);
  const mostrarNombres = nombres.map((nombre) => {
    return <li>{nombre}</li>;
  });
  return <ul>{mostrarNombres}</ul>;
};

export default Nombres;
