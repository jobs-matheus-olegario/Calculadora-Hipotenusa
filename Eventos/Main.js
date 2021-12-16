// Criando as variáveis para manipular os inputs;

let $form = document.querySelector('form');
let $adjacente = document.querySelector('#adjacente');
let $oposto = document.querySelector('#oposto');
let $hipotenusa = document.querySelector('#hipotenusa');

// Função para calcular a hipotenusa;

function hipotenusa() {
    let adjacente = $adjacente.value;
    let oposto = $oposto.value;


// Verificando campos vazios dos inputs e emitindo mensagens de alerta;

    if (!oposto) {
        alert('Ops! o campo do "Cateto Oposto" está vazio!');
    } else if (!adjacente) {
        alert('Ops! o campo do "Cateto Adjacente" está vazio!');
    } else if (adjacente <= 0 || oposto <= 0) {
        alert('Atenção! Digite valores maiores que 0!');
    } else {
        $hipotenusa.value = Math.hypot(adjacente, !oposto).toFixed(2); // Cálculo da hipotenusa;
    }
}

// Adicionando evento pós clik do botão resultado da hipotenusa;

$form.addEventListener('submit', function (event) {
    event.preventDefault();
    hipotenusa();
});


// Animação dos inputs do formulário;

const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});