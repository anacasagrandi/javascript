// Troca a imagem para (Velozes e Furiosos)


// Encontre o elemento <img> pelo atributo alt
// const imgElement = document.querySelector('img[alt="DOM"]');

// // Defina o caminho local da imagem
// // const caminhoLocal = 'img/A_Veloz.jpg';
// const caminhoLocal = 'img/B_Veloz.jpg';

// // Altere o atributo src do elemento <img> para o caminho local
// imgElement.setAttribute('src', caminhoLocal);

// ____________________________________________________________________________

/* Métodos/Funções de acesso e seleção

getElementById() -> seleciona um elemento pelo ID
querySelector() -> seleciona UM elemento de acordo com um seletor
querySelectorAll() -> seleciona VÁRIOS elementos de acordo com um seletor */

// ____________________________________________________________________________
// Modificando elementos


// 1ª Digitação (Aqui)
//selecionar pelo ID
const titulo = document.getElementById('titulo-principal');

//selecionar pela tag
const pagina = document.querySelector('body');

//selecionando todas as tag's h2
const subtitulo = document.querySelectorAll('h2');

//selecionando pela tag
const legenda = document.querySelector('figcaption');


// ____________________________________________________________________________

// Modificando elementos


// 2ª Digitação (Aqui)

//h1
titulo.textContent ="Olá Mundo";

//cor de fundo (body)
pagina.style.backgroundColor = "green";

//mudando o segundo h2
subtitulo[1].textContent="Full-Stack";

//mudando a legenda figcaption
legenda.innerHTML="<b>Veloz e furioso</b>";




// ____________________________________________________________________________

// CSS vis JS

// CSS do (H1)
titulo.style.textAlign = "center";
titulo.style.backgroundImage = 'linear-gradient(lightyellow, lightblue)';
titulo.style.color ="red";

// CSS do (H2)
const subtitulos = document.querySelectorAll('h2');

// Modifique a cor da fonte de todos os elementos <h2> para azul, por exemplo

// Sintaxe (Arrow Function)
subtitulos.forEach(subtitulo => {
  subtitulo.style.color = 'blue';
});

// Sintaxe For...of (Loop comum)
// for (const subtitulo of subtitulos) {
//     subtitulo.style.color = 'blue';
//   }


// ____________________________________________________________________________

// CSS vis JS (Tabela)

// Modificar o texto do <h3> "Editores"


// 3ª Digitação (Aqui)
const tituloEditores = document.querySelector('h3')

tituloEditores.textContent = 'Melhores Editores'
tituloEditores.style.color = 'orange';
tituloEditores.style.fontSize = '28px';

// Adicionar um novo editor à lista:


// 4ª Digitação (Aqui)
const listaEditores = document.querySelector('#lista-editores');
const novoEditor = document.createElement('li');
novoEditor.textContent = 'Sublime';
listaEditores.appendChild(novoEditor)

//akterando a cor do 3 item da lista
const terceiroItem = listaEditores.querySelectorAll('li')[2];
terceiroItem. style.color ='orange';


