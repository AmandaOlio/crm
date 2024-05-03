import React, { useState, useEffect } from "react";
import axios from "axios";

const Previsao = () => {
  const [previsao, setPrevisao] = useState(null);
  const apiKey = "3c4c8a294f5a02cc85d38210d1432d6a";

  useEffect(() => {
    const cidade = "Votuporanga";
    const pais = "br";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setPrevisao(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar previsão do tempo:", error);
      });
  }, []);

  // Função para converter Kelvin para Celsius
  const toCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  // Função para traduzir a descrição da condição climática
  const traduzirCondicao = (descricao) => {
    const traducoes = {
      clear: "Limpo",
      clouds: "Nublado",
      rain: "Chuva",
      "broken clouds": "Parcialmente nublado",
      "scattered clouds": "Nuvens dispersas",
      "few clouds": "Poucas nuvens",
      "overcast clouds": "Nublado",
    };

    return traducoes[descricao] || descricao;
  };

  if (!previsao) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <p className="fs-3">Cidade: {previsao.name}</p>
      {/* Convertendo Kelvin para Celsius antes de exibir */}
      <p className="fs-3">Temperatura: {toCelsius(previsao.main.temp).toFixed(2)} °C</p>
      {/* Traduzindo a descrição da condição */}
      <p className="fs-3">Condição: {traduzirCondicao(previsao.weather[0].description)}</p>
    </div>
  );
};

export default Previsao;