<template>
  <div id="app" class="page">
    <router-view/>
    <Competention/>
    <ScrollToTop/>
  </div>
</template>

<script>

import ScrollToTop from './components/ScrollToTop.vue'
import Competention from './components/Competention.vue'
export default {
  name: 'App',
  components: {

    ScrollToTop,
    Competention
  },
  
  metaInfo () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
     
    }
  },
}
</script>