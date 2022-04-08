import React from "react";
const Card = ({ name, lastName, email, phone }) => {
  return (
    <div className="col-span-4 px-3 py-2 shadow-md">
      <img src="imagen large" alt="" className="mx-auto" />
      <h1 className=" my-2 text-lg font-semibold">
        Nombre: {name} Apellido: {lastName}
      </h1>
      <p className=" my-1 text-gray-600">Direccion de correo: {email}</p>
      <p className="my-1 text-gray-600">Numero de telefono: {phone}</p>
    </div>
  );
};

export default Card;
