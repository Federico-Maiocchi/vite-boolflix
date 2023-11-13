<script>

import CardsMain from './CardsMain.vue';
import CardsMainTv from './CardsMainTv.vue'
import CardHero from './CardHero.vue'
import { store } from '../store'




export default {

    data() {
        return {
            store: store,
            currentIndex: 0,
            heroImg: [
                {
                    img:"/hero-img/hero1.jpeg",
                },
                {
                    img:"/hero-img/hero2.jpeg",
                },
                {
                    img:"/hero-img/hero3.jpeg",
                },
                {
                    img:"/hero-img/hero4.jpeg",
                },
                {
                    img:"/hero-img/hero5.jpeg",
                },
    
            ],
            
        };
    },

    methods: {
        prevClick() {
            // console.log('click sinistro')


            this.currentIndex--;

            if(this.currentIndex === -1) {
                this.currentIndex = this.heroImg.length -1;
            }
        },

        nextClick() {
            // console.log('click destro')

            this.currentIndex++;

            if(this.currentIndex === this.heroImg.length) {

                this.currentIndex = 0;
            }
        }
    },

    components: {
    CardsMain,
    CardsMainTv,
    CardHero,
    
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
                <div class="prev" @click="prevClick()">&#8249;</div>
                <CardHero 
                    class="thumb"
                    v-for="(heroFilm,index) in heroImg "
                    :class="currentIndex === index ? 'active' : '' "
                    :key="index"
                    :itemHero="heroFilm"/>
                <div class="next" @click="nextClick()">&#8250;</div>
            </div>  
        </div>
    </div>
    <div class="container-small">
        <div class="row ">
            <div v-if="store.movie.length > 0">
                <h3 class="title-main">Film</h3>
            </div>
            <div class="row">
                <CardsMain 
                v-for="movie in store.movie"
                :itemMovie="movie"
                />
            </div>
            <!-- <div v-if="store.movie.length === 0">
                nussun film trovato
            </div> -->
        </div>
        <div class="row p-v">
            <div v-if="store.tv.length > 0">
                <h3 class="title-main">Serie Tv</h3>
            </div>
            <div class="row ">
                <CardsMainTv
                v-for="serie in store.tv"
                :itemTv="serie"
                />
            </div>
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
            padding: 5px;
            background-color: white;
            border-radius: 100px;
            cursor: pointer;
            z-index: 999;
            position: absolute;
        }

        .prev {
            left: 0px;
            bottom: 100px;
            
        }

        .next {
            right: 5px;
            bottom: 100px;
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

    }

    .container-small {
        max-width: 100%;
        margin: 0 auto;
        padding-top: 50px;
        
        .row {
            height: 100%;


            .title-main {
                font-size: 60px;
            }
        }

        .p-v {
            padding: 30px 0px 30px 0px;
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