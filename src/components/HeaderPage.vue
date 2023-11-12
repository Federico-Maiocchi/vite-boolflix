<script>
import { store } from '../store';

export default {
    emits:['search','searchEnter'],

  data() {
    return {
        store:store,

        text: '',
    }
  },

  methods: {
    upSearch() {
        this.$emit('search', 'searchEnter')
    }

  }


}
</script>

<template>
    <div class="header-page">
        <div class="container-fluid">
            <div class="row">
                <div>
                    <h2>Boolflix</h2>
                </div>
                <div>
                    <input 
                        class="bar-search" 
                        type="text" 
                        placeholder="cerca un film o una serie tv"
                        @keyup.enter="upSearch"
                        v-model="store.textQuery">
                    <button @click="upSearch" class="btn-search">Cerca</button>
                </div>  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.header-page {
    background-color: black;
    padding: 30px 40px;

    .container-fluid {
        max-width: 100%;
    
        
        .row {
            justify-content: space-between;
            align-items: center;


            h2 {
                color: red;
                text-transform: uppercase;
            }

            .bar-search {
                line-height: 20px;
                font-size: 15px;
                margin-right: 10px;
            }

            .btn-search {
                line-height: 24px;
                padding: 0px 10px;
                font-size: 15px;
                font-weight: 900;
                background-color: white;
                border: none;
                cursor: pointer;
            }


        }
    }
}

.color-white {
    color: white;
}

</style>