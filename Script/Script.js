document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    window.location.href = `thanksPage.html?nome=${encodeURIComponent(nome)}`;
});