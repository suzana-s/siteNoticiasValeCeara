const cardsContainer = document.getElementById("cardsContainer");

// Função para renderizar os cards
function renderizarCards(categoria) {
    cardsContainer.innerHTML = "";
    const cardsFiltrados = noticias.filter(card => card.category.includes(categoria) || categoria === "todos");
    cardsFiltrados.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.className = "card noticias-title";
        cardElement.innerHTML = `
            <div>
                <img src="${card.img}"
            </div>
            <div>
                <h3>${card.title}</h3>
                <p>${card.paragraph}</p>
            </div>
        `;
        cardsContainer.appendChild(cardElement);
    });
}

// Função para filtrar os cards por categoria
function filtrarCards(categoria) {
    renderizarCards(categoria);
}

