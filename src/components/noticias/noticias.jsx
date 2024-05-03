// Importa as bibliotecas necessárias do React e Axios
import React, { useState, useEffect } from "react";
import axios from "axios";

// Componente funcional Noticias
function Noticias() {
  // Estado para armazenar a lista de notícias
  const [noticias, setNoticias] = useState([]);
  
  // Chave da API para autenticação no News API
  const apiKey = "2164f3ac5e1a411a983ef4c13b4d300e";
  
  // URL da API que fornece as principais manchetes de notícias do Google News Brasil
  const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-11-08&sortBy=publishedAt&apiKey=${apiKey}`;

  // Efeito colateral para buscar notícias quando o componente é montado
  useEffect(() => {
    // Requisição GET para a API usando Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Atualiza o estado com os artigos de notícias recebidos da API
        setNoticias(response.data.articles);
      })
      .catch((error) => {
        // Exibe um erro no console caso haja problemas na requisição
        console.error("Erro ao buscar notícias:", error);
      });
  }, []); // O array vazio assegura que o efeito será executado apenas uma vez, equivalente ao componentDidMount no ciclo de vida de componentes de classe

  // Renderiza o componente Noticias
  return (
    <div>
      {/* Título do componente */}
      <h2>Notícias</h2>
      {/* Lista não ordenada de notícias com links para os artigos completos */}
      <ul className="fs-3">
        {/* Mapeia cada notícia e renderiza um item de lista com um link para o artigo */}
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

// Exporta o componente Noticias para ser utilizado em outros lugares
export default Noticias;