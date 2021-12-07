const processar = async (event) => {
    event.preventDefault();

    // Obter valores digitados (ENTRADA)
    const campoNome = document.querySelector('#nome');
    const campoSobrenome = document.querySelector('#sobrenome');

    const nome = campoNome.value;
    const sobrenome = campoSobrenome.value;

    // Realizar a ação (PROCESSAMENTO)
    const dadosAEnviar = { nome, sobrenome };

    const response = await fetch('/Nome', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosAEnviar)
    });

    const result = await response.json();
    
    // const nomeCompleto = result.nomeCompleto;
    // const nomeCatalogo = result.nomeCatalogo;

    const { nomeCompleto, nomeCatalogo } = result;

    // Exibir os resultados (SAÍDA)
    const mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = `
        <div>Nome completo = ${nomeCompleto}</div>
        <div>Nome catálogo = ${nomeCatalogo}</div>
    `;
};

document.addEventListener('DOMContentLoaded', () => {
    const botaoProcessar = document.querySelector('#processar');
    botaoProcessar.addEventListener('click', processar);
});