const form = document.getElementById('form-contato');
const confirmado = '<img src="./images/confir-removebg-preview (1).png" alt="Simbolo de confirmação"/>'
const atividadenome = [];
const atividadetel = [];
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault()

    validacampos();
    
})

function validacampos() {
        const inputnome = document.getElementById('nome');
        const inputtel = document.getElementById('telefone');

        if(atividadenome.includes(inputnome.value)) {
            alert(`O nome ${inputnome.value} já esta cadastrado em nossos sistemas`)

        } else {
            atividadenome.push(inputnome.value);
            atividadetel.push(inputtel.value);
    
                let linha = '<tr>';
                linha += `<td>${inputnome.value}</td>`;
                linha += `<td>${inputtel.value}</td>`;
                linha += `<td>${confirmado}</td>`;
                linha += '</tr>';
        
                linhas += linha;

        }
            const corpotabela = document.querySelector('tbody');
            corpotabela.innerHTML = linhas;

        inputnome = '';
        inputtel = '';

}

