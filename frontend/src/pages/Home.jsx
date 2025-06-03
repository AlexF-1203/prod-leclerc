import { useState, useEffect } from "react";
import api from "../api";
import "../styles/Home.css";

function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    api.get("http://localhost:8000/api/user/")
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération du nom d'utilisateur:", err);
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="welcome-message">Bienvenue {username ? username : "Utilisateur"}</h1>
      <p className="welcome-text">Nous sommes heureux de vous voir ici.</p>
    </div>
  );
}

export default Home;
