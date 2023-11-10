<script>
import CardsMain from './CardsMain.vue';



export default {

    data() {
        return {};
    },

    methods: {

    },

    components: { 
        CardsMain 
    }
}


</script>

<template>
  <div class="main-page">
    <div class="container-small">
        <div class="row">
            <div v-for="card in 8" class="col-3">
                <CardsMain />
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
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 50px;

        .row {
            
            .col-3 {
                padding: 10px;
            }
            // .col-4 {
            //     padding: 10px;
            // }
        }
    }
}

</style>