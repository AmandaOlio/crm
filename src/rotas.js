import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Noticias from "./pages/noticias_pages/noticias_pages.jsx";
import Previsao from "./pages/previsao_pages/previsaopages.jsx";
import Negocio from "./pages/negocio/negocio"
import Atividades from "./pages/atividades/atividades";
import Tarefas from "./pages/tarefas_pages/tarefaspages.jsx";

function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element= {<Dashboard />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/noticias_pages" element= {< Noticias />} />
            <Route path="/previsoes" element= {< Previsao />} />
            <Route path="/negocio" element= {< Negocio />} />
            <Route path="/atividades" element= {< Atividades />} />
            <Route path="/tarefas" element= {< Tarefas />} />

            
        </Routes>
    </BrowserRouter>
}

export default Rotas;