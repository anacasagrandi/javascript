document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador
let nomes = [
    "Ana Beatriz", "Gabriel", "Giulia", "Lara", "Matheus"
];

let tamanho = nomes.length;

for (let i = 0; i < tamanho; i++) {
    document.write(` <strong>${nomes[i]}</strong><br>`);
}