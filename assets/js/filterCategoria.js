
const brasilCards = document.getElementById('brasilCards');
const cearaCards = document.getElementById('cearaCards');
const mundoCards = document.getElementById('mundoCards');
const cidadesCards = document.getElementById('cidadesCards');
const politicaCards = document.getElementById('politicaCards');
const automoveisCards = document.getElementById('automoveisCards');
const sociedadeCards = document.getElementById('sociedadeCards');
const gastronomiaCards = document.getElementById('gastronomiaCards');
const direitoCards = document.getElementById('direitoCards')


document.addEventListener("DOMContentLoaded", function() {
    function renderizarCardsCategorias(categoria) {

        const cardsFiltrados = noticias.filter(card => card.category.includes(categoria) || categoria === "todos");
    
        cardsFiltrados.forEach(card => {
            const cardElement = document.createElement("li");
            cardElement.classList = 'noticias-title cardsMain'
            const img = document.createElement('img') 
            const p = document.createElement('p')
            const span = document.createElement('span')
            const linkElement = document.createElement('a')
            linkElement.textContent = card.title;
            linkElement.href = "#";
            linkElement.addEventListener("click", function() {
                exibirCard(card)
            })
    
            img.src = card.img
            p.innerText = card.paragraph
            span.innerText = card.date
            cardElement.append(img, linkElement, span, p)
    
    
    
    
            if (card.category.includes("brasil")) {
                brasilCards.append(cardElement);
            }
    
            if (card.category.includes("ceara")) {
                cearaCards.appendChild(cardElement);
            }
    
            if (card.category.includes("mundo")) {
                mundoCards.appendChild(cardElement);
            }
    
            if (card.category.includes("politica")) {
                politicaCards.appendChild(cardElement);
            }
    
            if (card.category.includes("automveis")) {
                automoveisCards.appendChild(cardElement);
            }
    
            if (card.category.includes("sociedade")) {
                sociedadeCards.appendChild(cardElement);
            }
    
            if (card.category.includes("gastronomia")) {
                gastronomiaCards.appendChild(cardElement);
            }
    
            if (card.category.includes("direito")) {
                direitoCards.appendChild(cardElement);
            }
    
        });
    }
    function exibirCard(card) {
        const novaPagina = window.open();

        novaPagina.document.write(`<html>
            <head>
                <link rel="shortcut icon" href="assets/img/favicon.svg" type="image/x-icon">
        
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&display=swap" rel="stylesheet">
            
                <title>${card.title}</title>

                <link rel="stylesheet" href="index.css">
                <link rel="stylesheet" href="style/nav.css">
                <link rel="stylesheet" href="style/slider.css">
                <link rel="stylesheet" href="style/main.css">
                <link rel="stylesheet" href="style/noticiasmain.css">
                <link rel="stylesheet" href="style/footer.css">
                <link rel="stylesheet" href="style/mobile.css">
            </head>
            <body>
            <div class="container">
                <header>
                    <div class="flex-header">
                        <nav>
                            <div class="header-nav">
                                <a href="#">
                                    <img src="assets/img/facebook.png" alt="facebook">
                                </a>
                                <a href="#">
                                    <img src="assets/img/instagram.png" alt="instagram">
                                </a>
                                <a href="#">
                                    <img src="assets/img/twitter.png" alt="twitter">
                                </a>
                            </div>
                            <div>
                                
                            </div>
                            <div class="mobile-menu">
                                <img src="assets/img/menu.svg" alt="">
                            </div>
                            <!-- <div class="nav-header-desk">
                                <ul class="nav-list">
                                    <li><a href="#">Sobre</a></li>
                                    <li><a href="#">Parceiros</a></li>
                                    <li><a href="#">Fale Conosco</a></li>
                                </ul>
                            </div> -->
                        </nav>
                    </div>
                    <div class="logo">
                        <img src="assets/img/logo.png" alt="" width="300px">
                    </div>
                    <div class="search-nav">
                        <div class="category-link">
                            <div class="menu-search">
                                <img src="assets/img/menuwhite.svg" alt="">
                            </div>
                            <h3>MENU</h3>
                            <div class="list-search filtro">
                                
                                    <h3 onclick="filtrarCards('ceara')">CEARÁ</h3>
                
                                    <h3 onclick="filtrarCards('brasil')">BRASIL</h3>
                            
                                    <h3 onclick="filtrarCards('mundo')">MUNDO</h3>
                                
                                    <h3 onclick="filtrarCards('cidades')">CIDADES</h3>
                                
                                    <h3 onclick="filtrarCards('politica')">POLÍTICA</h3>
                                
                                    <h3 onclick="filtrarCards('automoveis')">AUTOMÓVEIS</h3>
                                
                                    <h3 onclick="filtrarCards('sociedade')">SOCIEDADE</h3>
                                
                                    <h3 onclick="filtrarCards('gastronomia')">GASTRONOMIA</h3>
                                
                            
                            </div>
                        </div>
                        <div class="img"></div>
                    </div>
                </header>
                    <div class="headerNoticiasCard">
                    <span>${card.category}</span>
                    <h1>${card.title}</h1>
                    <p>${card.paragraph}</p>
                    <span class="date">${card.date}</span>
                    </div>
                    <div class="mainNoticiasCard">
                    <p class="fisrtletter">${card.paragraph}</p>
                    <p>${card.paragraph2 ? card.paragraph2 : ''}</p>
                    <p>${card.paragraph3 ? card.paragraph3 : ''}</p>
                    <p>${card.paragraph4 ? card.paragraph4 : ''}</p>
                    <p>${card.paragraph5 ? card.paragraph5 : ''}</p>
                    <p>${card.paragraph6 ? card.paragraph6 : ''}</p>
                    <p>${card.paragraph7 ? card.paragraph7 : ''}</p>
                    <p>${card.paragraph8 ? card.paragraph8 : ''}</p>
                    
                    <img src="${card.img}">
                    </div>
                </div>
                <footer class="footer">
                <div class="container-footer">
                    <div class="footer-main">
                        <img src="assets/img/logo.png" alt="">
                        <a href="">Anucie aqui</a>
                        <span>TV Vale Ceará © Todos os direitos reservados - 2023</span>
                        <p>Desenvolvido por <a href="">@Suzana</a></p>
                    </div>
                </div>
            </footer>
            </body>
        </html>`);

    }
    
    
    
    renderizarCardsCategorias('brasil')
    renderizarCardsCategorias('mundo')
    renderizarCardsCategorias('ceara')
    renderizarCardsCategorias('cidade')
    renderizarCardsCategorias('politica')
    renderizarCardsCategorias('automoveis')
    renderizarCardsCategorias('sociedade')
    renderizarCardsCategorias('direito')
    renderizarCardsCategorias('gastronomia')
})





/* 

<ul id="cearaCards">
    <li class="noticias-title">
        <img src="https://www.revistaceara.com.br/wp-content/uploads/2023/01/E5412F10-B435-4D4F-9E4F-9F7FF0810472-256x167.jpeg" alt="">
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid, eos ratione ipsam autem id tempore ab tenetur fuga impedit minima cupiditate, a at vel? Tempore magni fuga nulla quam.</p>
        <span>20 de feveiro de 2023</span>
    </li>

*/