import React from "react";
const Card = () => {
 

  return  (
    <div className="col-span-4 px-3 py-2 shadow-md">
      <img src="imagen large" alt="" className="mx-auto" />
      <h1 className=" my-2 text-lg font-semibold">
       Name and last name
      </h1>
      <p className=" my-1 text-gray-600">email</p>
      <p className="my-1 text-gray-600">phone</p>
    </div>
  )
};

export default Card;
