import img1 from '../assets/products/1.jpg'
import img2 from '../assets/products/2.jpg'
import img3 from '../assets/products/3.jpg'
import img4 from '../assets/products/4.jpg'
import img5 from '../assets/products/5.jpg'
import img6 from '../assets/products/6.jpg'
import img7 from '../assets/products/7.jpg'
import img8 from '../assets/products/8.jpg'

const CardsData = [
    {   'img': img1,
        'alt': 'blue shoulder-off dress',
        'name': 'Blue shoulder-off dress',
        'category': 'plain dress',
        'price': '35$',
        'color': 'blue',
        'sizes': ['S', 'M', 'L']
    },
    {   'img': img2,
        'alt': 'blue shirt dress',
        'name': 'Blue shirt dress',
        'category': 'long-sleeved dress',
        'price': '40$',
        'color': 'blue',
        'sizes': ['S', 'M', 'L', 'XL']
    },
    {   'img': img3,
        'alt': 'Striped long-sleeved dress',
        'name': 'Striped long-sleeved dress',
        'category': 'printed dress',
        'price': '33$',
        'color': 'white',
        'sizes': ['S', 'M', 'L', 'XL']
    },
    {   'img': img4,
        'alt': 'red dress',
        'name': 'Little red dress',
        'category': 'new arrival',
        'price': '50$',
        'color': 'red',
        'sizes': ['L', 'XL']
    },
    {   'img': img5,
        'alt': 'green dress',
        'name': 'Green shirt dress',
        'category': 'new arrival',
        'price': '44$',
        'color': 'green',
        'sizes': ['XS', 'S']
    },
    {   'img': img6,
        'alt': 'yellow dress',
        'name': 'Yellow long-sleeved dress',
        'category': 'plain dress',
        'price': '35$',
        'color': 'yellow',
        'sizes': 'S'
    },
    {   'img': img7,
        'alt': 'Striped long-sleeved dress',
        'name': 'Striped long-sleeved dress',
        'category': 'long-sleeved',
        'price': '33$',
        'color': 'white',
        'sizes': ['XS', 'S', 'M', 'XL']
    },
    {   'img': img8,
        'alt': 'long-sleeved dress',
        'name': 'Black and white dress',
        'category': 'long-sleeved',
        'price': '80$',
        'color': ['black', 'white'],
        'sizes': ['M', 'XL']
    }
]

document.addEventListener("DOMContentLoaded", () => {
        let products__favorites: any = document.querySelector('.products__favorites');
            products__favorites.style.display = 'none';
            let wrapper: any = document.querySelector(".products__wrapper");

        for(let k=0; k<CardsData.length; k++){
            let card = `<div class = "card">
            <img class="card__favs" src="favs.png">
            <div class = 'card__hover_wrapper'>
                <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
                <div class = 'card__hover'>
                    <div class = 'add_to_cart' onclick = 'addToCart(${k})'><p class = 'subtitle'>Add to cart</p></div>
                </div>
            </div>
            <div class="card__info">
                        <div>
                            <p class="subtitle">${CardsData[k].name}</p>
                            <p class="text">${CardsData[k].category}</p>
                        </div>
                        <div class="card__price">${CardsData[k].price}</div>
                    </div>
            </div>`;

            wrapper.innerHTML += card;

                
        }

        // Sort ---------------------------------------------------------------------

    let sort = <HTMLInputElement>document.querySelector('.sort_field');

    sort.addEventListener('change', ()=>{

        console.log(sort.value)
        let option = sort.value;

        switch (option) {
            case 'name-up':
                CardsData.sort((a, b) => a.name > b.name ? 1 : -1);
                console.log(CardsData)
                
                break;

            case 'name-down':
                CardsData.sort((a, b) => b.name > a.name ? 1 : -1);
                console.log(CardsData)
                
                break;

            case 'price-up':
                CardsData.sort((a, b) => a.price > b.price ? 1 : -1);
                console.log(CardsData)
                
                break;

            case 'price-down':
                CardsData.sort((a, b) => a.price < b.price ? 1 : -1);
                console.log(CardsData)            
                break;
                
            default:
                
                break;
            
        }

        document.querySelectorAll('.card').forEach(card =>{
            card.remove();
        })
                
        for(let k=0; k<CardsData.length; k++){
            let card = `<div class = "card">
            <div class="card__favs"></div>
            <div class = 'card__hover_wrapper'>
                <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
                <div class = 'card__hover'>
                    <div class = 'add_to_cart' onclick = 'addToCart(${k})'><p class = 'subtitle'>Add to cart</p></div>
                </div>
            </div>
            <div class="card__info">
                        <div>
                            <p class="subtitle">${CardsData[k].name}</p>
                            <p class="text">${CardsData[k].category}</p>
                        </div>
                        <div class="card__price">${CardsData[k].price}</div>
                    </div>
            </div>`;

            wrapper.innerHTML += card;

                
        }
     })

     // filter---------------------------------------------------

     let category_field = <HTMLInputElement>document.querySelector('.filters__categories_checkbox');

     category_field.addEventListener('change', ()=>{

        let category = <HTMLInputElement>document.querySelector('#categories input:checked');
        let value = category.value

        switch (value) {

            case 'new-arrivals':
                
                document.querySelectorAll('.card').forEach(card =>{
                    card.remove();
                })

                for (let k = 0; k < CardsData.length; k++) {
                    
                    if(CardsData[k].category === 'new arrival'){
                        let card = `<div class = "card">
                    <div class="card__favs"></div>
                    <div class = 'card__hover_wrapper'>
                        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
                        <div class = 'card__hover'>
                            <div class = 'add_to_cart' onclick = 'addToCart(${k})'><p class = 'subtitle'>Add to cart</p></div>
                        </div>
                    </div>
                    <div class="card__info">
                                <div>
                                    <p class="subtitle">${CardsData[k].name}</p>
                                    <p class="text">${CardsData[k].category}</p>
                                </div>
                                <div class="card__price">${CardsData[k].price}</div>
                            </div>
                    </div>`;

            wrapper.innerHTML += card;
                    }
                }
                
                break;

            case 'printed-dress':
                document.querySelectorAll('.card').forEach(card =>{
                    card.remove();
                })

                for (let k = 0; k < CardsData.length; k++) {
                    
                    if(CardsData[k].category === 'printed dress'){
                        let card = `<div class = "card">
                    <div class="card__favs"></div>
                    <div class = 'card__hover_wrapper'>
                        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
                        <div class = 'card__hover'>
                            <div class = 'add_to_cart' onclick = 'addToCart(${k})'><p class = 'subtitle'>Add to cart</p></div>
                        </div>
                    </div>
                    <div class="card__info">
                                <div>
                                    <p class="subtitle">${CardsData[k].name}</p>
                                    <p class="text">${CardsData[k].category}</p>
                                </div>
                                <div class="card__price">${CardsData[k].price}</div>
                            </div>
                    </div>`;

            wrapper.innerHTML += card;
                    }
                }
                
                break;

            case 'plain-dress':
                document.querySelectorAll('.card').forEach(card =>{
                    card.remove();
                })

                for (let k = 0; k < CardsData.length; k++) {
                    
                    if(CardsData[k].category === 'plain dress'){
                        let card = `<div class = "card">
                    <div class="card__favs"></div>
                    <div class = 'card__hover_wrapper'>
                        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
                        <div class = 'card__hover'>
                            <div class = 'add_to_cart' onclick = 'addToCart(${k})'><p class = 'subtitle'>Add to cart</p></div>
                        </div>
                    </div>
                    <div class="card__info">
                                <div>
                                    <p class="subtitle">${CardsData[k].name}</p>
                                    <p class="text">${CardsData[k].category}</p>
                                </div>
                                <div class="card__price">${CardsData[k].price}</div>
                            </div>
                    </div>`;

            wrapper.innerHTML += card;
                    }
                }
                
                break;

            case 'long-sleeved':
                document.querySelectorAll('.card').forEach(card =>{
                    card.remove();
                })

                for (let k = 0; k < CardsData.length; k++) {
                    
                    if(CardsData[k].category === 'long-sleeved'){
                        let card = `<div class = "card">
                    <div class="card__favs"></div>
                    <div class = 'card__hover_wrapper'>
                        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
                        <div class = 'card__hover'>
                            <div class = 'add_to_cart' onclick = 'addToCart(${k})'><p class = 'subtitle'>Add to cart</p></div>
                        </div>
                    </div>
                    <div class="card__info">
                                <div>
                                    <p class="subtitle">${CardsData[k].name}</p>
                                    <p class="text">${CardsData[k].category}</p>
                                </div>
                                <div class="card__price">${CardsData[k].price}</div>
                            </div>
                    </div>`;

            wrapper.innerHTML += card;
                    }
                }           
                break;
                
            default:
                document.querySelectorAll('.card').forEach(card =>{
                    card.remove();
                })
                
                for(let k=0; k<CardsData.length; k++){
                    let card = `<div class = "card">
                    <div class="card__favs"></div>
                    <div class = 'card__hover_wrapper'>
                        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
                        <div class = 'card__hover'>
                            <div class = 'add_to_cart' onclick = 'addToCart(${k})'><p class = 'subtitle'>Add to cart</p></div>
                        </div>
                    </div>
                    <div class="card__info">
                                <div>
                                    <p class="subtitle">${CardsData[k].name}</p>
                                    <p class="text">${CardsData[k].category}</p>
                                </div>
                                <div class="card__price">${CardsData[k].price}</div>
                            </div>
                    </div>`;
        
                    wrapper.innerHTML += card;
        
                        
                }
                break;
            
        }

     })

        

    //  favorites -------------------------------------------------------------------------

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
       
       
    //    card__favs.forEach(function (el) {
            
    //         el.addEventListener('click', () => {
    //             el.classList.toggle('card__favs_active')
    //             el.src = 'favs2.png'
    //         });
        
    //     });

        var favorites: any = document.querySelector('.favorites');


        favorites.addEventListener('click', ()=>{

            favorites.classList.toggle('favs-active');
            favorites.src = 'favs2.png';

            var card__favs_active: any = document.querySelectorAll('.card__favs_active');

            if (favorites.classList.contains('favs-active')){

                products__favorites.style.display = 'flex';
                for (let i = 0; i < card__favs_active.length; i++) {
                    let element = card__favs_active[i];
                    console.log(card__favs_active[i].parentElement)
                    let element_wrapper = `<div class = "card" onclick = ${i}>
                    <div class="card__favs"></div>
                    <img src="${CardsData[i].img}" alt="${CardsData[i].alt}" class = "card__img">
                    <div class="card__info">
                                <div>
                                    <p class="subtitle">${CardsData[i].name}</p>
                                    <p class="text">${CardsData[i].category}</p>
                                    <p class="text" style = 'color: black'>${CardsData[i].sizes}</p>
                                </div>
                                <div class="card__price">${CardsData[i].price}</div>
                            </div>
                    </div>`;
                            
                    products__favorites.innerHTML += element_wrapper;
                    
                }
            }
            else{
                console.log(5)
                products__favorites.style.display = 'none';
                products__favorites.innerHTML = '';
                favorites.src = 'favs.png';


               
            }
            

    })
})

// ADD TO CART----------------------------------------------------------------------

declare global {
    interface Window { addToCart: any; }
    interface Window { removeCard: any; }

}

window.addToCart = addToCart;

let clearAll = document.querySelector<HTMLElement>('.remove-all');
let cartInfo = document.querySelector('.sidebar__cart_info');
let emptyCart = document.querySelector<HTMLElement>('.empty-cart');


function addToCart(k: any){


    clearAll.style.display = 'flex';
    clearAll.addEventListener('click', clear)

    emptyCart.style.visibility = 'hidden';

    let card_little = `<div class = "card_little">
        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img_little">
                <div><p class="text">${CardsData[k].name}</p>
                <div class="card__price_little">${CardsData[k].price}</div></div>
       <div class='remove-from-card' onclick = 'removeCard()'>✖</div>
    </div>`;

    cartInfo.innerHTML += card_little;

   

}

window.removeCard = removeCard;

function removeCard(){
    let cardLittle = document.querySelector('.remove-from-card').parentElement;

    cardLittle.style.display = 'none';
}

function clear(){
    clearAll.style.display = 'none';
    emptyCart.style.visibility = 'visible';

    document.querySelectorAll('.card_little').forEach(card =>{
        card.remove();
    })
}




    