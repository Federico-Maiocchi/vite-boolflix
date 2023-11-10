<script >
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue'
import axios from 'axios'

export default {

data() {
  return {
    API_KEY: '5e3ea58eab7f4c3d273363cc5f67ced4',
    query: 'harry potter e la pietra filosofale'
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
    console.log('click button')
    axios.get('https://api.themoviedb.org/3/search/movie',{
      params : {
        api_key: this.API_KEY,
        query: this.query
      }
    }).then(res => {
      console.log(res.data.results)
    })

  }
},

mounted() {
  
}


}
</script>

<template>
  <HeaderPage
    @search="searchApi" />

  <MainPage/>
</template>

<style lang="scss" >
@use './styles/reset.scss';
@use './styles/general.scss';

</style>
