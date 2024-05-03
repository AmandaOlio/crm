// Importa o componente 'Busca' de um arquivo específico
import Busca from "../../components/busca/busca.jsx";

// Importa o componente 'Menu' de um arquivo específico
import Menu from "../../components/menu/menu.jsx";

// Define o componente 'Negocio'
function Negocio() {
    // Retorna um fragmento contendo a estrutura JSX do componente
    return <>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                {/* Coluna lateral esquerda */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    {/* Renderiza o componente 'Menu' passando a propriedade 'page' como 'negocio' */}
                    <Menu page="negocio" />
                </div>

                {/* Coluna principal direita */}
                <div className="col py-3 me-3">
                    <div className="mb-5">
                        {/* Renderiza o componente 'Busca' passando a propriedade 'texto' como 'Busca por Negócios' */}
                        <Busca texto="Busca por Negócios" />
                    </div>

                    {/* Bloco principal com fundo branco, borda arredondada e preenchimento */}
                    <div className="bg-white p-4 rounded-4 border">
                        {/* Seção com título, um select e um botão */}
                        <div className="d-flex justify-content-between mb-3">
                            {/* Título 'Negocios...' */}
                            <div className="d-inline-flex">
                                <h2>Negocios...</h2>

                                {/* Dropdown (select) para seleção de etapa */}
                                <div className="form-control ms-4">
                                    <select name="etapa" id="etapa">
                                        <option value="0">Etapa</option>
                                        <option value="Prospecção">Prospecção</option>
                                        <option value="Proposta">Proposta</option>
                                    </select>
                                </div>
                            </div>

                            {/* Botão para adicionar novo negócio */}
                            <button className="btn btn-primary ms-4 ms-2"><i class="bi bi-plus-lg me-2"></i>Novo Negócio</button>
                        </div>
                    </div>

                    {/* Área para exibir os negócios */}
                    <div className="row">
                        {/* Conteúdo dos negócios seria renderizado aqui */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

// Exporta o componente 'Negocio' como o export padrão do arquivo
export default Negocio;