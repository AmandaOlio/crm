// Importa o componente Chart da biblioteca react-google-charts
import { Chart } from "react-google-charts";

// Define a função Grafico que recebe props como parâmetro
function Grafico(props) {
  // Dados para o gráfico, uma matriz bidimensional onde cada linha representa um ponto no gráfico
  const dados = [
    ["Mês", "Valor"],
    ["01", 1000],
    ["02", 1170],
    ["03", 660],
    ["04", 1030],
    ["05", 209],
    ["06", 1200],
  ];

  // Opções de configuração para o gráfico, incluindo a posição da legenda com base na propriedade "legenda" passada como props
  const options = {
    legend: props.legenda ? {} : { position: "none" },
  };

  // Retorna a estrutura do componente
  return (
    <div className="card">
      <div className="card-header">
        {/* Renderiza o título do gráfico com base na propriedade "titulo" passada como props */}
        {props.titulo}
      </div>
      <div className="card-boby text-center">
        {/* Renderiza o componente Chart com as propriedades e dados passados como props */}
        <Chart
          chartType={props.chartType}
          data={dados}
          width="100%"
          height="350px"
          options={options}
          legendToggle={true}
        />
      </div>
    </div>
  );
}

// Exporta o componente Grafico como componente padrão para ser utilizado em outros arquivos
export default Grafico;