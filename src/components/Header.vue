<template>
   <header class="header-style2" :class="[fixedHeader ? 'fixedHeader' : 'scrollHeader']" >
      <div class="top-bar bg-primary">
         <div class="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
            <div class="row">
               <div class="col-md-9 col-xs-12">
                  <div class="top-bar-info">
                     <ul class="ps-0">
                        <li><i class="ti-mobile"></i>{{company.phone}}</li>
                        <li class="d-none d-sm-inline-block"><i class="ti-email"></i>{{company.email}}</li>
                     </ul>
                  </div>
               </div>
               <div class="col-xs-12 col-md-3 d-none d-md-block">
                  <ul class="top-social-icon ps-0">
                     <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                     <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                     <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                     <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="navbar-default border-bottom border-color-light-white">
         <div class="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
            <div class="row align-items-center">
               <div class="col-12 col-lg-12">
                  <div class="menu_area alt-font">
                     <nav class="navbar navbar-expand-lg navbar-light p-0">
                        <div class="navbar-header navbar-header-custom">
                           <a class="navbar-brand logodefault"  href="#" v-scroll-to="'#home'" title="Best-Log Kft" rel="home" v-if=isHome>
                           <img id="logo" src="../assets/BestLog_fekete_CMYK.jpg" alt="logo"/>
                           </a>
                           <a class="navbar-brand logodefault"   :href="`${$route.meta.basePath || ''}/`"  title="Best-Log Kft" rel="home" v-if=!isHome>
                           <img id="logo" src="../assets/BestLog_fekete_CMYK.jpg" alt="logo"/>
                           </a>
                        </div>
                        <div class="navbar-toggler bg-primary" :class="{ 'menu-opened': isOpen }" @click="toggleMobileMenu"></div>
                        <ul class="navbar-nav ms-auto" id="nav" :style="{display: isOpen ? 'block': ''}">
                           <li v-for="(item, index) in menuitems" 
                              :key="index" 
                              :class="[ item.hasChildren ? 'has-sub' : '']"
                              @click="toggleSubmenu(item.id)">
                              <span v-if="item.hasChildren" 
                                 class="submenu-button">
                              </span>
                              <a :href="`${$route.meta.basePath || ''}/`" v-scroll-to="item.routerlink" v-if=isHome>{{ item.title }}</a>
                              <a :href="`${$route.meta.basePath || ''}/` + item.routerlink" v-if=!isHome>{{ item.title }}</a>
                              <ul v-if="item.hasChildren" :class="{ 'open': item.open }" :style="{display: item.open ? 'block': 'none'}">
                                 <li v-for="(child, index) in item.children" 
                                    :key="index" class="sub-menu">
                                    <a :href="'services/' + child.id">{{child.title}}</a> 
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>
<script>
import { data } from '@/assets/js/menu.js'; 
import { info } from '@/assets/js/company.js'; 
export default {
  props: ['isHome'],
  name: 'Header',
  components: {
    
  },
 data() {
    return {
      company: info,
      count:0,
      menuitems: data.items,
      fixedHeader: true,
      mobileMenuVisible: false,
      isOpen:false,
      isWeb: true
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkScreenWidth);
  },
   unmountad() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    handleScroll() {
      if (window.scrollY <= 50) {
          this.fixedHeader = true;
        } else {
          this.fixedHeader = false;
        }
    },
    initialize() {
      window.addEventListener("resize", this.checkScreenWidth);
    },
    checkScreenWidth() {
      this.mobileMenuVisible = window.matchMedia('only screen and (max-width: 992px)').matches;
    },
    toggleMobileMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleSubmenu(id) {
      const current = this.menuitems.find(x=>x.id == id);
      current.open = !current.open;
    },
  }
}
</script>
