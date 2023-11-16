//seleciona elemento html com o id 'inputBox' e armazena-o na varíavel 'input'.
let input = document.getElementById('inputBox');

//seleciona todos os elementos html do tipo 'button' e armazena-os em 'buttons' 
let buttons = document.querySelectorAll('button');

//inicializa uma string vazia p armazenar a entrada do usuário.
let string = "";

//converte a coleção de botoes em um array p que posssamos percorrer sobre eles.
let arr = Array.from(buttons);

//percorre sibre cada botao do array 'arr'.
arr.forEach(button => {
    //adiciona um ouvinte de eventos de clique a cada botão.
    button.addEventListener('click', (e) => {
        //verifica se o texto dentro do botao cicado é '='.
        if (e.target.innerHTML == '=') {
            //a funcao eval() é uma função JavaScript q avalia e executa dinamicamente o código. Quando a linha é executada, o JavaScript interpreta o conteúdo de string como uma expressão 
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})