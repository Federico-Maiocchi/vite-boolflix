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
        <h3>Films</h3>
        <div class="row">
            <CardsMain 
            v-for="movie in store.movie"
            :itemMovie="movie"
            />
        </div>
        <h3>Serie Tv</h3>
        <div class="row">
            <CardsMainTv
            v-for="serie in store.tv"
            :itemTv="serie"
            />
        </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.main-page {
    background-color: gray;
    min-height: 800px;

    .container-small {
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 50px;
        height: 100%;

        .row {
            height: 100%;
        }
    }
}

</style>