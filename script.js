// script.js
// Ponto de entrada da aplicação (bootstrap).
// Não contém regra de negócio: apenas inicializa o roteador quando o DOM está pronto.

import { iniciarRoteador } from "./router.js";

window.addEventListener("DOMContentLoaded", iniciarRoteador);
