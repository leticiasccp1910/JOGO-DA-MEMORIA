let cartas = ['sccp', '1910', 'YURI', 'ROMERO', 'sccp', '1910', 'YURI', 'ROMERO'];
cartas = cartas.sort(() => 0.5 - Math.random()); // Embaralhar as cartas
let cartasViradas = [];
let paresEncontrados = 0;

// Criar o tabuleiro
const tabuleiroDiv = document.querySelector('.tabuleiro');
cartas.forEach((_, indice) => {
    const cartaDiv = document.createElement('div');
    cartaDiv.classList.add('carta');
    cartaDiv.dataset.index = indice;
    cartaDiv.innerText = '?'; // Mostra a carta oculta
    cartaDiv.addEventListener('click', () => virarCarta(indice, cartaDiv));
    tabuleiroDiv.appendChild(cartaDiv);
});

// Função para virar carta
function virarCarta(indice, elementoCarta) {
    if (cartasViradas.length < 2 && !elementoCarta.classList.contains('virada')) {
        elementoCarta.classList.add('virada');
        elementoCarta.innerText = cartas[indice];
        cartasViradas.push({ indice, elementoCarta });
        
        if (cartasViradas.length === 2) {
            const [carta1, carta2] = cartasViradas;
            if (cartas[carta1.indice] === cartas[carta2.indice]) {
                paresEncontrados++;
                console.log("Par encontrado!");
                cartasViradas = [];
            } else {
                console.log("Tente novamente.");
                setTimeout(() => {
                    carta1.elementoCarta.classList.remove('virada');
                    carta1.elementoCarta.innerText = '?';
                    carta2.elementoCarta.classList.remove('virada');
                    carta2.elementoCarta.innerText = '?';
                    cartasViradas = [];
                }, 1000); // Esperar 1 segundo antes de virar de volta
            }
        }
    }
}