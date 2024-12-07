// // Seleciona todos os itens
const items = document.querySelectorAll('.item');
let currentIndex = 0; // Índice do item atualmente ativo

// Função para atualizar o item ativo
function updateActiveItem(newIndex) {
    // Remove a classe 'active' de todos os itens
    items.forEach(item => item.classList.remove('active'));
    // Adiciona a classe 'active' ao novo item
    items[newIndex].classList.add('active');
}

// Função para ir para o próximo item
function proximo() {
    // Atualiza o índice para o próximo item, voltando ao início se estiver no último
    currentIndex = (currentIndex + 1) % items.length;
    updateActiveItem(currentIndex);
}

// Função para ir para o item anterior
function volta() {
    // Atualiza o índice para o item anterior, indo para o último se estiver no primeiro
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateActiveItem(currentIndex);
}

// Event listeners para os botões
document.getElementById('seta-dir').addEventListener('click', proximo);
document.getElementById('seta-esq').addEventListener('click', volta);
