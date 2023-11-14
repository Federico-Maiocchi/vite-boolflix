<script >
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue'
import axios from 'axios'
import { store } from './store'

export default {

  data() {
    return {

      API_KEY: '5e3ea58eab7f4c3d273363cc5f67ced4',
      store: store,

    }
  },

  components: {
      HeaderPage,
      MainPage
  },
  created() {
    

  },

  methods: {
    searchApi() {

      if(this.store.textQuery === '') {
        store.movie = []
        store.tv = []
        return
      }


      // console.log('click button')
      axios.get('https://api.themoviedb.org/3/search/movie',{
        params : {
          api_key: this.API_KEY,
          query: this.store.textQuery
        }
      }).then(res => {
        // console.log(res.data.results)
        const objMovie = res.data.results

        this.store.movie = objMovie
        console.log('movie', this.store.movie)

        this.store.pushButton = true

      })
      .catch(err => {
        console.log(err.err.results)
      })


      axios.get('https://api.themoviedb.org/3/search/tv',{
        params: {
          api_key: this.API_KEY,
          query: this.store.textQuery
        }
      }).then(res => {

        const objTv = res.data.results

        this.store.tv = objTv
        console.log('series', this.store.tv)
        
        this.store.pushButton = true
      }) 
      .catch(err => {
        console.log(err.err.results)
      })
    },

    

},

mounted() {
  
}


}
</script>

<template>
  <div class="body-app">
    <HeaderPage
    @search="searchApi"
    @searchEnter="searchApi" />
    <MainPage/>
  </div>
  
  
  
</template>

<style lang="scss" >
@use './styles/reset.scss';
@use './styles/general.scss';

.body-app {
  overflow: hidden;
}

</style>
