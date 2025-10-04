import React from "react";
import CardComponent from "../components/CardComponent";

const HomeScreen = ({ heroes, searchTerm }) => {
  const filteredHeroes = heroes.filter(hero =>
    hero.superhero.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cards-container">
      {filteredHeroes.length > 0 ? (
        filteredHeroes.map((hero) => (
          <CardComponent key={hero.id} hero={hero} />
        ))
      ) : (
        <div style={{ padding: "20px", fontSize: "18px", textAlign: "center" }}>
          No se encontró ningún héroe con ese nombre.
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
