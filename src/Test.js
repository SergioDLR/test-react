import React, { useState, useEffect } from "react";
import Card from "./Card";

const Test = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    //Async function realiza fetch y lo guarda en el hook userData
    async function getUsers() {
      let users = await fetch("https://randomuser.me/api/?results=9&exc=gender,location,login,dob,registered,id");
      let data = await users.json();
      setUserData(data.results);
    }
    getUsers();
  }, []);

  const RenderUsers = () => {
    //Mapea los elementos devueltos por getUsers() en el componente card
    if (userData.length <= 0) return <h1>Loading...</h1>;
    else
      return userData.map((user, index) => (
        <Card key={index} name={user.name.first} lastName={user.name.last} phone={user.phone} email={user.email} />
      ));
  };

  return <div className="grid grid-cols-12 gap-x-4 gap-y-8 p-2">{<RenderUsers />}</div>;
};

export default Test;
