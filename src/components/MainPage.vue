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
    <div class="container-small">
        <div class="row">
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
        <div class="row p-top">
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

    .container-small {
        max-width: 1000px;
        margin: 0 auto;
        padding-top: 50px;
        height: 100%;

        .row {
            height: 100%;

            .title-main {
                font-size: 60px;
            }
        }

        .p-top {
            padding-top: 70px;
        }
    }
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: blue; 
}


::-webkit-scrollbar-thumb:hover {
  background: red; 
}
</style>