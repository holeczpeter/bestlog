<template>
    <Header :isHome="false"/>
    <ServiceTitle/>
    <ServiceDescription/>
    <Footer :isHome="false"/>
</template>
<script>
import Header from '../components/Header.vue'
import ServiceTitle from '../components/Services/ServiceTitle.vue'
import ServiceDescription from '../components/Services/ServiceDescription.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    ServiceTitle,
    ServiceDescription,
    Footer
  },
}
</script>

