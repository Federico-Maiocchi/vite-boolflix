<script >
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue'

export default {

data() {
  return {
    
  }
},

components: {
    HeaderPage,
    MainPage
},

methods: {

},

mounted() {
  
}


}
</script>

<template>
  <HeaderPage/>
  <MainPage/>
</template>

<style lang="scss" >
@use './styles/reset.scss';
@use './styles/general.scss';

</style>
