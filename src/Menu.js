import React from "react";
// muestra la barra de menú horizontal
// 1. arreglo con los nombres de las opciones del menú
const Lista=['Index','Tradiciones','Gastronomía',
'Platos Bandera','Contáctenos'];
// 2. crea arreglo con los enlaces "href" de las opciones
// map() -> recorre el arreglo y asigna el enlace
const items = Lista.map((x)=>
<a href="#" className="item">{x}</a>);

function Menu(){
    return (
        <div className="bloque">
            {items}
        </div>
    );
}

// export para reutilizar
export default Menu;