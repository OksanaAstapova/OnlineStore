
import {CardsData} from './cards-data'

import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { stubString } from 'lodash';

let wrapper: any = document.querySelector(".products__wrapper");
let colors = document.querySelectorAll('.filters__colors_block');


function createCard(CardsData: string | any[]){

    for(let k=0; k<CardsData.length; k++){
        let card: any = `<div class = "card" id='${CardsData[k].id}'>
        <img class="card__favs" src="favs.png">
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
                        <p class="subtitle name">${CardsData[k].name}</p>
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

document.addEventListener("DOMContentLoaded", () => {

        createCard(CardsData);

// Sort ---------------------------------------------------------------------

    let sort = <HTMLInputElement>document.querySelector('.sort_field');

    sort.addEventListener('change', ()=>{

        let option = sort.value;
        
        switch (option) {
            case 'name-up':
                var cards = document.querySelectorAll('.card');

                Array.from(cards as unknown as HTMLCollectionOf<HTMLElement> ).sort((a: any,b: any): any => {
                    a = a.querySelector('.name').innerText.toLowerCase();
                    b = b.querySelector('.name').innerText.toLowerCase();
                    return  b > a ? -1 : 1;
                }).forEach(function(n: any, i) {
                    n as HTMLElement;
                    n.style.order = i
                  })
                                
            break;

            case 'name-down':
                var cards = document.querySelectorAll('.card');

                Array.from(cards as unknown as HTMLCollectionOf<HTMLElement> ).sort((a: any,b: any): any => {
                    a = a.querySelector('.name').innerText.toLowerCase();
                    b = b.querySelector('.name').innerText.toLowerCase();
                    return  b > a ? 1 : -1;
                }).forEach(function(n: any, i) {
                    n as HTMLElement;
                    n.style.order = i
                  })                
            break;

            case 'price-up':
                var cards = document.querySelectorAll('.card');

                Array.from(cards as unknown as HTMLCollectionOf<HTMLElement> ).sort((a: any,b: any): any => {
                    a = a.querySelector('.card__price').innerText;
                    b = b.querySelector('.card__price').innerText;
                    return  b > a ? -1 : 1;
                }).forEach(function(n: any, i) {
                    n as HTMLElement;
                    n.style.order = i
                  })        
            break;

            case 'price-down':
                var cards = document.querySelectorAll('.card');

                Array.from(cards as unknown as HTMLCollectionOf<HTMLElement> ).sort((a: any,b: any): any => {
                    a = a.querySelector('.card__price').innerText;
                    b = b.querySelector('.card__price').innerText;
                    return  b > a ? 1 : -1;
                }).forEach(function(n: any, i) {
                    n as HTMLElement;
                    n.style.order = i
                  })                        
            break;
            
        }
     })

     // filter by category---------------------------------------------------

     let category_field = <HTMLInputElement>document.querySelector('.filters__categories_checkbox');

     category_field.addEventListener('change', ()=>{

        let category = <HTMLInputElement>document.querySelector('#categories input:checked');
        let value = category.value

        function filterCategory(name: string){
            document.querySelectorAll('.card').forEach(card => {

                let category = card.children[2].children[0].children[1].innerHTML;
                let isCategory = category === name;
                card.classList.toggle('display-none', !isCategory);
            })
        }

        switch (value) {

            case 'new-arrivals':
                
                filterCategory('new arrival');
                 
            break;

            case 'printed-dress':
                filterCategory('printed dress');
                
                break;

            case 'plain-dress':
                filterCategory('plain dress');
                
            break;

            case 'long-sleeved':
                filterCategory('long-sleeved');
            break;
                
            default:
                document.querySelectorAll('.card').forEach(card => {

                    card.classList.remove('display-none');
                })
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
            function filterColor(value: string){
                document.querySelectorAll('.card').forEach(card => {

                    let category = card.children[2].children[0].children[2].innerHTML;
                    let isCategory = category === value;
                    card.classList.toggle('display-none', !isCategory);
                })
                remove_color_active(value);
            }
            
            switch (option) {
                case 'filters__colors_block red':

                    filterColor('red');
                    
                break;

                case 'filters__colors_block black':
                    
                    filterColor('black');

                break;

                case 'filters__colors_block yellow':
                    
                    filterColor('yellow');

                break;

                case 'filters__colors_block green':
                    
                    filterColor('green');

                break;
                
                case 'filters__colors_block blue':
                    filterColor('blue');

                 break;

                case 'filters__colors_block white':
                    filterColor('white');

                 break;
                
            }

            
        }
        )
     })

     //SORT BY SIZE---------------------------------------------------------------------
     let sizes = document.querySelector('#size')

     sizes.addEventListener("change", ()=>{
        let checked = document.querySelectorAll('#size input:checked');

        function filterSize(value: string){
            document.querySelectorAll('.card').forEach(card => {

                let category = card.children[2].children[0].children[3].innerHTML;
                let isCategory = category === value;
                let isNone = card.classList.contains('display-none');
                let isShow = card.classList.contains('show');

                if(!isNone && !isShow){
                    if(!isCategory){card.classList.add('display-none')}
                    else {
                         card.classList.add('show')}
                }else if(isCategory){
                card.classList.remove('display-none')
                card.classList.add('show')
            }
             
            })
        }

        if(checked.length == 0){
            document.querySelectorAll('.card').forEach(card =>{
                card.classList.remove('display-none');
                card.classList.remove('show');

            })        
        }else{

        checked.forEach(size =>{
            
            switch (size.id) {
                case 'XS':
                    
                    if((size as HTMLInputElement).checked != true){
                        console.log((size as HTMLInputElement).checked)
                    }
                    else 
                    filterSize('XS');
                    break;
                
                case 'S':
                    filterSize('S');
                    break;
                
                case 'M':
                    filterSize('M');
                    break;
                
                case 'L':
                    filterSize('L');
                    break;
                
                case 'XL':
                    filterSize('XL');
                    break;

                default:
                    break;
            }
        })
    }
     })
     //  favorites -------------------------------------------------------------------------
 
        let favorites: any = document.querySelector('.favorites');
        let card__favs = document.querySelectorAll('.card__favs');
        let favs_active = document.querySelectorAll('.card__favs_active');
        let no_favs = document.querySelector('.no-favs')

        favorites.addEventListener('click', ()=>{
            favorites.classList.toggle('favs-active');

            if (favorites.classList.contains('favs-active')){
                let favs_active = document.querySelectorAll('.card__favs_active');

                for (let i = 0; i < card__favs.length; i++) {
                    const fav = card__favs[i];
                    let isFav = fav.classList.contains('card__favs_active');
                    fav.parentElement.classList.toggle('display-none', !isFav);
                }
                if(favs_active.length == 0){
                no_favs.classList.add('display-flex');

            } 
            }
            else {
                document.querySelector('.no-favs').classList.remove('display-flex');

                for (let i = 0; i < card__favs.length; i++) {
                    const fav = card__favs[i];
                    fav.parentElement.classList.remove('display-none');
                }
            }
    })
    
})

function addHover(){
    let cards_hover = document.querySelectorAll('.add_to_cart');

    cards_hover.forEach(add => {
     add.addEventListener('click', ()=>{
         add.parentElement.classList.add('opacity-appear');
         add.children[0].innerHTML = 'in cart';
         add.classList.add('in_cart')
     })
    })

}

function addFavs(){
    let card__favs = document.querySelectorAll('.card__favs');
    


    for (let i = 0; i < card__favs.length; i++) {
        const el = <HTMLImageElement>card__favs[i];

        el.addEventListener('click', () => {
            el.classList.toggle('card__favs_active');
            el.src = 'favs2.png';

            if (el.classList.contains('card__favs_active')){
                el.src = 'favs2.png';

            }
            else {

                el.src = 'favs.png';
                let favorites: any = document.querySelector('.favorites');

                if (favorites.classList.contains('favs-active')){
                    el.parentElement.classList.add('display-none');
                    let favs_active = document.querySelectorAll('.card__favs_active');
                    if(favs_active.length == 0){
                    document.querySelector('.no-favs').classList.add('display-flex');

                }
                }
                
            }
        });
    }

    
}



// ADD TO CART----------------------------------------------------------------------

declare global {
    interface Window { addToCart: any; }
    interface Window { clearCart: any; }
    interface Window { removeColorFilter: any; }
   
}

window.addToCart = addToCart;

let clearAll = document.querySelector<HTMLElement>('.remove-all');
let cartInfo = document.querySelector('.sidebar__cart_info');


function addToCart(k: any){


    clearAll.style.display = 'flex';
    clearAll.addEventListener('click', clear)

    let card_little = `<div class = "card_little" id="${CardsData[k].id}">
        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img_little">
                <div><p class="text">${CardsData[k].name}</p>
                <div class="price-wrapper"><div class="card__price_little">${CardsData[k].price}</div>
                <div>$</div></div></div>
       <div class='remove-from-card'>✖</div>
    </div>`;

    cartInfo.innerHTML += card_little;

   countCards()

   countSum();

   let cards_remove = document.querySelectorAll('.remove-from-card');

   cards_remove.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            let cardCart = btn.parentElement;
            cardCart.remove();
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

            }else{
                let cart_cards = document.querySelectorAll('.card_little');
                let count = 0;
                
                cart_cards.forEach(el => {
                    if(el.id === cardCart.id){count++}
                    else count = 0;
                });

                console.log(count)
                
                if(count === 0){
                    document.querySelectorAll('.card').forEach(card =>{
                        if(cardCart.id === card.id ){
                            let btn = card.children[1].children[1].children[0];

                            btn.parentElement.classList.remove('opacity-appear');
                            btn.children[0].innerHTML = 'add to cart';
                            btn.classList.remove('in_cart');
                        }
                    })
                }
                
            }
        })
   
    })

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
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('display-none')
    })
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


// slider.noUiSlider.on('update', function(values, handle){
//     // console.log(values);
//     // console.log(handle)
// })

//search---------------------------------------------------------------------------------------------

const searchInput = document.querySelector('[data-search]');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', ()=> {
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