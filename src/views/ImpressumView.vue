<template>
    <Header :isHome="false"/>
    <ImpressumTitle/>
    <ImpressumDescription/>
    <Footer :isHome="false"/>
</template>
<script>
import Header from '../components/Header.vue'
import ImpressumTitle from '../components/Impressum/ImpressumTitle.vue'
import ImpressumDescription from '../components/Impressum/ImpressumDescription.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    ImpressumTitle,
    ImpressumDescription,
    Footer
  },
}
</script>
