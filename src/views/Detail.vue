<template >
    <div class="detail" v-if="filminfo">
     
        <!-- <div class="detailtitle " v-title='30'>
            <i class="iconfont icon-xiazai6"></i>
            <span>{{filminfo.name}}</span>
        </div> -->
        <!-- {{id}}
        {{$route.query.title}}
        详情页面.... {{$route.params.id}} -->

        <m-title v-title='30'
        @back='handleBack'
        
        >
            {{filminfo.name}}
        </m-title>
        <div class='poster'>
            <img class='poster1' :src="filminfo.poster" alt="">
        </div>
        <div class="detail-con" > 
           <p><i>{{filminfo.name}}</i><em>{{filminfo.filmType.name}}</em> <span>{{filminfo.grade}}分</span></p>
           <p>{{filminfo.category}}</p>
           <p>{{filminfo.premiereAt | dataFilter}}</p>
           <p>{{filminfo.nation}} | {{filminfo.runtime}}</p>
           <div :class="{synopsis:isActive}">{{filminfo.synopsis}}</div>
            <i @click="isActive=!isActive" class="iconfont dianji" :class="isActive?'icon-jiantoushang':'icon-jiantouarrow483'"></i>
           <div class='actor2'>
               <p>演职人员</p>
                <swiper cName='actors' v-if='filminfo.actors'>
                    <div v-for='(data,index) in filminfo.actors'
                    :key='index'
                    class='swiper-slide'
                    v-swiper="{
                        current:index,
                        length:filminfo.actors.length,
                        swipe:'actors',
                        free:{
                            slidesPerView: 3.7,
                            spaceBetween: 10,
                            freeMode: true
                        }
                        }"                    
                    >
                    <img class='yanyuan' :src="data.avatarAddress" alt="">
                    </div>
                </swiper>
               <div v-else>无演职人员</div>
           </div>

           <h5 @click="isPhotoShow=true">剧照</h5>
           <swiper cName='photos' v-if='filminfo.photos'>
               <div v-for="(data,index) in filminfo.photos"
                :key="data"
                class="swiper-slide"
                v-swiper="{
                    current:index,
                    length:filminfo.photos.length,
                    swipe:'photos',
                    free:{
                        slidesPerView: 2.4,
                        spaceBetween: 10,
                        freeMode: true
                    }   
                }">
                    <img class='photos' :src="data" alt="">
               </div>
           </swiper>
           <div v-else>暂无剧照</div>
        </div>
        <Photo v-show="isPhotoShow" 
        @event='previewImg'
        :list="filminfo.photos">
            <m-title @back="handlePhoto">
                剧照({{filminfo.photos&&filminfo.photos.length}})
            </m-title>
        </Photo>
    </div>
</template>

<script>
import { instance } from "../utils/http";
import swiper from "../components/swiper";
import Vue from "vue";
import "../utils/filters.js";
import Photo from "./Detail/Photo";

import { ImagePreview } from "vant";

Vue.use(ImagePreview);
// Vue.directive('title',{
//     inserted(el,binding){
//         el.style.display = "none"
//         window.onscroll = ()=>{
//             if((document.body.scrollTop || document.documentElement.scrollTop)>binding.value){
//                 el.style.display = "block"
//             }else{
//                 el.style.display = "none"
//             }
//         }
//     },
//     unbind(){
//         window.onscroll = null
//     }
// })
export default {
  components: {
    swiper,
    Photo
  },
  methods: {
    previewImg(index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: "top-left"
      });
    },
    handlePhoto() {
      this.isPhotoShow = false;
    },
    handleBack() {
      this.$router.back(); //采用的编程式导航跳转
    }
  },
  data() {
    return {
      filminfo: null,
      isPhotoShow: false,
      isActive: true
    };
  },
  beforeRouteUpdate(to, from, next) {
    //console.log('detail gai bian ---')
    next();
  },
  //props:['id'],
  created() {
    //需要获取nowplaying这边传递来的每个电影的id  /detail/:id
    // console.log(this.id)
    // console.log(this.$route.params.id)
    instance
      .get(`/gateway?filmId=${this.$route.params.id}&k=7132851`, {
        headers: {
          "X-Host": "mall.film-ticket.film.info"
        }
      })
      .then(res => {
        //console.log(res)
        this.filminfo = res.data.data.film;
        console.log(1111, this.filminfo);
      });
    
  
  },
  mounted() {
  }
};
</script>

<style lang='scss' scoped>
.detailtitle {
  height: 0.44rem;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 0.44rem;
  text-align: center;
  i {
    position: absolute;
    left: 0px;
  }
}
h5 {
  height: 0.2rem;
  margin-top: 20px !important;
}
.photos {
  width: 100%;
}
.yanyuan {
  width: 0.85rem;
  height: 0.85rem;
}
.dianji {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.actors,
.swiper-wrapper {
  height: 100%;
}
.actor2 {
  //margin-top: 15px;
}
.synopsis {
  height: 40px;
  overflow: hidden;
}
.detail-con {
  padding: 15px;
  height: 100%;
  position: relative;
}
.poster {
  height: 100%;
}
.detail {
  height: 100%;
}
img {
  width: 100%;
}
</style>




