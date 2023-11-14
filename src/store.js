import { reactive } from 'vue';


export const store = reactive({

    textQuery: '',
    movie: [],
    tv: [],
    pushButton: false,
    heroImg: [
        {
            img:"/hero-img/hero1.jpeg",
            imgBack: '/hero-img/hero1b.jpeg',
            title: 'Uncharted',
            originalTitle: 'Uncharted',
            language: 'it',
            vote: 7.8,
            
        },
        {
            img:"/hero-img/hero2.jpeg",
            imgBack: '/hero-img/hero2b.jpeg',
            title: 'Joker',
            originalTitle: 'Joker',
            language: 'en',
            vote: 8.6,
        },
        {
            img:"/hero-img/hero3.jpeg",
            imgBack: '/hero-img/hero3b.jpg',
            title: 'Hypnotic',
            originalTitle: 'Hypnotic',
            language: 'it',
            vote: 6.3,
        },
        {
            img:"/hero-img/hero4.jpeg",
            imgBack: '/hero-img/hero4b.jpg',
            title: '2012',
            originalTitle: '2012',
            language: 'es',
            vote: 5.5,
        },
        {
            img:"/hero-img/hero5.jpeg",
            imgBack: '/hero-img/hero5b.jpg',
            title: 'Avengers: Endgame',
            originalTitle: 'Avengers: Endgame',
            language: 'en',
            vote: 10,
        },

    ],
    
})