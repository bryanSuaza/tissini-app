import React from 'react'

const Carrito = () => {
  return (
    <div className="p-4 gradient">
      <h2>Este es el carrito de compras</h2>
      <table className="table table-striped bg-transparent">
          <thead>
            <tr>
            <th>Producto</th>
            <th>Valor</th>
            <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Blusa marinera</td>
            <td>$25.000</td>
            <td>Blusa fresca para el verano</td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}

export default Carrito;
