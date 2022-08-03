
import {CardsData} from './cards-data';
import {createCard} from './create-cards';
import {addToCart, clear, removeCardLittle} from './add-to-cart';
import {closeFavs} from './favourites';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { max } from 'lodash';

declare global {
    interface Window { addToCart: any; }
    interface Window { clearCart: any; }
    interface Window { onClick: any; }
    interface Window { removeColorFilter: any; }
   
}

window.addToCart = addToCart;
let colors = document.querySelectorAll('.filters__colors_block');


document.addEventListener("DOMContentLoaded", () => {
        createCard(CardsData);
        let cards = document.querySelectorAll('.card');

        if (localStorage.length != 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i)

                cards.forEach(card =>{
                    if(card.id === key){
                        let hover = card.children[1].children[1];
                        hover.classList.add('opacity-appear');
                        hover.children[0].children[0].innerHTML = 'in cart';
                        hover.children[0].classList.add('in_cart');
                    }
                })

                switch (key) {

                    case 'quantity':

                        let quantity = `${localStorage.getItem(key)}`
                        document.querySelector('.cards-quantity').innerHTML = quantity;
                        
                    break;

                    case 'sum':

                        let sum = `${localStorage.getItem(key)}`
                        document.querySelector('.total__sum').innerHTML = sum;
                        
                    break;

                    case 'clearBtn':

                        let clear = `${localStorage.getItem(key)}`
                        document.getElementById('clear').style.display = clear;
                        
                    break;

                    default:

                        let cart = `${localStorage.getItem(key)}`
                         document.querySelector('.sidebar__cart_info').innerHTML += cart;
                    break;
                }
            }
            
            removeCardLittle();
            document.getElementById('clear').addEventListener('click',()=>{
                clear()
            })
        }

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

        resetFilterSize();
        resetFilterColor();

        let category = <HTMLInputElement>document.querySelector('#categories input:checked');
        let value = category.value;

        function filterCategory(name: string){
            
            cards.forEach(card => {

                let category = card.children[2].children[0].children[1].innerHTML;
                let isCategory = category === name;
                if(!isCategory){animationHide(card)}
                 else animationAppear(card);            
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
                cards.forEach(card => {

                    animationAppear(card)
                })
                document.querySelectorAll('.filters__colors_block').forEach(color_btn => {
                    if(color_btn.classList.contains('color_active')){
                        color_btn.classList.remove('color_active');
                        color_btn.children[2].classList.remove('display-flex');
                    }
                })
            break;
            
        }

     })
     // filter by color---------------------------------------------------
    

     colors.forEach(color =>{

        color.addEventListener('click', ()=>{

            resetFilterCategory();
            resetFilterSize();

            let option = color.className

            color.classList.add('color_active');
            color.lastElementChild.classList.add('display-flex');

            function remove_color_active(className: string){
                colors.forEach(color => {
                    if(!(color.classList.contains(className))){
                        color.classList.remove('color_active')
                        color.lastElementChild.classList.remove('display-flex');

                    }
                })

               
            }
            window.removeColorFilter = removeColorFilter;

            function removeColorFilter(event: { stopPropagation: () => void; }){
                document.querySelectorAll('.card').forEach(card => {
                animationAppear(card);
                })
                colors.forEach(color => {
                    if(color.classList.contains('color_active')){
                        event.stopPropagation();
                        color.animate([
                            { opacity: 1 },
                            { opacity: 0 }
                          ], {
                            duration: 200,
                          })
                         setTimeout(() => {
                            color.classList.remove('color_active')
                        }, 200);
                        
                        color.lastElementChild.classList.remove('display-flex');
                    }
                
                })
            }

            function filterColor(value: string){
                
                cards.forEach(card => {
                        let category = card.children[2].children[0].children[2].innerHTML;
                        let isCategory = category === value;
                        if(!isCategory){animationHide(card)}
                        else animationAppear(card);
                    
                })
            }
            
            switch (option) {
                case 'filters__colors_block _red':

                    filterColor('red');
                    remove_color_active('_red');

                break;

                case 'filters__colors_block _black':
                    
                    filterColor('black');
                    remove_color_active('_black');

                break;

                case 'filters__colors_block _yellow':
                    
                    filterColor('yellow');
                    remove_color_active('_yellow');


                break;

                case 'filters__colors_block _green':
                    
                    filterColor('green');
                    remove_color_active('_green');

                break;
                
                case 'filters__colors_block _blue':
                    filterColor('blue');
                    remove_color_active('_blue');

                 break;

                case 'filters__colors_block _white':
                    filterColor('white');
                    remove_color_active('_white');

                 break;
                
            }

        }
        )
     })

     //SORT BY SIZE---------------------------------------------------------------------
     
            let inputs = document.querySelectorAll('#size input');

            function filterSize(value: string){
                
                document.querySelectorAll('.filters__colors_block').forEach(color_btn => {
                    if(color_btn.classList.contains('color_active')){
                        color_btn.classList.remove('color_active');
                        color_btn.children[2].classList.remove('display-flex');
                    }
                })
                
                cards.forEach(card => {
                     let size = card.children[2].children[0].children[3].innerHTML; 

                    if(size === value){
                        card.classList.toggle(value);
                       }
                })
                
            }

            inputs.forEach(input =>{
                
                input.addEventListener('click', ()=>{

                    resetFilterCategory();

                    cards.forEach(card => {
                        card.classList.add('display-none')
                    })

                    switch (input.id) {
                        case 'XS':
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
                    
                    }
                    let checked: number = 0;

                    cards.forEach(card => {

                        const classNames = ['XS', 'S', 'M', 'L', 'XL']
                          
                        if(classNames.some(className => card.classList.contains(className))){
                            checked ++;
                        }
                                      
                    }) 
                    if (checked == 0 && click !== 1){

                        cards.forEach(card =>{
                            card.classList.remove('display-none')

                        })

                     }

                })
     })

      slider.noUiSlider.on('update', function(values, handle){
        const leftSlider = values[0];
        const rightSlider = values[1];
        let no_results =  document.querySelector('.no-results');
    
        
        document.querySelectorAll('.card').forEach(card => {
    
            let price = +card.children[2].children[1].children[0].innerHTML;
            let isLeft = price >= leftSlider;
            let isRight = price <= rightSlider;
            
            if(handle == 0){
               if(card.classList.contains('right-none')){
                document.querySelectorAll('right-none').forEach(card =>{
                    card.classList.toggle('left-none', !isLeft);
                 })
               }
                else card.classList.toggle('left-none', !isLeft);
                
            }else{
                if(card.classList.contains('left-none')){
                    document.querySelectorAll('left-none').forEach(card =>{
                        card.classList.toggle('right-none', !isRight);
                     })
                   }
                    else card.classList.toggle('right-none', !isRight);}
            
            
        })
        
        let none_cards = document.querySelectorAll('.left-none, .right-none')
        
        if(none_cards.length === document.querySelectorAll('.card').length){
            no_results.classList.add('appear')
        }else no_results.classList.remove('appear')
    
    })
})

export function resetFilterCategory(){
    let category = document.querySelector('#categories input:checked') as unknown as HTMLInputElement
    if(!(category == null)){
        category.checked = false;
    }
    
}

export function resetFilterColor(){
    document.querySelectorAll('.filters__colors_block').forEach(color_btn => {
        if(color_btn.classList.contains('color_active')){
            color_btn.classList.remove('color_active');
            color_btn.children[2].classList.remove('display-flex');
        }
    })
}

export function resetFilterSize(){
   let XS = document.querySelector('#size input[name="XS"]') as HTMLInputElement;
    XS.checked = false;
    let S = document.querySelector('#size input[name="S"]') as HTMLInputElement;
    S.checked = false;
    let M = document.querySelector('#size input[name="M"]') as HTMLInputElement;
    M.checked = false;
    let L = document.querySelector('#size input[name="L"]') as HTMLInputElement;
    L.checked = false;
    let XL = document.querySelector('#size input[name="XL"]') as HTMLInputElement;
    XL.checked = false;

    document.querySelectorAll('.card').forEach(card => {

        const classNames = ['XS', 'S', 'M', 'L', 'XL']

        card.classList.remove('display-none');
          
        if(classNames.some(className => card.classList.contains(className))){
           
            card.className = card.className.split(' ')[0]
        }
    }) 
}


// noUiSlider---------------------------------------------------------

var slider = document.getElementById('slider') as noUiSlider.target;

noUiSlider.create(slider, {
    start: [20, 90],
    tooltips: true,
    connect: true,
    step: 1,
    range: {
        'min': 20,
        'max': 100
    },
    format: {
        from: function(value) {
                return parseInt(value);
            },
        to: function(value) {
            
                return parseInt(value as unknown as string);
            }
        }
    
});

const reset_slider = document.querySelector('.reset-slider');

reset_slider.addEventListener('click', (e)=>{
    slider.noUiSlider.reset();
    document.querySelectorAll('.card').forEach(card => {
        animationAppear(card);
    })
})



//search---------------------------------------------------------------------------------------------

const searchInput = <HTMLSelectElement>document.querySelector('[data-search]');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', ()=> {
    searchBtn.classList.toggle('search-btn_active')
    searchInput.focus();
    searchInput.value = '';
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('display-none')
    });

    if(searchInput.classList.contains('search-appear')){
        searchInput.classList.remove('search-appear');
        searchInput.classList.add('search-disappear');
}else{ searchInput.classList.add('search-appear');
        searchInput.classList.remove('search-disappear');}
 

})

searchInput.addEventListener('input', (e)=>{
    const value = (e.target as HTMLTextAreaElement).value.toLowerCase();
    let no_results =  document.querySelector('.no-results');


    document.querySelectorAll('.card').forEach(card => {

        let name = card.children[2].children[0].children[0].innerHTML.toLowerCase();
        let isVisible = name.includes(value);
        card.classList.toggle('display-none', !isVisible);
        
    })

    if(document.querySelectorAll('.display-none').length === document.querySelectorAll('.card').length){
        no_results.classList.add('appear')
    }else no_results.classList.remove('appear')

    
})

window.onClick = onClick;
let click = 0;

function onClick(){
    click++
}


export function animationAppear(arg: any){
    arg.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: 500,
      })
    setTimeout(() => {
        arg.classList.remove('display-none')
    }, 200);
}


export function animationHide(arg: any){
    arg.animate([
        { opacity: 1 },
        { opacity: 0 }
      ], {
        duration: 200,
      })
    setTimeout(() => {
        arg.classList.add('display-none')
    }, 200);
}

document.querySelector('.burger').addEventListener('click', ()=>{
    let favorites: any = document.querySelector('.favorites');

    if (favorites.classList.contains('favs-active')){
       
        favorites.classList.remove('favs-active');

        closeFavs();
    }
})

document.querySelector('#home').addEventListener('click', ()=>{
    let favorites: any = document.querySelector('.favorites');

    if (favorites.classList.contains('favs-active')){
       
        favorites.classList.remove('favs-active');

        closeFavs();
    }
})

