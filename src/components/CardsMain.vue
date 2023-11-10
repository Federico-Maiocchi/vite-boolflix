<script>
import { store } from '../store'

export default {
    props:{

        itemMovie: Object

    },

    data() {
    return {
        store:store,
    }
    },

    methods: {

    }


}


</script>

<template>
    <div class="col-3">
        <div class="card " v-if="store.pushButton === true">
            <ul >
                <li> {{ itemMovie.title }}</li>
                <li>{{ itemMovie.original_title }}</li>
                <li>{{ itemMovie.original_language }}</li>
                <li>{{ itemMovie.vote_average }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: white;
    padding: 20px 20px;
    height: 100%;
    
    

}

.col-3 {
    padding: 10px;
    height: 100%;
}

</style>