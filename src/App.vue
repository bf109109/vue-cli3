<template>
  <div id="app">
   <!-- app.vue ..... -->
   <!-- <child></child> -->
    <transition name="app" mode="out-in">
      <router-view></router-view>   
    </transition>
   <Tabbar v-show='isTabbarShow'></Tabbar>
  </div>
</template>
<script>
import child from '@/components/child.vue'
import Tabbar from '@/components/Tabbar'
import {mapState} from 'vuex'
export default {
  components: {
    child,
    Tabbar
  },
  computed:{
    ...mapState('tabbar',['isTabbarShow'])
  },
  created(){
    console.log(this)
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
#app{
height:100%;
background:white;
}
ul,li{
  list-style: none;
}
.app-enter-active{
      animation: move .5s;
    }
    .app-leave-active{
      animation: move .5s reverse;
    }

    @keyframes move{
      0%{
        opacity: 0;
        transform: translateY(50px)
      }
      100%{
        opacity: 1;
        transform: translateY(0px)
      }
    }
</style>
