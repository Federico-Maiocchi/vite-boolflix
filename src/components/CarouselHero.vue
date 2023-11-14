<script>
import { store } from '../store'

export default {
    props:{

        itemCarousel: Object,
        currentIndex: Number,
        
    },

    data() {
    return {
        store:store,
        srcImg: '',
        decimalNumber: this.itemCarousel.vote,
        
        }
    },

    methods: {
        getImgFlags() {
            const languageFlags = {
                en: '/img/en.png',
                it: '/img/ita.png',
                es: '/img/esp.png',
            };

            const languageCode = this.itemCarousel.language;
            console.log(languageCode)

           
            if (languageCode in languageFlags) {
                this.srcImg = languageFlags[languageCode];
            } else {
                
                this.srcImg = '';
            }
        },

        
    },

    computed: {
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
    <div class="carousel">
        <div class="container-car" >
            <div class="row">
                <img class="img-car" :src=" itemCarousel[currentIndex].imgBack " alt=""/>
                <div class="info-car">
                    <ul>
                        <li>
                            Titolo:
                            <div class="information">{{ itemCarousel[currentIndex].title }}</div>
                        </li>
                        <li>
                            Titolo originale:
                            <div class="information">{{ itemCarousel[currentIndex].originalTitle }}</div>
                        </li>
                        <li>
                            Lingua:
                            <img class="img-flags" :src="srcImg" alt="">
                            <div class="information">{{ itemCarousel[currentIndex].language }}</div>
                        </li>
                        <li>
                            <!-- Voto:
                            <div class="information">{{ itemCarousel[currentIndex].vote }}</div> -->
                        <li v-if=" calcVote > 0" class="star-vote" >
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

.carousel {
padding-top: 30px;

    .container-car {
        max-width: 800px;
        // height: 400px;
        margin: 0 auto;
        border: 3px solid black;
        
        .row {
            justify-content: flex-start;
            height: 100%;

            .img-car {
                width: 520px;
                height: 350px;
                object-fit: cover;
            }

            .info-car {
                flex-grow: 1;
                background-color: black;
                padding: 5px;
                

                li {
                    padding-top: 5px;
                    font-weight: 900;
                    font-size: 24px;
                    color: orange;

                    .information {
                        font-weight: 300;
                        font-size: 22px;
                        color: white;
                    }
                }

            }
        }

    }
}

.img-flags {
    width: 20px;
}
</style>