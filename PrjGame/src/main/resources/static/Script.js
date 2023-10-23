document.getElementById('cadastroForm').addEventListener('submit', cadastrarJogo);
function cadastrarJogo(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const plataform = document.getElementById('plataform').value;
    fetch('http://localhost:8080/jogos',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, plataform }),
    })
        .then(response => response.json())
        .then(data =>{
            alert('Jogo cadastrado com sucesso!');
            document.getElementById('cadastroForm').reset();
        })
        .catch(error =>{
            console.error('Erro ao cadastrar jogo:', error);
        })
}
function pesquisarJogo() {
    const searchId = document.getElementById('searchId').value;
    fetch(`http://localhost:8080/jogos/${searchId}`)
        .then(response => {
            if(response.status === 404) {
                return Promise.reject(`Jogo não encontrado`);
            }
            return response.json();
        })
        .then(data => {
            const resultadoPesquisa = document.getElementById('resultadoPesquisa');
            resultadoPesquisa.innerHTML = `
                <h3>ID: ${data.id}</h3>
                <p>Nome: ${data.name}</p>
                <p>Plataforma: ${data.plataform}</p>           
            `;
        })
        .catch(error => {
            console.error('Erro ao pesquisar jogo:', error);
            const resultadoPesquisa = document.getElementById('resultadoPesquisa');
            resultadoPesquisa.innerHTML = 'Jogo não encontrado.';
        });
    }