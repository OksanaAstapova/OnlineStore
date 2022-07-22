
import {CardsData} from './cards-data'

import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

let wrapper: any = document.querySelector(".products__wrapper");
let colors = document.querySelectorAll('.filters__colors_block');


function createCard(CardsData: string | any[]){

    for(let k=0; k<CardsData.length; k++){
        let card: any = `<div class = "card">
        <img class="card__favs" src="favs.png" onclick = 'addToFavs(${k})'>
        <div class = 'card__hover_wrapper'>
            <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
            <div class = 'card__hover'>
                <div class = 'add_to_cart' onclick = 'addToCart(${k})'>
                <p class = 'subtitle'>Add to cart</p>
                </div>
            </div>
        </div>
        <div class="card__info">
                    <div>
                        <p class="subtitle">${CardsData[k].name}</p>
                        <p class="text">${CardsData[k].category}</p>
                        <p class="text">${CardsData[k].color}</p>
                        <p class="text" style = 'color: black'>${CardsData[k].sizes}</p>
                    </div>
                    <div class="card__price">${CardsData[k].price}$</div>
                </div>
        </div>`;

        wrapper.innerHTML += card;
        addHover();
        addFavs();
        
    }

}

function removeCard(){
    document.querySelectorAll('.card').forEach(card =>{
        card.remove();
    })
}


document.addEventListener("DOMContentLoaded", () => {
        let products__favorites: any = document.querySelector('.products__favorites');
            products__favorites.style.display = 'none';

        createCard(CardsData);

        // Sort ---------------------------------------------------------------------

    let sort = <HTMLInputElement>document.querySelector('.sort_field');

    sort.addEventListener('change', ()=>{

        let option = sort.value;

        switch (option) {
            case 'name-up':
                CardsData.sort((a, b) => a.name > b.name ? 1 : -1);
                
                break;

            case 'name-down':
                CardsData.sort((a, b) => b.name > a.name ? 1 : -1);
                
                break;

            case 'price-up':
                CardsData.sort((a, b) => a.price > b.price ? 1 : -1);
                
                break;

            case 'price-down':
                CardsData.sort((a, b) => a.price < b.price ? 1 : -1);
                break;
                
            default:
                
                break;
            
        }

        removeCard();
                
        createCard(CardsData);
     })

     // filter by category---------------------------------------------------

     let category_field = <HTMLInputElement>document.querySelector('.filters__categories_checkbox');

     category_field.addEventListener('change', ()=>{

        let category = <HTMLInputElement>document.querySelector('#categories input:checked');
        let value = category.value

        switch (value) {

            case 'new-arrivals':
                
                removeCard();

                let cardFilteredNew = CardsData.filter(el => {
                    return el.category == 'new arrival'
                })

                createCard(cardFilteredNew)
                 
            break;

            case 'printed-dress':
                removeCard();

                let cardFilteredPrint = CardsData.filter(el => {
                    return el.category == 'printed dress'
                })
    
                createCard(cardFilteredPrint)
                
                break;

            case 'plain-dress':
                removeCard();

                let cardFilteredPlain = CardsData.filter(el => {
                    return el.category == 'plain dress';
                })
    
                createCard(cardFilteredPlain)
                
            break;

            case 'long-sleeved':
                removeCard();

                let cardFilteredLong = CardsData.filter(el => {
                    return el.category == 'long-sleeved'
                    })
    
                    createCard(cardFilteredLong)
                break;
                
            default:
                removeCard();
                
               createCard(CardsData);
                break;
            
        }

     })
     // filter by color---------------------------------------------------

     colors.forEach(color =>{

        color.addEventListener('click', ()=>{

            let option = color.className

            color.classList.toggle('color_active');
            color.lastElementChild.classList.toggle('display-flex');

            function remove_color_active(className: string){
                colors.forEach(color => {
                    if(!(color.classList.contains(className))){
                        color.classList.remove('color_active')
                        color.lastElementChild.classList.remove('display-flex');

                    }
                })
            }
            
            switch (option) {
                case 'filters__colors_block red':

            
                    removeCard();
                    
                    let cardFilteredRed = CardsData.filter(el => {
                        return el.color == 'red'
                    })

                    createCard(cardFilteredRed)
                    
                    remove_color_active('red');
                break;

                case 'filters__colors_block black':
                    removeCard();
                    
                    let cardFilteredBlack = CardsData.filter(el => {
                        return el.color == 'black'
                    })

                    createCard(cardFilteredBlack);
                    remove_color_active('black');
                    

                    break;

                case 'filters__colors_block yellow':
                    removeCard();
                    
                    let cardFilteredYellow = CardsData.filter(el => {
                        return el.color == 'yellow'
                    })

                    createCard(cardFilteredYellow);
                    remove_color_active('yellow');

                break;

                case 'filters__colors_block green':
                    removeCard();
                    
                    let cardFilteredGreen = CardsData.filter(el => {
                        return el.color == 'green'
                    })

                    createCard(cardFilteredGreen);
                    remove_color_active('green');

                break;
                
                case 'filters__colors_block blue':
                    removeCard();
                    
                    let cardFilteredBlue = CardsData.filter(el => {
                        return el.color == 'blue'
                    })

                    createCard(cardFilteredBlue);
                    remove_color_active('blue');

                break;

                case 'filters__colors_block white':
                    removeCard();
                    
                    let cardFilteredWhite = CardsData.filter(el => {
                        return el.color == 'white'
                    })

                    createCard(cardFilteredWhite);
                    remove_color_active('white');

                break;
                
            }

            
        }
        )
     })

     //SORT BY SIZE---------------------------------------------------------------------
     let sizes = document.querySelector('#size')

     sizes.addEventListener("change", ()=>{
        let checked = document.querySelectorAll('#size input:checked')

        removeCard();

        checked.forEach(size =>{

            switch (size.id) {
                case 'XS':
                    let filterXS = CardsData.filter(el => {
                        return el.sizes == 'XS'
                    }) 
                    createCard(filterXS)
                    break;
                
                case 'S':
                    let filterS = CardsData.filter(el => {
                        return el.sizes == 'S'
                    }) 
                    createCard(filterS)
                    break;
                
                case 'M':
                    let filterM = CardsData.filter(el => {
                        return el.sizes == 'M'
                    }) 
                    createCard(filterM)
                    break;
                
                case 'L':
                    let filterL = CardsData.filter(el => {
                        return el.sizes == 'L'
                    }) 
                    createCard(filterL)
                    break;
                
                case 'XL':
                    let filterXL = CardsData.filter(el => {
                        return el.sizes == 'XL'
                    }) 
                    createCard(filterXL)
                    break;

                default:
                    break;
            }
        })

        if(checked.length == 0){
            createCard(CardsData);
        }
     })
    
        

    //  favorites -------------------------------------------------------------------------
 
        var favorites: any = document.querySelector('.favorites');


        favorites.addEventListener('click', ()=>{

            favorites.classList.toggle('favs-active');
            favorites.src = 'favs2.png';
            var card__favs_active: any = document.querySelectorAll('.card__favs_active');
            console.log(card__favs_active)

            if (favorites.classList.contains('favs-active')){

                favorites.src = 'favs2.png';

                if(card__favs_active.length == 0){
                    products__favorites.style.display = 'flex';
                   products__favorites.innerHTML = 
                `<p class='text no-favs' style = 'font-style: italic;'
                >You haven't chosen your favorite products yet</p>`
                  
            }else {
                    products__favorites.style.display = 'flex';
                    
                    if(products__favorites.firstChild.classList.contains('no-favs') && products__favorites.childElementCount > 1)
                    document.querySelector('.no-favs').remove();
                    
            }
            }
            else{
                favorites.src = 'favs.png';
                products__favorites.style.display = 'none';

               
            }
            

    })
    window.addToFavs = addToFavs;

    function addToFavs(k: any){
        console.log(k)
        let card = `<div class = "card">
        <img class="card__favs" src="favs2.png">
        <div class = 'card__hover_wrapper'>
            <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
            <div class = 'card__hover'>
                <div class = 'add_to_cart' onclick = 'addToCart(${k})'>
                <p class = 'subtitle'>Add to cart</p>
                </div>
            </div>
        </div>
        <div class="card__info">
                    <div>
                        <p class="subtitle">${CardsData[k].name}</p>
                        <p class="text">${CardsData[k].category}</p>
                        <p class="text">${CardsData[k].color}</p>
                        <p class="text" style = 'color: black'>${CardsData[k].sizes}</p>
                    </div>
                    <div class="card__price">${CardsData[k].price}$</div>
                </div>
        </div>`;
    
        products__favorites.innerHTML += card;

        addHover();
        
    }

})

function addHover(){
    let cards_hover = document.querySelectorAll('.add_to_cart');

    cards_hover.forEach(add => {
     add.addEventListener('click', ()=>{
         add.parentElement.classList.add('opacity-appear');
         add.children[0].innerHTML = 'in cart';
         add.classList.add('in_cart')
         console.log(add)
     })
    })

}

function addFavs(){
    let card__favs = document.querySelectorAll('.card__favs');

       for (let i = 0; i < card__favs.length; i++) {
        const el = <HTMLImageElement>card__favs[i];

        el.addEventListener('click', () => {
            el.classList.toggle('card__favs_active')
            el.src = 'favs2.png'

            if (el.classList.contains('card__favs_active')){
                el.src = 'favs2.png'

            }
            else el.src = 'favs.png'
        });
    }
}



// ADD TO CART----------------------------------------------------------------------

declare global {
    interface Window { addToCart: any; }
    interface Window { addToFavs: any; }
    interface Window { clearCart: any; }
    interface Window { removeColorFilter: any; }
   
}

window.addToCart = addToCart;

let clearAll = document.querySelector<HTMLElement>('.remove-all');
let cartInfo = document.querySelector('.sidebar__cart_info');


function addToCart(k: any){


    clearAll.style.display = 'flex';
    clearAll.addEventListener('click', clear)

    let card_little = `<div class = "card_little">
        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img_little">
                <div><p class="text">${CardsData[k].name}</p>
                <div class="price-wrapper"><div class="card__price_little">${CardsData[k].price}</div>
                <div>$</div></div></div>
       <div class='remove-from-card' onclick = 'clearCart()'>✖</div>
    </div>`;

    cartInfo.innerHTML += card_little;

   countCards()

   countSum();

}

function countCards(){
    let quantity = document.querySelector('.cards-quantity');
    let counter = cartInfo.childElementCount;
    quantity.innerHTML = `${counter}`
    if(counter === 0){
        clearAll.style.display = "none";
        quantity.innerHTML = ''
    }
}

function countSum(){
    let prices = document.querySelectorAll('.card__price_little');
    let total_sum = document.querySelector('.total__sum');

    let arr: number[] = [];
    prices.forEach(el => {
        let num = Number(el.innerHTML)
        arr.push(num)
    })
    if(arr.length > 0){
        let sum = arr.reduce(function(a,b){return a+b});
        total_sum.innerHTML = `${sum}$`    
    }
    else
    {total_sum.innerHTML = "" }
}

window.clearCart = clearCart;

function clearCart(){
    let cardLittle = document.querySelector('.remove-from-card').parentElement;

    cardLittle.remove();
    countCards();
    countSum();

    let counter = cartInfo.childElementCount;

    if(counter === 0){
        
        let cards_hover = document.querySelectorAll('.add_to_cart');
        cards_hover.forEach(add => {
        add.parentElement.classList.remove('opacity-appear');
        add.children[0].innerHTML = 'add to cart';
        add.classList.remove('in_cart');

       })
    }

}

function clear(){
    clearAll.style.display = 'none';
    document.querySelectorAll('.card_little').forEach(card =>{
        card.remove();
    })
    countCards();

    let cards_hover = document.querySelectorAll('.add_to_cart');

    cards_hover.forEach(add => {
        add.parentElement.classList.remove('opacity-appear');
        add.children[0].innerHTML = 'add to cart';
        add.classList.remove('in_cart')

    })

       let total_sum = document.querySelector('.total__sum');
       total_sum.innerHTML = '';
}

window.removeColorFilter = removeColorFilter;

function removeColorFilter(){
    removeCard();
    createCard(CardsData);
}

// noUiSlider---------------------------------------------------------

var slider = document.getElementById('slider') as noUiSlider.target;

noUiSlider.create(slider, {
    start: [20, 100],
    tooltips: true,
    connect: true,
    range: {
        'min': 20,
        'max': 100
    }
    
});

const reset_slider = document.querySelector('.reset-slider');

reset_slider.addEventListener('click', (e)=>{
    slider.noUiSlider.reset();
})


slider.noUiSlider.on('update', function(values, handle){
    // console.log(values);
    // console.log(handle)
})

//search---------------------------------------------------------------------------------------------

const searchInput = document.querySelector('[data-search]');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', ()=> {
    console.log('1')
    searchInput.classList.toggle('display-flex')
    searchBtn.classList.toggle('search-btn_active')
})

searchInput.addEventListener('input', (e)=>{
    const value = (e.target as HTMLTextAreaElement).value.toLowerCase();

    document.querySelectorAll('.card').forEach(card => {

        let name = card.children[2].children[0].children[0].innerHTML.toLowerCase();
        let isVisible = name.includes(value);
        card.classList.toggle('display-none', !isVisible);
    })
})