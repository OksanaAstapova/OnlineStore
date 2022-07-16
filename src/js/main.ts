const img1 = require('../assets/products/1.jpg')
const img2 = require('../assets/products/2.jpg')
const img3 = require('../assets/products/3.jpg')
const img4 = require('../assets/products/4.jpg')
const img5 = require('../assets/products/5.jpg')
const img6 = require('../assets/products/6.jpg')
const img7 = require('../assets/products/7.jpg')
const img8 = require('../assets/products/8.jpg')

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
        'category': ['printed dress' , 'long-sleeved'],
        'price': '33$',
        'color': 'white',
        'sizes': ['S', 'M', 'L', 'XL']
    },
    {   'img': img4,
        'alt': 'red dress',
        'name': 'Little red dress',
        'category': ['new arrival', 'plain dress'],
        'price': '50$',
        'color': 'red',
        'sizes': ['L', 'XL']
    },
    {   'img': img5,
        'alt': 'green dress',
        'name': 'Green shirt dress',
        'category': ['new arrival', 'plain dress'],
        'price': '44$',
        'color': 'green',
        'sizes': ['XS', 'S']
    },
    {   'img': img6,
        'alt': 'yellow dress',
        'name': 'Yellow long-sleeved dress',
        'category': ['long-sleeved dress', 'plain dress'],
        'price': '35$',
        'color': 'yellow',
        'sizes': 'S'
    },
    {   'img': img7,
        'alt': 'Striped long-sleeved dress',
        'name': 'Striped long-sleeved dress',
        'category': ['printed dress' , 'long-sleeved'],
        'price': '33$',
        'color': 'white',
        'sizes': ['XS', 'S', 'M', 'XL']
    },
    {   'img': img8,
        'alt': 'long-sleeved dress',
        'name': 'black and white dress',
        'category': ['plain dress' , 'long-sleeved'],
        'price': '80$',
        'color': ['black', 'white'],
        'sizes': ['M', 'XL']
    }
]

document.addEventListener("DOMContentLoaded", () => {
        let products__favorites: any = document.querySelector('.products__favorites');
            products__favorites.style.display = 'none';

        for(let k=0; k<CardsData.length; k++){
            let wrapper: any = document.querySelector(".products__wrapper");
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
        

       let card__favs = document.querySelectorAll('.card__favs');

        card__favs.forEach(function (el) {
            el.addEventListener('click', () => {
                el.classList.toggle('card__favs_active')
            });
        
        });

        var favorites: any = document.querySelector('.favorites');


        favorites.addEventListener('click', ()=>{

            favorites.classList.toggle('favs-active');
            var card__favs_active: any = document.querySelectorAll('.card__favs_active');

            if (favorites.classList.contains('favs-active')){
                console.log(1)
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

               
            }
            

    })
})
window.addToCart= addToCart;

function addToCart(k: any){
    let emptyCart = document.querySelector('.empty-cart');
    let cartInfo = document.querySelector('.sidebar__cart_info');

    emptyCart.classList.add('display-none');
    let card_little = `<div class = "card_little">
        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img_little">
                <p class="text">${CardsData[k].name}</p>
                <div class="card__price_little">${CardsData[k].price}</div>
    </div>`;

    cartInfo.innerHTML += card_little;


}
    