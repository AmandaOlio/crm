// Importa o componente de busca de um diretório relativo aos arquivos atuais.
import Busca from "../../components/busca/busca.jsx";

// Importa o componente de menu de um diretório relativo aos arquivos atuais.
import Menu from "../../components/menu/menu.jsx";

// Importa o componente de notícias de um diretório relativo aos arquivos atuais.
import Noticias from "../../components/noticias/noticias.jsx";

// Define uma função chamada Noticias_pages que representa a página de notícias.
function Noticias_pages() {
    return <>
        {/* Início da estrutura da página usando classes do Bootstrap para layout responsivo. */}
        <div className="container-fluid">
            <div className="row flex-nowrap">
                
                {/* Coluna do menu com larguras diferentes para diferentes tamanhos de tela. */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                    <Menu page="negocio" /> {/* Renderiza o componente de menu com a propriedade "page" definida como "negocio". */}
                </div>

                {/* Coluna principal que ocupa o restante da tela. */}
                <div className="col py-3 me-3">
                    <div className="mb-5">
                        {/* Componente de busca com um texto específico. */}
                        <Busca texto="Busca por Negócios" />
                    </div>

                    <div>
                        <div className="d-flex justify-content-between mb-3">
                            <div className="d-inline-flex">
                                {/* Componente de notícias (possivelmente exibe notícias específicas). */}
                                <Noticias />
                            </div>
                        </div>
                    </div>

                    {/* Espaço reservado para possíveis elementos futuros na página. */}
                    <div className="row">

                    </div>
                </div>
            </div>
        </div>
    </>;
}

// Exporta o componente Noticias_pages para ser usado em outros lugares.
export default Noticias_pages;