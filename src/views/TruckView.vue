<template>
    <Header :isHome="false"/>
    <TruckTitle/>
    <TruckDescription/>
</template>
<script>
import Header from '../components/Header.vue'
import TruckTitle from '../components/Trucks/TruckTitle.vue'
import TruckDescription from '../components/Trucks/TruckDescription.vue'
export default {
  name: 'App',
  components: {
    Header,
    TruckTitle,
    TruckDescription,
    
  },
}
</script>
