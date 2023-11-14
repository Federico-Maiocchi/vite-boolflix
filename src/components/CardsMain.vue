<script>
import { store } from '../store'

export default {
    props:{

        item: Object

    },

    data() {
    return {
        store:store,
        srcImg: '',
        original_language: '',
        httpsPoster: 'https://image.tmdb.org/t/p/w185',
        decimalNumber: this.item.vote_average,
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

            const languageCode = this.item.original_language;

           
            if (languageCode in languageFlags) {
                this.srcImg = languageFlags[languageCode];
            } else {
                
                this.srcImg = '';
            }
        },

        
    },

    computed: {
        title() {
            if(this.item.title) {
                return this.item.title
            }else {
                return this.item.name
            }
        },


        originalTitle() {
            if(this.item.original_title) {
                return this.item.original_title
            }else {
                return this.item.original_name
            }
            
        },

        calcVote() {
           return Math.trunc(this.decimalNumber / 2)
        }


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
                <div v-if="item.poster_path">
                    <img :src="httpsPoster + item.poster_path" alt="">
                </div>
                <div v-else-if="stringNullPoster">
                    <div class="message-error row">
                        <img src="/img-notif/img-not-found.jpg" alt="">
                        <span class="info-message-error">
                            <div class="container-info-error">
                                <div class="row-info-error">
                                    <h3>"{{ title }}"</h3>
                                    <p class="p-error" >Nessuna immagine trovata</p>
                                </div>
                            </div> 
                        </span>   
                    </div>
                </div>    
            </div>
            <div class="back-card row">
                <ul >
                    <li>Titolo: 
                        <div class="information">{{ title }}</div> 
                    </li>
                    <li>Titolo originale: 
                        <div class="information">{{ originalTitle }}</div>
                    </li>
                    <li>Lingua:
                        <img class="img-flags" v-if="srcImg" :src="srcImg" alt=""> 
                        <span class="information" v-else>{{ item.original_language }}</span>    
                    </li>
                    <!-- <li>{{ itemMovie.vote_average }}</li> -->
                    <!-- <li>{{Math.trunc(this.decimalNumber / 2)}}</li> -->
                    <li v-if=" Math.trunc(this.decimalNumber / 2) > 0" class="star-vote" >
                        Voto:
                        <div class="information">
                            <span class="star-icon" v-for="item in calcVote" >&starf;</span>
                            <span class="star-icon" v-for="item in 5 - calcVote">&star;</span>
                        </div>
                        
                    </li>
                    <li v-else>
                        Voto:
                        <span class="information">nessun voto</span>
                    </li>
                    <li >Overview:
                        <p class="information">{{ item.overview }} {{calcVote }}</p>
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
.col-3 {
    padding: 2px;
}

.card {
    background-color: white;
    height: 320px;
    width: 225px;

    .front-card {
        border: 2px solid lightgray;
        display: inline-block ;
        height: 100%;
        position: relative;
    }

    .message-error {
        height: 320px;
        width: 225px;  
        font-size: 20px;
        font-weight: 800;
        text-align: center;

        .info-message-error {
            position: absolute;

            .container-info-error {
                height: 300px;
            }

            .row-info-error {
                flex-wrap: nowrap;
                flex-direction: column;
                

                .p-error {
                    padding-top: 140px;
                }

            }
        }
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