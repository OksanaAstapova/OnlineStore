var CardsData = [
    {   'img': '../src/assets/products/1.jpg',
        'alt': 'blue shoulder-off dress',
        'name': 'Blue shoulder-off dress',
        'category': 'plain dress',
        'price': '35$',
        'color': 'blue',
        'sizes': ['S', 'M', 'L']
    },
    {   'img': '../src/assets/products/2.jpg',
        'alt': 'blue shirt dress',
        'name': 'Blue shirt dress',
        'category': 'long-sleeved dress',
        'price': '40$',
        'color': 'blue',
        'sizes': ['S', 'M', 'L', 'XL']
    },
    {   'img': '../src/assets/products/3.jpg',
        'alt': 'Striped long-sleeved dress',
        'name': 'Striped long-sleeved dress',
        'category': ['printed dress' , 'long-sleeved'],
        'price': '33$',
        'color': 'white',
        'sizes': ['S', 'M', 'L', 'XL']
    },
    {   'img': '../src/assets/products/4.jpg',
        'alt': 'red dress',
        'name': 'Little red dress',
        'category': ['new arrival', 'plain dress'],
        'price': '50$',
        'color': 'red',
        'sizes': ['L', 'XL']
    },
    {   'img': '../src/assets/products/5.jpg',
        'alt': 'green dress',
        'name': 'Green shirt dress',
        'category': ['new arrival', 'plain dress'],
        'price': '44$',
        'color': 'green',
        'sizes': ['XS', 'S']
    },
    {   'img': '../src/assets/products/6.jpg',
        'alt': 'yellow dress',
        'name': 'Yellow long-sleeved dress',
        'category': ['long-sleeved dress', 'plain dress'],
        'price': '35$',
        'color': 'yellow',
        'sizes': 'S'
    },
    {   'img': '../src/assets/products/7.jpg',
        'alt': 'Striped long-sleeved dress',
        'name': 'Striped long-sleeved dress',
        'category': ['printed dress' , 'long-sleeved'],
        'price': '33$',
        'color': 'white',
        'sizes': ['XS', 'S', 'M', 'XL']
    },
    {   'img': '../src/assets/products/8.jpg',
        'alt': 'long-sleeved dress',
        'name': 'black and white dress',
        'category': ['plain dress' , 'long-sleeved'],
        'price': '80$',
        'color': ['black', 'white'],
        'sizes': ['M', 'XL']
    }

    
    
]
var favorites: any = document.querySelector('.favorites');
favorites.addEventListener('click', ()=>{

    favorites.classList.toggle('favs-active');
})



    document.addEventListener("DOMContentLoaded", () => {
        for(let k=0; k<CardsData.length; k++){
            let wrapper: any = document.querySelector(".products__wrapper");
            let card = `<div class = "card">
            <div class="card__favs"></div>
            <img src="${CardsData[k].img}" alt="${CardsData[k].alt}" class = "card__img">
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

        var card__favs = document.querySelectorAll('.card__favs');

        card__favs.forEach(function (el) {
            el.addEventListener('click', () => {
                el.classList.toggle('card__favs_active')
            });
        
        });
    })

   
    