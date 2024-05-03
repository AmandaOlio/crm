// Importa o componente Busca de um caminho relativo "../../components/busca/busca.jsx"
import Busca from "../../components/busca/busca.jsx";

// Importa o componente Menu de um caminho relativo "../../components/menu/menu.jsx"
import Menu from "../../components/menu/menu.jsx";

// Define a função componente Atividades
function Atividades() {
    return (
        <>
            {/* Início do contêiner fluído */}
            <div className="container-fluid">
                {/* Início da linha sem quebra de linha */}
                <div className="row flex-nowrap">
                    {/* Coluna automática com largura específica para dispositivos de diferentes tamanhos */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        {/* Renderiza o componente Menu com a propriedade 'page' configurada como 'negocio' */}
                        <Menu page="negocio" />
                    </div>

                    {/* Coluna com preenchimento na direção do eixo Y e margem à direita */}
                    <div className="col py-3 me-3">
                        {/* Div para espaçamento inferior */}
                        <div className="mb-5">
                            {/* Renderiza o componente Busca com a propriedade 'texto' configurada como 'Busca por Negócios' */}
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* Div principal */}
                        <div>
                            {/* Div flexível com espaçamento justificado e inferior */}
                            <div className="d-flex justify-content-between mb-3">
                                {/* Div flexível em linha */}
                                <div className="d-inline-flex">
                                    {/* Título da seção */}
                                    <h2>Atividades</h2>
                                </div>
                            </div>
                        </div>

                        {/* Div vazia para possível conteúdo futuro */}
                        <div className="row">
                            {/* Aqui você pode adicionar componentes ou conteúdo relacionado às atividades */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exporta o componente Atividades para ser utilizado em outros lugares
export default Atividades;