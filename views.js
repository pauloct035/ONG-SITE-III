export function renderizarInicio(conteudo) {
    conteudo.innerHTML = `
<section aria-labelledby="sobre-ong">
<h2 id="sobre-ong">Sobre a ONG</h2>
<p>A ONG atua em ações sociais para ajudar pessoas em situação de vulnerabilidade.</p>
<figure>
<img src="imagens/Ong.jpg" alt="Voluntários da ONG realizando uma ação social">
<figcaption>Ações sociais realizadas pela ONG.</figcaption>
</figure>
</section>

<section aria-labelledby="contato">
<h2 id="contato">Contato</h2>
<address>
<p>E-mail: <a href="mailto:contato@ongesperanca.org">contato@ongesperanca.org</a></p>
<p>Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a></p>
<p>Endereço: São Paulo - SP</p>
</address>
</section>`;
}

export function renderizarProjetos(conteudo) {
    conteudo.innerHTML = `
<section aria-labelledby="projetos-iniciativas">
<h2 id="projetos-iniciativas">Projetos e iniciativas</h2>
<p>Conheça as iniciativas da ONG e as formas de participação em ações de doação e voluntariado.</p>
</section>

<section aria-labelledby="doacoes">
<span class="badge">Doação</span>
<h2 id="doacoes">Campanhas de doação</h2>
<p>As campanhas de doação são uma forma de contribuir com as ações desenvolvidas pela organização.</p>
<h3>Como realizar uma doação</h3>
<p>As informações sobre as formas de contribuição devem ser apresentadas de maneira clara para facilitar a participação.</p>
</section>

<section aria-labelledby="voluntariado">
<span class="badge">Voluntariado</span>
<h2 id="voluntariado">Atividades de voluntariado</h2>
<p>O voluntariado permite que pessoas interessadas participem das ações realizadas pela organização.</p>
<h3>Como participar do voluntariado</h3>
<p>Os interessados podem utilizar a página de cadastro para demonstrar interesse em participar das atividades.</p>
</section>`;
}

export function renderizarCadastro(conteudo) {
    conteudo.innerHTML = `
<section aria-labelledby="titulo-cadastro">
<h2 id="titulo-cadastro">Formulário de cadastro</h2>
<p>Preencha os campos abaixo para demonstrar interesse em colaborar com a ONG.</p>

<form id="formulario-cadastro">
<fieldset>
<legend>Dados pessoais</legend>

<p>
<label for="nome">Nome completo</label>
<input type="text" id="nome" required>
</p>

<p>
<label for="email">E-mail</label>
<input type="email" id="email" required>
</p>

<p>
<label for="data_nascimento">Data de nascimento</label>
<input type="date" id="data_nascimento" required>
</p>

<p>
<label for="cpf">CPF</label>
<input type="text" id="cpf" required>
</p>

<p>
<label for="telefone">Telefone</label>
<input type="tel" id="telefone" required>
</p>
</fieldset>

<fieldset>
<legend>Endereço</legend>

<p>
<label for="endereco">Endereço</label>
<textarea id="endereco" rows="3" required></textarea>
</p>

<p>
<label for="cidade">Cidade</label>
<input type="text" id="cidade" required>
</p>

<p>
<label for="estado">Estado</label>
<input type="text" id="estado" maxlength="2" required>
</p>

<p>
<label for="cep">CEP</label>
<input type="text" id="cep" required>
</p>
</fieldset>

<button type="submit" id="botao-enviar" disabled>Enviar cadastro</button>
<div id="mensagem-formulario" role="status" aria-live="polite"></div>
</form>
</section>`;
}