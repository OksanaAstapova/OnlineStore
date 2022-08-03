import {showFavorites, addFavs} from './favourites';



export function createCard(CardsData: string | any[]){

let wrapper: any = document.querySelector(".products__wrapper");

    for(let k=0; k<CardsData.length; k++){
        let card: any = `<div class = "card" id='${CardsData[k].id}'>
        <img class="card__favs" src="favs.png">
        <div class = 'card__hover_wrapper'>
            <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img" style = 'width: 100%'>
            <div class = 'card__hover'>
                <div class = 'add_to_cart' onclick = 'addToCart(${k})', onclick = 'addAppear(${k})'>
                <p class = 'subtitle'>Add to cart</p>
                </div>
            </div>
        </div>
        <div class="card__info">
                    <div class = "card__info_wrapper">
                        <p class="subtitle name">${CardsData[k].name}</p>
                        <p class="text category-text">${CardsData[k].category}</p>
                        <p class="text colors">${CardsData[k].color}</p>
                        <p class="text" style = 'color: black'>${CardsData[k].sizes}</p>
                    </div>
                    <div class="card__price"><div>${CardsData[k].price}</div><div>$</div></div>
                </div>
        </div>`;

        wrapper.innerHTML += card;
        addHover();
        addFavs();
        showFavorites();

        let colors = document.querySelectorAll('.colors');
        colors.forEach(color =>{
            let value = color.innerHTML;
            switch (value) {
                case 'red':
                    color.classList.add('red');
                break;

                case 'yellow':
                    color.classList.add('yellow');
                break;

                case 'green':
                    color.classList.add('green');
                break;

                case 'blue':
                    color.classList.add('blue');
                break;

                case 'white':
                    color.classList.add('white');
                break;

                case 'black':
                    color.classList.add('black');
                break;
            
                
            }
        })
        
    }

}

function addHover(){
    let cards_hover = document.querySelectorAll('.add_to_cart');

    cards_hover.forEach(add => {
     add.addEventListener('click', ()=>{
        
         add.parentElement.classList.add('opacity-appear');
         add.children[0].innerHTML = 'in cart';
         add.classList.add('in_cart')

         let id = add.parentElement.parentElement.parentElement.id;
         localStorage.setItem(id, '');

         
            let count = 0;
            let Array: number[] = []
    
            document.querySelectorAll('.card_little').forEach(card =>{
                if(card.id === id){
                    count++
                    Array.push(count)
                    card.children[0].innerHTML = `${count}`
                 }
            })
    
            let maxCount = Math.max.apply(null, Array)
            document.querySelectorAll('.card_little').forEach(card =>{
                if(card.id === id){
                    if(card.children[0].innerHTML != maxCount.toString()){
                        card.classList.add('display-none')
                    }
                }
            })
        
        let cartInfo = document.querySelector('.sidebar__cart_info');

        localStorage.setItem('info', cartInfo.innerHTML);

     })
    
    })

}