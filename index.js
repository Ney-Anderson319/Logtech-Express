function fazerLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    
    // Validação simples (você pode adicionar sua própria lógica)
    if (usuario.trim() == '' && senha.trim() == '') {
        // Nome e usuário não colocados
        alert("Por favor, preencha Usuário e Senha!");
    } else if (usuario.trim() == 'Admin1' && senha.trim() == '12345678') {
        document.getElementById('nomeUsuario').textContent = usuario;
        mudarPagina('paginaPrin');
    } else {
        // Mostra a mensagem de erro
        alert("Esta conta não existe, Crie uma!");
    }
}

function fazerLogout() {
    // Limpar campos
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
    
    // Volta para login
    mudarPagina('paginaLogin');
}

function semConta(){
    mudarPagina('semConta')
}

function validarConta(){
    const email = document.getElementById('email').value;
    function validarEmail(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const usu1 = document.getElementById('usu1').value;
    const idade = document.getElementById('idade').value;
    const senha1 = document.getElementById('senha1').value;
    const senha2 = document.getElementById('senha2').value;

    //Verificando se é maior de idade
    const anoAtual = new Date().getFullYear();
    const anoNascimento = new Date(idade).getFullYear();
    const idadeUsu = anoAtual - anoNascimento;

    //Verificando informações
    if (validarEmail(email) && idadeUsu >=18 && senha1 == senha2){
        document.getElementById('nomeUsuario').textContent = usu1;
        document.getElementById('email').textContent = email;
        mudarPagina('paginaPrin');

    //Se o Email estiver errado
    } else if (!validarEmail(email) && idadeUsu >= 18 && senha1 == senha2){
        alert("Email não tem o formato válido");

    //Se o Email estiver errado e o usuário for menor de idade
    } else if (!validarEmail(email) && idadeUsu < 18 && senha1 == senha2){
        alert("Email não tem o formato válido e você é menor de idade");

    //Se o Email e a senha estiverem errados
    } else if (!validarEmail(email) && idadeUsu >= 18 && senha1 != senha2){
        alert("Email não tem o formato válido e a senha não está confirmada");

    //Se o usuário for menor de idade
    } else if (validarEmail(email) && idadeUsu < 18 && senha1 == senha2){
        alert("Você é menor de idade; Infelizmente não poderá entrar");

    //Se o usuário for menor de idade e a senha estiver errada
    } else if (validarEmail(email) && idadeUsu < 18 && senha1 != senha2){
        alert("Você é menor de idade e a senha não está confirmada");

    //Se a senha estiver errada
    } else if (validarEmail(email) && idadeUsu >= 18 && senha1 != senha2){
        alert("A Senha não está confirmada");
        
    //Se tudo estiver errado
    } else {
        alert("As informações a seguir não condizem com as regras para entrar no site: Email no formato válido; Ter pelo Menos 18 anos; Senhas confirmadas!");
    }
}

function mudarCarrinho(){
    mudarPagina('carrinho');
}

function mudarVender(){
    mudarPagina('vender');
}

function mudarPerfil(){
    mudarPagina('perfilUsu');
}

function mudarProdutos(){
    mudarPagina('paginaPrin');
}

function minhasInf(){
    mudarPagina('informacoes');
}

function mudarPagina(idPagina) {
    // Remover classe "ativa" de todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(p => p.classList.remove('ativa'));
    
    // Adicionar classe 'ativa' na página desejada
    document.getElementById(idPagina).classList.add('ativa');
}

// Permitir login com Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && document.getElementById('paginaLogin').classList.contains('ativa')) {
        fazerLogin();
    }
});