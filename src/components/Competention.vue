<template>
    <div class="ginoplogo" :style="{display: visible ? 'block': 'none'}">
    <div class="img_wrp">
        <a :href="`${$route.meta.basePath || ''}/` + 'competention'">
            <img src="../assets/img/MFF kedvezményezetti infóblokk keretes-1.jpg" alt="Európai Uniós támogatásból megvalósuló fejlesztések">
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