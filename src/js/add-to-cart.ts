import {CardsData} from './cards-data'

export function addToCart(k: any){

    let clearAll = document.querySelector<HTMLElement>('.remove-all');
    let cartInfo = document.querySelector('.sidebar__cart_info');
    
    clearAll.style.display = 'flex';
    clearAll.addEventListener('click', clear)
    let counter = cartInfo.childElementCount;


    let card_little = `<div class = "card_little" id="${CardsData[k].id}" data-id="${counter}">
        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img_little">
                <div><p class="text">${CardsData[k].name}</p>
                <div class="price-wrapper"><div class="card__price_little">${CardsData[k].price}</div>
                <div>$</div></div></div>
       <div class='remove-from-card'>✖</div>
    </div>`;
    
    cartInfo.innerHTML += card_little;

    let animateCard = cartInfo.lastElementChild;
    
    animateCard.animate([
        { transform: 'translate3D(300px, 0, 0)' },
        { transform: 'translate3D(0, 0, 0)' }
      ], {
        duration: 200,
      })

   countCards()
   countSum();
   removeCardLittle();

   let sum = document.querySelector('.total__sum').innerHTML;
   let quantity = document.querySelector('.cards-quantity').innerHTML;
   let clearBtn = document.getElementById('clear').style.display;
   localStorage.setItem('clearBtn', clearBtn);
   localStorage.setItem('sum', sum);
   localStorage.setItem('quantity', quantity);
   localStorage.setItem(`card ${counter}`, card_little)
       
}

export function removeCardLittle(){
    let cards_remove = document.querySelectorAll('.remove-from-card');
    let cartInfo = document.querySelector('.sidebar__cart_info');

   cards_remove.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            let cardCart = btn.parentElement;
            localStorage.removeItem(`${cardCart.dataset.id}`);
            
            
            cardCart.animate([
                { transform: 'translate3D(0, 0, 0)' },
                { transform: 'translate3D(-300px, 0, 0)' }
              ], {
                duration: 200,
              })
            setTimeout(() => {
                cardCart.remove();
                countCards();
                countSum();
                let sum = document.querySelector('.total__sum').innerHTML;
                let quantity = document.querySelector('.cards-quantity').innerHTML;
                console.log(sum)
                localStorage.setItem('sum', sum);
                localStorage.setItem('quantity', quantity);

           

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
            }, 200);
        })
   
    })
}

function countCards(){
        
    let quantity = document.querySelector('.cards-quantity');
    let cartInfo = document.querySelector('.sidebar__cart_info');
    let clearAll = document.querySelector<HTMLElement>('.remove-all');


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

export function clear(){
    localStorage.clear()

    let clearAll = document.querySelector<HTMLElement>('.remove-all');

    clearAll.animate([
        { transform: 'translate3D(0, 0, 0)' },
        { transform: 'translate3D(0, -300px, 0)' }
      ], {
        duration: 300,
      })
    setTimeout(() => {
        clearAll.style.display = 'none';
    }, 300);
    document.querySelectorAll('.card_little').forEach(card =>{
        card.animate([
            { transform: 'translate3D(0, 0, 0)' },
            { transform: 'translate3D(300px, 0, 0)' }
          ], {
            duration: 200,
          })
        setTimeout(() => {
            card.remove()
        }, 200);
    })
    setTimeout(() => {
        countCards();
    }, 200);

    let cards_hover = document.querySelectorAll('.add_to_cart');

    cards_hover.forEach(add => {
        add.parentElement.classList.remove('opacity-appear');
        add.children[0].innerHTML = 'add to cart';
        add.classList.remove('in_cart')

    })

       let total_sum = document.querySelector('.total__sum');
       total_sum.innerHTML = '';
}