import React, { useState, useEffect } from "react";
import axios from "axios";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const apiKey = "3b0559a415074856b6bd2ef91206dea4";
  const apiUrl = `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNoticias(response.data.articles);
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias:", error);
      });
  }, []);

  return (
    <div>
      <h2>Notícias</h2>
      <ul className="fs-3">
        {noticias.map((noticia, index) => (
          <li key={index}>
            <a href={noticia.url} target="_blank" rel="noopener noreferrer">
              {noticia.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Noticias;