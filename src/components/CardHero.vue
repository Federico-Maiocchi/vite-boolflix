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
    transform: scale(0.9);

    img {
        height: 350px;
        width: 250px;
    }
}

}

.card-hero:hover {
    background-color: rgb(77, 77, 77);
    box-shadow: 7px 7px 8px 8px darkslategrey;
    border-radius: 20px;
    height: 380px;
    width: 255px;
    transform: scale(1);
}

</style>