<script>
import { store } from '../store'

export default {
    props:{

        itemMovie: Object

    },

    data() {
    return {
        store:store,
        srcImg: '',
        original_language: '',
        httpsPoster: 'https://image.tmdb.org/t/p/w154',
        decimalNumber: this.itemMovie.vote_average

    }
    },

    

    methods: {
        getImgFlags() {
            const languageFlags = {
                en: '/img/en.png',
                it: '/img/ita.png',
                es: '/img/esp.png',
            };

            const languageCode = this.itemMovie.original_language;

           
            if (languageCode in languageFlags) {
                this.srcImg = languageFlags[languageCode];
            } else {
                
                this.srcImg = '';
            }
        },


        
    },

    created() {
        this.getImgFlags()
    }


}


</script>

<template>
    <div class="col-3">
        <div class="card " v-if="store.pushButton === true">
            <div class="front-card">
                <img :src="httpsPoster + itemMovie.poster_path" alt="">
            </div>
            <div class="back-card">
                <ul >
                    <li>Titolo {{ itemMovie.title }}</li>
                    <li>Titolo originale: {{ itemMovie.original_title }}</li>
                    <li>Lingua:
                        <img class="img-flags" v-if="srcImg" :src="srcImg" alt=""> 
                        <span v-else>{{ itemMovie.original_language }}</span>    
                    </li>
                    <!-- <li>{{ itemMovie.vote_average }}</li> -->
                    <li>{{Math.trunc(this.decimalNumber / 2)}}</li>
                    <li class="star-vote" >
                        <div v-for="item in Math.trunc(this.decimalNumber / 2)">
                            <span >&Star;</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

.col-3 {
    padding: 10px;
}

.card {
    background-color: white;
    
    height: 231px;
    width: 154px;

    .front-card {
        border: 2px solid red;
        display: inline-block ;
        height: 100%;
    }
    .front-card img {
        height: 228px;
        width: 154px;        
    }
    .back-card {
        border: 2px solid red;
        color: white;
        height: 231px;
        width: 154px;
        display: none;
        padding: 5px;
        background-color: black;  
    }

}

.star-vote {
    display: flex;

}

.card:hover .front-card {
    display: none;
}

.card:hover .back-card{
        display: block;
    }



.img-flags {
    width: 20px;
}

</style>