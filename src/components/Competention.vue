<template>
    <div class="mologo" :style="{display: visible ? 'block': 'none'}">
    <div class="img_wrp">
        <a 
             href="https://domain.hu/europai-unios-tamogatasbol-megvalosulo-fejlesztesek/" 
           target="_blank">
            <img src="../assets/img/szechenyi-2020-logo-bottom.png" alt="Európai Uniós támogatásból megvalósuló fejlesztések">
            
        </a>
        <a class="close" @click="visibility">
            <i class="fa-regular fa-rectangle-xmark"></i>
        </a>
       
    </div>
    </div>
</template>
<script>
export default {
  name: 'Competention',
  data() {
    return {
      visible: true,
    };
  },
 
  methods: {
    
    visibility() {
      this.visible = !this.visible
    },
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkScrollPosition);
  },
}
</script>