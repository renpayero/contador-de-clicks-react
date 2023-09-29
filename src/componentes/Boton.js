import React from "react";
import "../stylesheets/Boton.css";

function Boton({texto, esBotonDeClick, manejarClick}) {
  return (
    <button
    className={esBotonDeClick ? "botonClick" : "botonReiniciar"}
    onClick={manejarClick}>
      {texto}
    </button>
  )
}

export default Boton;