import React, { useState, useEffect } from "react";
import '../assets/styles/characters.css'


const Characters = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <h2 className="title">Characters</h2>
      <section className="cards">
        {
          personajes.map( personaje =>(
            <div className="card" key={personaje.id}>
              <img src={personaje.image} alt={personaje.name} />
              <div className="card__content">
                <h3 className="card__name">{personaje.name}</h3>
                <p>{personaje.species}</p>
                <p>{personaje.status}</p>
              </div>
            </div>
          ))
        }
      </section>
    </main>
  );
};

export default Characters;
