<script>

import CardsMain from './CardsMain.vue';
import CardsMainTv from './CardsMainTv.vue'
import { store } from '../store'



export default {

    data() {
        return {
            store: store,
        };
    },

    methods: {

    },

    components: { 
        CardsMain,
        CardsMainTv 
    },

    mounted() {
        
    }
}

   
</script>

<template>
  <div class="main-page">
    <div class="">
        <p>pippo</p>
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
    height: 800px;
    overflow: auto;

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
            padding: 70px 0px 30px 0px;
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