// Definição do componente funcional Indicador
function Indicador(props) {
    // O componente retorna uma div com a classe "card"
    return (
        <div className="card">
            {/* Div para o cabeçalho do card com a classe "card-header" */}
            <div className="card-header">
                {/* Exibe o título recebido como propriedade */}
                {props.titulo}
            </div>
            {/* Div para o corpo do card com a classe "card-body" e alinhamento centralizado */}
            <div className="card-body text-center">
                {/* Título secundário do card exibindo o valor recebido como propriedade */}
                <h5 className="card-title">{props.valor}</h5>
                {/* Parágrafo no corpo do card exibindo o rodapé recebido como propriedade */}
                <p className="card-text">{props.rodape}</p>
            </div>
        </div>
    );
}

// Exporta o componente Indicador para ser utilizado em outros arquivos
export default Indicador;
