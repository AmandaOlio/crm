// Importando os componentes necessários do diretório correspondente
import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import Indicador from "../../components/indicador/indicador.jsx";
import Grafico from "../../components/grafico/grafico.jsx";

// Definindo a função do componente Dashboard
function Dashboard() {
    return (
        <>
            {/* Início do container principal da página */}
            <div className="container-fluid">
                {/* Início da linha flexível, sem quebra de linha */}
                <div className="row flex-nowrap">
                    {/* Coluna de menu com tamanho variável em diferentes breakpoints */}
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                        <Menu page="dashboard" />
                    </div>

                    {/* Coluna principal com espaço à direita e padding superior */}
                    <div className="col py-3 me-3">
                        {/* Bloco de busca com um texto específico */}
                        <div className="mb-5">
                            <Busca texto="Busca por Negócios" />
                        </div>

                        {/* Cabeçalho da página com título e botão de atualização */}
                        <div className="d-flex justify-content-between">
                            <h1>Dashboard...</h1>
                            <button className="btn btn-primary ms-4">Atualizar</button>
                        </div>

                        {/* Início de uma linha para os indicadores e gráficos */}
                        <div className="row">
                            {/* Coluna para o indicador de Negócios do Mês */}
                            <div className="col-md-3 mt-4">
                                <Indicador
                                    titulo="Negócios do Mês"
                                    valor="R$19.000,00"
                                    rodape="12 atividades"
                                />
                            </div>

                            {/* Coluna para o indicador de Atividades para Hoje */}
                            <div className="col-md-3 mt-4">
                                <Indicador
                                    titulo="Atividades para Hoje"
                                    valor="6 atividades"
                                    rodape="R$3.150,00"
                                />
                            </div>

                            {/* Coluna para o gráfico de Vendas Anual */}
                            <div className="col-md-12 mt-5">
                                <Grafico titulo="Vendas Anual" chartType="Line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fim do container principal da página */}
        </>
    );
}

// Exportando o componente Dashboard
export default Dashboard;