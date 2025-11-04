import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCharacters } from "../services/characterService";
import "../styles/Home.css";

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters({ page: 1 });
        setCharacters(data.results.slice(0, 8));
      } catch (error) {
        console.error("Error al obtener personajes:", error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Explora el multiverso de Rick & Morty</h1>
          <p>Conoce todos los personajes y lugares de la serie</p>
          <button onClick={() => navigate("/lista")}>Ver personajes</button>
        </div>
      </section>

      <section className="featured-section">
        <h2>Personajes Destacados</h2>

        <div className="character-grid">
          {characters.map((char) => (
            <div key={char.id} className="character-card">
              <img src={char.image} alt={char.name} />
              <div className="character-info">
                <h3>{char.name}</h3>
                <p>
                  {char.species}, {char.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="button-container">
          <button onClick={() => navigate("/lista")}>
            Ver todos los personajes
          </button>
        </div>
      </section>
    </div>
  );
}
