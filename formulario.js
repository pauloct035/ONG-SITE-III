// formulario.js
// Responsabilidade única: validar e tratar o envio do formulário de cadastro.
// Não sabe nada sobre roteamento, Web Storage ou templates de outras páginas.

export function inicializarFormulario() {
    const formulario = document.getElementById("formulario-cadastro");

    // Este módulo só faz sentido quando a view "cadastro" está na tela.
    if (!formulario) return;

    const campos = formulario.querySelectorAll("input, textarea");
    const mensagem = document.getElementById("mensagem-formulario");
    const botaoEnviar = document.getElementById("botao-enviar");

    function atualizarBotao() {
        botaoEnviar.disabled = !formulario.checkValidity();
    }

    campos.forEach(campo => {
        campo.addEventListener("input", () => {
            if (campo.checkValidity()) {
                campo.classList.add("campo-valido");
                campo.classList.remove("campo-invalido");
            } else {
                campo.classList.add("campo-invalido");
                campo.classList.remove("campo-valido");
            }
            atualizarBotao();
        });
    });

    atualizarBotao();

    formulario.addEventListener("submit", event => {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        mensagem.textContent = "Cadastro enviado com sucesso!";
        mensagem.className = "alerta sucesso";
        formulario.reset();

        campos.forEach(campo => {
            campo.classList.remove("campo-valido");
            campo.classList.remove("campo-invalido");
        });

        atualizarBotao();
    });
}
