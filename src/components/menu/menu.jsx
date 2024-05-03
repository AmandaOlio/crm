import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from"../../assets/logo1.png";

// Componente de Menu
function Menu(props) {
    // Definindo classes de estilo para os links
    const linkBlue = "nav-link align-middle px-0";
    const linkBlack = "nav-link align-middle px-0 link-secondary";

    // Retorno do componente
    return (
        <>
            {/* Contêiner do menu */}
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                
                {/* Link para a página inicial */}
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">
                        {/* Exibição do logo */}
                        <img src={logo} className="img-logo" alt="Logo" />
                    </span>
                </a>

                {/* Lista de links de navegação */}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                    {/* Link para a página de Dashboard */}
                    <li className="nav-item">
                        <Link to="/dashboard" className={props.page === "dashboard" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>

                    {/* Link para a página de Negócios */}
                    <li className="nav-item">
                        <Link to="/negocio" className={props.page === "negocio" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Negócio</span>
                        </Link>
                    </li>

                    {/* Link para a página de Notícias */}
                    <li className="nav-item">
                        <Link to="/noticias_pages" className={props.page === "noticias_page" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Notícias</span>
                        </Link>
                    </li>

                    {/* Link para a página de Previsão */}
                    <li className="nav-item">
                        <Link to="/previsoes" className={props.page === "previsoes" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Previsoes</span>
                        </Link>
                    </li>

                    {/* Link para a página de Atividades */}
                    <li className="nav-item">
                        <Link to="/atividades" className={props.page === "atividades" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Atividades</span>
                        </Link>
                    </li>

                     {/* Link para a página de Tarefas */}
                     <li className="nav-item">
                        <Link to="/tarefas" className={props.page === "tarefas" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Tarefas</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
    );
}

// Exporta o componente Menu
export default Menu;

