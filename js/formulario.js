const formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nomeUsuario = document.getElementById('nome').value;
    let emailUsuario = document.getElementById('email').value;
    console.log(nomeUsuario, emailUsuario);
    let dados = {
        nomeUsuario,
        emailUsuario,
    }
    let convertData = JSON.stringify(dados);

    localStorage.setItem('lead', convertData)
    formulario.reset();
    Swal.fire('Dados cadastrados com sucesso!')

})
