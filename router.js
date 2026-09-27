// router.js
// Responsabilidade única: decidir qual view renderizar de acordo com a rota (hash)
// e manter a navegação sincronizada com o Web Storage.
// É o único módulo que "orquestra" os demais.

import { salvarRota, recuperarRota } from "./storage.js";
import {
    renderizarInicio,
    renderizarProjetos,
    renderizarCadastro
} from "./views.js";
import { inicializarFormulario } from "./formulario.js";

const conteudo = document.getElementById("conteudo-principal");

// Único conjunto de rotas que a SPA de fato conhece. Qualquer outro hash
// (ex.: "#conteudo-principal" do link de skip, ou âncoras internas) deve
// ser ignorado pelo roteador — senão o link de acessibilidade "Pular para
// o conteúdo principal" apaga a view atual (bug corrigido via hotfix/
// link-pular-conteudo-reseta-formulario).
const ROTAS_VALIDAS = ["#inicio", "#projetos", "#cadastro"];

function navegar() {
    const rota = location.hash || "#inicio";

    if (!ROTAS_VALIDAS.includes(rota)) {
        return;
    }

    salvarRota(rota);

    if (rota === "#projetos") {
        renderizarProjetos(conteudo);
    } else if (rota === "#cadastro") {
        renderizarCadastro(conteudo);
        inicializarFormulario();
    } else {
        renderizarInicio(conteudo);
    }
}

export function iniciarRoteador() {
    window.addEventListener("hashchange", navegar);

    const ultimaRota = recuperarRota();

    if (ultimaRota && ultimaRota !== location.hash) {
        // Mudar o hash já dispara "hashchange" -> navegar()
        location.hash = ultimaRota;
    } else {
        // Hash igual ao salvo (ou inexistente) não dispara "hashchange" sozinho
        navegar();
    }
}
