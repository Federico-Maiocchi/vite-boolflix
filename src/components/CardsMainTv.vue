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
        original_language: ''

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
    <div class="col-3">
        <div class="card " v-if="store.pushButton === true">
            <ul >
                <li> {{ itemTv.name }}</li>
                <li>{{ itemTv.original_name }}</li>
                <li>{{ itemTv.original_language }}</li>
                <li>
                    <img class="img-flags" v-if="srcImg" :src="srcImg" alt="">
                </li>
                <li>{{ itemTv.vote_average }}</li>
            </ul>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.card {
    background-color: white;
    padding: 5px;
    height: 100%;
    
    

}

.col-3 {
    padding: 10px;
    height: 100%;
}

.img-flags {
    width: 20px;
}

</style>