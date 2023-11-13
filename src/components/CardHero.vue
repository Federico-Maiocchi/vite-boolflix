<script>
import { store } from '../store'

export default {
    props:{

        itemHero: Object,
        
    },

    data() {
    return {
        store:store,
        
        }
    },

    methods: {

    },

    created() {
        
    }

}

</script>

<template>
    <div class="col">
        <div class="card-hero">
            <figure>
                <img :src="itemHero.img" alt="">
            </figure>   
    </div>
    </div>
   
</template>



<style lang="scss" scoped>

.col {
    // padding: 10px;
    // width: calc(100% / 6);
    .card-hero {
    // background-color: white;
    height: 350px;
    width: 250px;
    padding: 10px;

    img {
        height: 350px;
        width: 250px;
    }
}

}

</style>