const noticiasSlider = document.querySelector('.slide-track')


function renderNoticiasSlides() {
    noticias.map(e => {
        /* 
        
            const dataPublicacao = new Date(card.dataPublicacao);
            const dataAtual = new Date();
            const diferencaEmMilissegundos = dataAtual - dataPublicacao;
            const segundosEmUmDia = 86400;
            const segundosEmUmaSemana = 604800;
            const segundosEmUmMes = 2592000;
            
            if (diferencaEmMilissegundos < segundosEmUmDia) {
                card.tempoDecorrido = `Postado há ${Math.floor(diferencaEmMilissegundos/1000/60)} minutos`;
            } else if (diferencaEmMilissegundos < segundosEmUmaSemana) {
                card.tempoDecorrido = `Postado há ${Math.floor(diferencaEmMilissegundos/1000/60/60/24)} dias`;
            } else if (diferencaEmMilissegundos < segundosEmUmMes) {
                card.tempoDecorrido = `Postado há ${Math.floor(diferencaEmMilissegundos/1000/60/60/24/7)} semanas`;
            } else {
                card.tempoDecorrido = `Postado há ${Math.floor(diferencaEmMilissegundos/1000/60/60/24/30)} meses`;
            }
            });

            // Ordena o array DATA em ordem decrescente com base na propriedade tempoDecorrido
            DATA.sort((cardA, cardB) => {
            const dataPublicacaoA = new Date(cardA.dataPublicacao);
            const dataPublicacaoB = new Date(cardB.dataPublicacao);
            const diferencaEmMilissegundosA = new Date() - dataPublicacaoA;
            const diferencaEmMilissegundosB = new Date() - dataPublicacaoB;
            return diferencaEmMilissegundosB - diferencaEmMilissegundosA;
            });

            // Renderiza os cards no HTML
            const cardsContainer = document.querySelector('#cards-container');

        */
         
        const dataPublicacao = new Date(e.dateRender);
        const dataAtual = new Date();
        const diferencaEmMilissegundos = dataAtual - dataPublicacao;
        const segundosEmUmDia = 86400;
        const segundosEmUmaSemana = 604800;
        const segundosEmUmMes = 2592000;
        
        if (diferencaEmMilissegundos < segundosEmUmDia) {
            e.dateRender = `${Math.floor(diferencaEmMilissegundos/1000/60)} minutos atrás `;
        } else if (diferencaEmMilissegundos < segundosEmUmaSemana) {
            e.dateRender = `${Math.floor(diferencaEmMilissegundos/1000/60/60/24)} dias atrás `;
        } else if (diferencaEmMilissegundos < segundosEmUmMes) {
            e.dateRender = `${Math.floor(diferencaEmMilissegundos/1000/60/60/24/7)} semanas atrás `;
        } else {
            e.dateRender = `${Math.floor(diferencaEmMilissegundos/1000/60/60/24/30)} meses atrás `;
        }    

        noticias.sort((cardA, cardB) => {
            const dataPublicacaoA = new Date(cardA.dataPublicacao);
            const dataPublicacaoB = new Date(cardB.dataPublicacao);
            const diferencaEmMilissegundosA = new Date() - dataPublicacaoA;
            const diferencaEmMilissegundosB = new Date() - dataPublicacaoB;
            return diferencaEmMilissegundosB - diferencaEmMilissegundosA;
          });

        noticiasSlider.insertAdjacentHTML("beforeend", `
            <div class="slide-info">
                <h5>${e.dateRender}</h5>
                <p>${e.title}</p>
            </div>
        `)

    })

}



renderNoticiasSlides()


function renderUltimasNoticias(array) {
    const ultimasNoicias = document.querySelector('.ultimas-noticias')
    array.map((e) => {

        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const a = document.createElement('a')

        a.innerText = e.title

        h3.append(a)
        li.append(h3)
        ul.append(li)

        ultimasNoicias.append(ul)

        a.addEventListener('click', ()=>{
            exibirCard(e)
        })

    })
    

}

renderUltimasNoticias(noticias)


// Array de slides
  
  const sliderData = [
    {
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig3r_ZiFl7CODgPrM02x2H8LYzeu9uXS_LTuim0Ewv2Z7Oa-U1Jj7kE7PsLaM4rfBgTcZUzlj-ZiTo5QqrLwDXIRCwWpSufWl_IAe2YGr0Nre5f1ArKRrEiSBeGuacPm9hGrG9qVpFxQ4qwXDlaedmZmZybEaJPfu2CinYAkyU6ye2D2tJy7s0sxbbLQ/s320/4%20Fabiane%20de%20Paula-SVM.webp",
      title: "Título 1",
      description: "Descrição 1"
    },
    {
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig3r_ZiFl7CODgPrM02x2H8LYzeu9uXS_LTuim0Ewv2Z7Oa-U1Jj7kE7PsLaM4rfBgTcZUzlj-ZiTo5QqrLwDXIRCwWpSufWl_IAe2YGr0Nre5f1ArKRrEiSBeGuacPm9hGrG9qVpFxQ4qwXDlaedmZmZybEaJPfu2CinYAkyU6ye2D2tJy7s0sxbbLQ/s320/4%20Fabiane%20de%20Paula-SVM.webp",
      title: "Título 2",
      description: "Descrição 2"
    },
    {
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig3r_ZiFl7CODgPrM02x2H8LYzeu9uXS_LTuim0Ewv2Z7Oa-U1Jj7kE7PsLaM4rfBgTcZUzlj-ZiTo5QqrLwDXIRCwWpSufWl_IAe2YGr0Nre5f1ArKRrEiSBeGuacPm9hGrG9qVpFxQ4qwXDlaedmZmZybEaJPfu2CinYAkyU6ye2D2tJy7s0sxbbLQ/s320/4%20Fabiane%20de%20Paula-SVM.webp",
      title: "Título 3",
      description: "Descrição 3"
    }
  ];

  // Crie um novo array com a estrutura HTML para cada item do sliderData
  const sliderItems = noticias.map(item => {
    return `
      <div>
        <img src="${item.img}" alt="${item.title}" />
        <span>${item.category}</span>
        <h2>${item.title}</h2>
        <p>${item.paragraph}</p>
      </div>
    `;
  });

  // Adicione todos os itens do carrossel em uma única string
  const sliderHtml = sliderItems.join("");

  // Adicione a string ao elemento do carrossel
  $(".slider").html(sliderHtml);

  // Inicialize o carrossel usando jQuery
  $(".slider").slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
    nextArrow: '<button type="button" class="slick-next">Próximo</button>',
    autoplay: true,
    autoplaySpeed: 3000 // tempo em milissegundos (3 segundos)
  });



  $('.slider').on('click', '.slick-slide', function() {
    var slideIndex = $(this).data('slick-index');
    var slideData = noticias[slideIndex]; 
    exibirCard(slideData)
  });



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