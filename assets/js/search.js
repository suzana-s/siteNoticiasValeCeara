const searchBar = document.querySelector('.search-bar')

searchBar.addEventListener('click', function() {
   searchBar.classList.add('displaySearch')

})

const search = document.querySelector('.img')

var count = 0

search.addEventListener('click', function(e) {
    searchBar.classList.add('displaySearch')
    count++
    if(count >= 2) {
        alert('Barra de pesquisa esta no canto superior direito')
    }
})

function filterCards() {
    const input = document.querySelector('input');
    const searchTerm = input.value;
    
    const filteredData = noticias.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.paragraph.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  
    const cardContainer = document.querySelector('.mainCardsNoticias');
    while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
    }
  
    filteredData.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      const cardTitle = document.createElement('h2');
      cardTitle.innerText = item.title;
  
      const cardDesc = document.createElement('p');
      cardDesc.innerText = item.paragraph;
  
      card.appendChild(cardTitle);
      card.appendChild(cardDesc);
      
      cardContainer.appendChild(card);
    });
  }
  
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', filterCards);
  


/* const btn = document.querySelector('.btn')
const input = document.querySelector('input')
let cardContainer = document.querySelector('.mainCardsNoticias')

btn.addEventListener('click', updateCardList)

function createCardElement(item, pesquisa) {
    const title = document.createElement('h2')

    title.innerText = `Resultados da Pesquisa "${pesquisa}"`

    const img = document.createElement('img')
    img.src = item.img

    const span = document.createElement('span')
    span.innerText = item.category

    const h2 = document.querySelector('h2')
    h2.innerText = item.title;

    const date = document.createElement('span')
    date.innerText = item.dateRender;

    const p = document.createElement('p')
    p.innerText = item.paragraph + ' [...]';

    const div = document.createElement('div')
    
    const div2 = document.createElement('div')

    div2.append(span, h2, date, p)

    div.append(title, img, div2)

    return div

}

function searchByTitle(searchString, items) {
    return items.filter((item) => {
        item.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    })
}

function updateCardList() {
    cardContainer.innerHTML = '';

    const searchString = input.value;

    const filterItems = searchByTitle(searchString, noticias)

    cardContainer = searchByTitle(searchString, noticias)


    filterItems.forEach(element => {
        const cardElement = createCardElement(element, searchString)
        cardContainer.appendChild(cardElement)
    });

}
 */



