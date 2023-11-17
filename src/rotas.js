import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Noticias from "./components/noticias/noticia";

function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element= {<Dashboard />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/noticias" element= {<Noticias />} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;