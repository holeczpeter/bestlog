<template>
    <Header :isHome="false"/>
    <TruckTitle/>
    <TruckDescription/>
    <Footer :isHome="false"/>
</template>
<script>
import Header from '../components/Header.vue'
import TruckTitle from '../components/Trucks/TruckTitle.vue'
import TruckDescription from '../components/Trucks/TruckDescription.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    TruckTitle,
    TruckDescription,
    Footer
  },
}
</script>
