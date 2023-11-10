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
            <div class="col-4">
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
        max-width: 800px;
        margin: 0 auto;
        padding-top: 50px;
    }
}

</style>