<script>

import CardsMain from './CardsMain.vue';
// import CardsMainTv from './CardsMainTv.vue'
import CardHero from './CardHero.vue'
import CarouselHero from './CarouselHero.vue'
import { store } from '../store'


export default {

    data() {
        return {
            store: store,
            currentIndex: 0,
            // heroImg: [
            //     {
            //         img:"/hero-img/hero1.jpeg",
            //         imgBack: '/hero-img/hero1b.jpeg',
            //         title: 'Uncharted',
            //         originalTitle: 'Uncharted',
            //         language: 'it',
            //         vote: '7.8',
                    
            //     },
            //     {
            //         img:"/hero-img/hero2.jpeg",
            //         imgBack: '/hero-img/hero2b.jpeg',
            //         title: 'Joker',
            //         originalTitle: 'Joker',
            //         language: 'en',
            //         vote: '8.6',
            //     },
            //     {
            //         img:"/hero-img/hero3.jpeg",
            //         imgBack: '/hero-img/hero3b.jpg',
            //         title: 'Hypnotic',
            //         originalTitle: 'Hypnotic',
            //         language: 'it',
            //         vote: '6.3',
            //     },
            //     {
            //         img:"/hero-img/hero4.jpeg",
            //         imgBack: '/hero-img/hero4b.jpg',
            //         title: '2012',
            //         originalTitle: '2012',
            //         language: 'es',
            //         vote: '5.5',
            //     },
            //     {
            //         img:"/hero-img/hero5.jpeg",
            //         imgBack: '/hero-img/hero5b.jpg',
            //         title: 'Avengers: Endgame',
            //         originalTitle: 'Avengers: Endgame',
            //         language: 'en',
            //         vote: '10',
            //     },
    
            // ],
            
        };
    },

    methods: {
        prevClick() {
            // console.log('click sinistro')


            this.currentIndex--;

            if(this.currentIndex === -1) {
                this.currentIndex = this.store.heroImg.length -1;
            }
        },

        nextClick() {
            // console.log('click destro')

            this.currentIndex++;

            if(this.currentIndex === this.store.heroImg.length) {

                this.currentIndex = 0;
            }
        },

        onClick(index) {
            console.log('click card hero')

            this.currentIndex = index;

        }
    },

    components: {
    CardsMain,
    // CardsMainTv,
    CardHero,
    CarouselHero
    
},

    mounted() {
        
    }
}

</script>

<template>
  <div class="main-page">
    <div class="hero" v-if="store.movie.length === 0">
        <div class="container-hero">
            <h1 class="hero-title">Novità della settimana su boolflix</h1>
            <div class="row">
                <div class="prev" @click="prevClick()"><span>&#8249;</span></div>
                <CardHero 
                    class="thumb"
                    v-for="(heroFilm,index) in store.heroImg "
                    @click="onClick(index)"
                    :class="currentIndex === index ? 'active' : '' "
                    :key="index"
                    :itemHero="heroFilm"/>
                <div class="next" @click="nextClick()"><span>&#8250;</span></div>
            </div>
            <CarouselHero 
                :itemCarousel="store.heroImg"
                :currentIndex="currentIndex"
            /> 
        </div>
    </div>
    <div class="container-small">
        <div >
            <div v-if="store.movie.length > 0">
                <h3 class="title-main">Film</h3>
            </div>
            <div class="row">
                <CardsMain 
                v-for="movie in store.movie"
                :key="movie.id"
                :item="movie"
                />
            </div>
            <!-- <div v-if="!store.movie.length">
                Nussun film trovato
            </div> -->
        </div>
        <div class="p-v">
            <div v-if="store.tv.length > 0">
                <h3 class="title-main">Serie Tv</h3>
            </div>
            <div class="row">
                <CardsMain
                v-for="serie in store.tv"
                :key="serie.id"
                :item="serie"
                />
            </div>
            <!-- <div v-if="!store.tv.length">
                Nussuna serie trovata
            </div> -->
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>




    
.main-page {
    background-color: gray;
    height: 100vh;
    overflow: auto;

    .hero {
        padding: 100px 30px;

        .hero-title {
            font-size: 60px;
            margin-bottom: 40px;
        }

        .row {
            position: relative;
            justify-content: center;
        }

        .prev, .next {
            font-size: 60px;
            font-weight: 900;
            padding: 0px 5px 10px 5px;
            background-color: white;
            border-radius: 10px;
            cursor: pointer;
            z-index: 999;
            position: absolute;
        }

        .prev {
            left: 0px;
            bottom: 150px;  
        }

        .next {
            right: 5px;
            bottom: 150px;
        }

        .active {
            background-color: rgb(77, 77, 77);
            box-shadow: 7px 7px 8px 8px darkslategrey;
            border-radius: 20px;
            height: 380px;
            width: 255px;
            // display: none;
        }

        .d-none {
            display: none;
        }

        // .carousel {
        // padding-top: 30px;

        //     .container-car {
        //         max-width: 800px;
        //         // height: 400px;
        //         margin: 0 auto;
        //         border: 3px solid black;
                

        //         .row {
        //             justify-content: flex-start;
        //             height: 100%;

        //             .img-car {
        //                 width: 520px;
        //                 height: 350px;
        //                 object-fit: cover;
        //             }

        //             .info-car {
        //                 flex-grow: 1;
        //                 background-color: black;
        //                 padding: 5px;
                        

        //                 li {
        //                     padding-top: 5px;
        //                     font-weight: 900;
        //                     font-size: 24px;
        //                     color: orange;

        //                     .information {
        //                         font-weight: 300;
        //                         font-size: 22px;
        //                         color: white;
        //                     }
        //                 }

        //             }
        //         }


        //     }
       
        // }

    }

    

    .container-small {
        max-width: 100%;
        margin: 0 auto;
        padding-top: 50px;
        
        .row {
            height: 100%;
            justify-content: center;  
        }

        .p-v {
            padding: 30px 0px 30px 0px;
        }

        .title-main {
            text-align: center;
            font-size: 60px;
            margin-bottom: 50px;
        }
    }
}

::-webkit-scrollbar {
    width: 15px;

}

::-webkit-scrollbar-track {
  background: #000000; 
}
 
::-webkit-scrollbar-thumb {
  background: rgb(165, 8, 8);
  border-radius: 30px; 
}


::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 208, 0); 
}
</style>

<!-- <div class="carousel">
    <div class="container-car" >
        <div class="row">
            <img class="img-car" :src=" heroImg[currentIndex].imgBack " alt=""/>
            <div class="info-car">
                <ul>
                    <li>
                        Titolo:
                        <div class="information">{{ heroImg[currentIndex].title }}</div>
                    </li>
                    <li>
                        Titolo originale:
                        <div class="information">{{ heroImg[currentIndex].originalTitle }}</div>
                    </li>
                    <li>
                        Lingua:
                        <div class="information">{{ heroImg[currentIndex].language }}</div>
                    </li>
                    <li>
                        Voto:
                        <div class="information">{{ heroImg[currentIndex].vote }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div> -->