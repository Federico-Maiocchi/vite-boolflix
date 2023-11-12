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
            <div>
                <h3 class="title-main">Film</h3>
            </div>
            <div class="row">
                <CardsMain 
                v-for="movie in store.movie"
                :itemMovie="movie"
                />
            </div>
        </div>
        <div class="row p-top">
            <div>
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
    min-height: 800px;

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

</style>