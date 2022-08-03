import {CardsData} from './cards-data'

export function addToCart(k: any){

    let clearAll = document.querySelector<HTMLElement>('.remove-all');
    let cartInfo = document.querySelector('.sidebar__cart_info');
    
    clearAll.style.display = 'flex';
    clearAll.addEventListener('click', clear)
    let counter = cartInfo.childElementCount;


    let card_little = `<div class = "card_little" id="${CardsData[k].id}" data-id="${counter}">
        <div class ='count'>1</div>
        <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img_little">
        <div>
            <p class="text category-text">${CardsData[k].name}</p>
            <div class="price-wrapper">
                <div class="card__price_little">${CardsData[k].price}</div>
                <div>$</div>
            </div>
        </div>
        <button class ='remove-from-card'>X</button>
    </div>`;
    
    cartInfo.innerHTML += card_little;

    // let animateCard = cartInfo.firstElementChild;

    // animateCard.animate([
    //     { transform: 'translate3D(300px, 0, 0)' },
    //     { transform: 'translate3D(0, 0, 0)' }
    //   ], {
    //     duration: 200,
    //   })

   countCards()
   countSum();
   removeCardLittle();

   let sum = document.querySelector('.total__sum').innerHTML;
   let quantity = document.querySelector('.cards-quantity').innerHTML;
   let clearBtn = document.getElementById('clear').style.display;
   localStorage.setItem('clearBtn', clearBtn);
   localStorage.setItem('sum', sum);
   localStorage.setItem('quantity', quantity);
       
}

export function removeCardLittle(){
    let cards_remove = document.querySelectorAll('.remove-from-card');
    let cartInfo = document.querySelector('.sidebar__cart_info');

   cards_remove.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            // localStorage.setItem('info', cartInfo.innerHTML);

            let deleteCard = btn.parentElement;
            // localStorage.removeItem(`${deleteCard.dataset.id}`);
            let count = Number(deleteCard.children[0].innerHTML);
            count--;
            deleteCard.children[0].innerHTML = `${count}`
            
            deleteCard.animate([
                { transform: 'translate3D(0, 0, 0)' },
                { transform: 'translate3D(-300px, 0, 0)' }
              ], {
                duration: 200,
              })
            setTimeout(() => {
                localStorage.setItem('info', cartInfo.innerHTML);

                countCards();
                countSum();

                let sum = document.querySelector('.total__sum').innerHTML;
                let quantity = document.querySelector('.cards-quantity').innerHTML;
                localStorage.setItem('sum', sum);
                localStorage.setItem('quantity', quantity);
           
                let counter = Number(deleteCard.children[0].innerHTML);

                if(counter === 0){

                    localStorage.removeItem(`${deleteCard.id}`);

                    document.querySelectorAll('.card').forEach(card => {
                        if(deleteCard.id === card.id){
                            card.children[1].children[1].classList.remove('opacity-appear');
                            card.children[1].children[1].children[0].children[0].innerHTML = 'add to cart';
                            card.children[1].children[1].children[0].classList.remove('in_cart')
                        }
                    })

                    document.querySelectorAll('.card_little').forEach(card_in_cart => {
                        if(deleteCard.id === card_in_cart.id){
                            card_in_cart.remove();
                            localStorage.setItem('info', cartInfo.innerHTML);
                        }
                    })
                    
                }

                if(cartInfo.childElementCount === 0){
                    localStorage.clear()

                }
                
            }, 200);
        })
   
    })
}

function countCards(){
        
    let quantity = document.querySelector('.cards-quantity');
    let clearAll = document.querySelector<HTMLElement>('.remove-all');
    let counts: number[] = [];

    document.querySelectorAll('.card_little').forEach(card =>{
        let isNone = card.classList.contains('display-none');
        if(!isNone){
            counts.push(Number(card.children[0].innerHTML));
        }
    })

    let sum = counts.reduce((a, b) => a + b);
    quantity.innerHTML = `${sum}`;

    if(sum === 0){
        clearAll.style.display = "none";
        quantity.innerHTML = ''
    }
}

function countSum(){

    let total_wrapper = document.querySelector('.total__sum');
    let card_little = document.querySelectorAll('.card_little');
    let total: number[] = [];

    card_little.forEach(card => {
        let isNone = card.classList.contains('display-none');
        if (!isNone){
            let quantity: number = Number(card.children[0].innerHTML);
            let price: number = Number(card.children[2].children[1].children[0].innerHTML);
            let sum = quantity * price;
            total.push(sum)
        }
    })

    let total_sum = total.reduce(function(a,b){return a+b});
    total_wrapper.innerHTML = `${total_sum}$`;

    if(total_sum == 0){
        total_wrapper.innerHTML = '';
    }
}

export function clear(){
    localStorage.clear()

    let clearAll = document.querySelector<HTMLElement>('.remove-all');
    let total_sum = document.querySelector('.total__sum');
    let quantity = document.querySelector('.cards-quantity');
    total_sum.innerHTML = '';
    quantity.innerHTML = '';

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

    let cards_hover = document.querySelectorAll('.add_to_cart');

    cards_hover.forEach(add => {
        add.parentElement.classList.remove('opacity-appear');
        add.children[0].innerHTML = 'add to cart';
        add.classList.remove('in_cart')

    })
}

