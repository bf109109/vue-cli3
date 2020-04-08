<template>
    <nav>
      <ul>
        <!-- <router-link to="/films" tag="li" active-class="active">电影</router-link>
        <router-link to="/cinema" tag="li" active-class="active">影院</router-link>
        <router-link to="/center" tag="li" active-class="active">个人</router-link> -->

        <!--router-link的跳转-声明式导航-->
        <!-- <router-link
          v-for="nav in navlist"
          :key="nav.id"
          :to="nav.path"
          tag="li"
          active-class="active"
        >{{nav.title}}</router-link> -->
        <router-link v-for='nav in navlist' :to="nav.path" :key='nav.id' active-class='active' tag='li'>
          <i class='iconfont ' :class='nav.icon'></i><span>{{nav.title}}</span></router-link>

       <!-- <a href="#/films">电影</a>
       <a href="#/cinema">影院</a>
       <a href="#/center">个人</a> -->
      </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
        navlist:[
            {id:1,title:"电影",path:"/films",icon:'icon-dianying1'},
            {id:2,title:"影院",path:"/cinema",icon:'icon-dianying'},
            {id:3,title:"我的",path:"/center",icon:'icon-geren'}
        ]
        }
    }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.active{
    color:orange;
  }
  nav{
    position: fixed;
    left:0px;
    bottom:0px;
    width:100%;
    height:0.5rem;
    z-index:10;
    ul{
      display: flex;
      li{
        flex:1;
        line-height: 0.25rem;
        text-align: center;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span{
          line-height: 25px;

        }
        i{
          line-height: 25px;
          font-size: 24px;
        }
      }
    }
  }
</style>
