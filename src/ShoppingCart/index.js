import React from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  return (
    <React.Fragment>
      <h1>Carrito de compras</h1>
      <div className="container">
        <div className="ropa">
          <h2>Producto</h2>
          <img
            src="https://tottoco.vteximg.com.br/arquivos/ids/172991/DOWN-ML-H-1720-4LG_A.png?v=636492819456730000"
            alt="no funciona"
          />

          <button>Comprar</button>
        </div>
        <div className="ropa">
          <h2>Producto</h2>
          <img
            src="https://tottoco.vteximg.com.br/arquivos/ids/172991/DOWN-ML-H-1720-4LG_A.png?v=636492819456730000"
            alt="no funciona"
          />

          <button>Comprar</button>
        </div>
        <div className="ropa">
          <h2>Producto</h2>
          <img
            src="https://tottoco.vteximg.com.br/arquivos/ids/172991/DOWN-ML-H-1720-4LG_A.png?v=636492819456730000"
            alt="no funciona"
          />

          <button>Comprar</button>
        </div>
        <div className="ropa">
          <h2>Producto</h2>
          <img
            src="https://tottoco.vteximg.com.br/arquivos/ids/172991/DOWN-ML-H-1720-4LG_A.png?v=636492819456730000"
            alt="no funciona"
          />

          <button>Comprar</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export { ShoppingCart };
