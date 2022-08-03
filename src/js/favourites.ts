import { filter } from 'lodash';
import {animationHide, animationAppear, resetFilterCategory, resetFilterSize, resetFilterColor} from './main';

export function showFavorites(){

    let favorites: any = document.querySelector('.favorites');
    let card__favs = document.querySelectorAll('.card__favs');
    let no_favs = document.querySelector('.no-favs')
    
    favorites.addEventListener('click', ()=>{
        favorites.classList.toggle('favs-active');
        let searchBtn = document.querySelector('.search-btn');
        let favs_active = document.querySelectorAll('.card__favs_active');
        const no_results = document.querySelector('.no-results');
        const search_input = document.querySelector('.search-bar') as HTMLInputElement;

        if(no_results.classList.contains('appear')){
            no_results.classList.remove('appear');
        }

        if(search_input.classList.contains('search-appear')){
            search_input.classList.remove('search-appear');
            search_input.classList.add('search-disappear');
            search_input.value = '';
        }
        
        if (favorites.classList.contains('favs-active')){

            searchBtn.classList.add('searchBtn-disappear');
            if(searchBtn.classList.contains('searchBtn-appear')){
            searchBtn.classList.remove('searchBtn-appear');

            }

            for (let i = 0; i < card__favs.length; i++) {
                const fav = card__favs[i];
                let isFav = fav.classList.contains('card__favs_active');
                if(!isFav){animationHide(fav.parentElement)}
            }
            
            if(favs_active.length == 0){
                no_favs.classList.add('appear');
                no_favs.classList.remove('hide');

            }
            
            var filters = document.querySelector('.sidebar__filters');
            const sidebar = document.querySelector('.sidebar') as HTMLElement; 
            const fav_title = document.querySelector('.fav-title') as HTMLElement; 


            filters.animate([
        { transform: 'translate3D(0, 0, 0)' },
        { transform: 'translate3D(-200px, 0, 0)' }
            ], {
                duration: 200,
            })
            fav_title.style.visibility = 'visible';
            setTimeout(() => {
                filters.classList.add('display-none')
            }, 200);
        }
        else {
            
            closeFavs();
        }

            resetFilterCategory();
            resetFilterSize();
            resetFilterColor();
    })

}

export function closeFavs(){
    let searchBtn = document.querySelector('.search-btn');
    let card__favs = document.querySelectorAll('.card__favs');
    const fav_title = document.querySelector('.fav-title') as HTMLElement; 
    
    searchBtn.classList.remove('searchBtn-disappear');
            searchBtn.classList.add('searchBtn-appear');


            document.querySelector('.no-favs').classList.remove('appear');
            document.querySelector('.no-favs').classList.add('hide');


            for (let i = 0; i < card__favs.length; i++) {
                const fav = card__favs[i];
                animationAppear(fav.parentElement)
            }
            var filters = document.querySelector('.sidebar__filters');

            filters.animate([
                { transform: 'translate3D(-200px, 0, 0)' },
                { transform: 'translate3D(0, 0, 0)' }
              ], {
                duration: 400,
              })
            fav_title.style.visibility = 'hidden';
            setTimeout(() => {
                filters.classList.remove('display-none')
            }, 200);
}

export function addFavs(){
    let card__favs = document.querySelectorAll('.card__favs');
    
    for (let i = 0; i < card__favs.length; i++) {
        const el = <HTMLImageElement>card__favs[i];

        el.addEventListener('click', () => {
            el.classList.toggle('card__favs_active');
            el.src = 'favs2.png';

            let counter_wrapper = document.querySelector('.fav-counter');
            let favs_active = document.querySelectorAll('.card__favs_active');
            let counter = favs_active.length;

            counter_wrapper.innerHTML = `${counter}`;

            if(counter === 0){
                counter_wrapper.innerHTML = ''
            }

            if (el.classList.contains('card__favs_active')){
                el.src = 'favs2.png';

            }
            else {

                el.src = 'favs.png';
                let favorites: any = document.querySelector('.favorites');

                if (favorites.classList.contains('favs-active')){
                    
                    animationHide(el.parentElement);
                    
                    let favs_active = document.querySelectorAll('.card__favs_active');
                    
                    setTimeout(() => {
                        if(favs_active.length == 0){
                            document.querySelector('.no-favs').classList.add('appear')
                            document.querySelector('.no-favs').classList.remove('hide')
                        }
                    }, 200);
                    
                }
                
            }
        });
    }
   
}