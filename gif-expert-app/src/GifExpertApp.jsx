import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Demon Slayer",
    "Dragon Ball",
  ]);

  return (
    <>
      <h1>Hola mundo</h1>
      {categories.map((categoria, indice) => (
        <p key={indice}>{categoria}</p>
      ))}
    </>
  );
};
