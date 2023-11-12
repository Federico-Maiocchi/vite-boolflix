<script>
import { store } from '../store'

export default {
    props:{

        itemTv: Object

    },

    data() {
    return {
        store:store,
        srcImg: '',
        original_language: '',
        httpsPoster: 'https://image.tmdb.org/t/p/w185',
        decimalNumber: this.itemTv.vote_average,
        stringNullPoster: 'https://image.tmdb.org/t/p/w185null'

    }
    },

    

    methods: {
        getImgFlags() {
            const languageFlags = {
                en: '/img/en.png',
                it: '/img/ita.png',
                es: '/img/esp.png',
            };

            const languageCode = this.itemTv.original_language;

           
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
    
    <div class="col-2">
        <div class="card " v-if="store.pushButton === true">
            <div class="front-card">
                <div v-if="itemTv.poster_path">
                    <img :src="httpsPoster + itemTv.poster_path" alt="">
                </div>
                <div v-else-if="stringNullPoster">
                    <div class="message-error row">
                        <h3>"{{ itemTv.name }}"</h3>
                        <p >Nessuna immagine trovata</p>
                    </div>
                    
                </div>    
            </div>
            <div class="back-card row">
                <ul >
                    <li>Titolo: 
                        <div class="information">{{ itemTv.name }}</div> 
                    </li>
                    <li>Titolo originale: 
                        <div class="information">{{ itemTv.original_name }}</div>
                    </li>
                    <li>Lingua:
                        <img class="img-flags" v-if="srcImg" :src="srcImg" alt=""> 
                        <div class="information" v-else>{{ itemTv.original_language  }}</div>    
                    </li>
                    <!-- <li>{{ itemMovie.vote_average }}</li> -->
                    <!-- <li>{{Math.trunc(this.decimalNumber / 2)}}</li> -->
                    <li class="star-vote" >
                        Voto:
                        <div class="information" v-for="item in Math.trunc(this.decimalNumber / 2)">
                            <span class="star-icon" >&star;</span>
                        </div>
                    </li>
                    <li>Overview:
                        <p class="information">{{ itemTv.overview}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

.col-2 {
    padding: 8px 5px;
}

.card {
    background-color: white;
    height: 320px;
    width: 225px;

    .front-card {
        border: 2px solid lightgray;
        display: inline-block ;
        height: 100%;
    }

    .message-error {
        height: 320px;
        width: 225px;  
        font-size: 20px;
        font-weight: 800;
        text-align: center;
    }

    
    .front-card img {
        display: inline-block;
        height: 316px;
        width: 225px;        
    }
    .back-card {
        border: 2px solid lightgray;
        color: white;
        height: 320px;
        width: 225px;
        overflow: auto;
        display: none;
        padding: 5px;
        background-color: black;
        
        
    }

    li {
        
        padding-top: 5px;
        font-weight: 900;
        font-size: 20px;
        color: orange;

        .information {
            
            font-weight: 300;
            font-size: 18px;
            color: white;
        }
    }

    .star-icon {
        font-size: 20px;
    }

    

}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: orange; 
}


::-webkit-scrollbar-thumb:hover {
  background: red; 
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
