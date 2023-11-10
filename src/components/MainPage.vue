<script>
import CardsMain from './CardsMain.vue';
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
        CardsMain 
    },

    mounted() {
        console.log(this.movies)
    }
}

   
</script>

<template>
  <div class="main-page">
    <div class="container-small">
        <div class="row">
            <CardsMain 
            v-for="movie in store.movie"
            :itemMovie="movie" 
             
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