import React from "react";
import Tradiciones from './Tradiciones';

const imgs = Tradiciones.map((x)=>
<img className="imgseccion" src={x}></img>);

function Seccion(){
    return (
        <div className="divseccion">
            <h2 className="h2cab">Tradiciones en el Perú</h2>
            {imgs}
        </div>
    );
}

export default Seccion;