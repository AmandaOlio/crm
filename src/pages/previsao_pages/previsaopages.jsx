// Importa os componentes necessários de seus respectivos arquivos
import Busca from "../../components/busca/busca.jsx";
import Menu from "../../components/menu/menu.jsx";
import Previsao from "../../components/previsoes/previsoes.jsx";

// Define um componente chamado Previsao_pages
function Previsao_pages() {
    return (
        <>
            {/* Início do contêiner fluído */}
            <div className="container-fluid">
                {/* Início da linha sem quebra de linha */}
                <div className="row flex-nowrap">
                    {/* Coluna para o menu, ajustando o tamanho para diferentes tamanhos de tela */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        {/* Renderiza o componente Menu, passando a propriedade 'page' com o valor 'negocio' */}
                        <Menu page="negocio" />
                    </div>

                    {/* Coluna principal com espaçamento superior, direito e inferior */}
                    <div className="col py-3 me-3">
                        {/* Div para espaçamento inferior */}
                        <div className="mb-5">
                            {/* Renderiza o componente Busca, passando a propriedade 'texto' com o valor 'Busca por Negócios' */}
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* Div principal */}
                        <div>
                            {/* Div flexível com espaçamento entre seus elementos */}
                            <div className="d-flex justify-content-between mb-3">
                                {/* Div flexível em linha */}
                                <div className="d-inline-flex">
                                    {/* Renderiza o componente Previsao */}
                                    <Previsao />
                                </div>
                            </div>
                        </div>

                        {/* Row vazia */}
                        <div className="row"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exporta o componente Previsao_pages para ser utilizado em outros arquivos
export default Previsao_pages;