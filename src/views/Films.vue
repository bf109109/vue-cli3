<template>
    <div class="films">
        <swiper cName='swipe'>
            <div class="swiper-slide" 
            v-for='(banner,index) in banners'
             :key="banner.bannerId"
             v-swiper='{
                 current:index,
                 length:banners.length,
                 swipe:"swipe"
                 }'
            >
            <img :src="banner.imgUrl" alt="">
            </div>
        </swiper>
        <div>
            导航栏
        </div>
        <!--路由容器-->
        <router-view></router-view>
    </div>
</template>
<script>
import Swiper from '../components/swiper'
import axios from 'axios'
import {instance,instance2} from '../utils/http'
//import Swip from 'swiper'
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState('city',['cityId'])
    },
    components:{
        swiper:Swiper,
    },data(){
        return {
            banners:[]
        }
    },
    created(){
        instance.get(`/gateway?type=2&cityId=${this.cityId}&k=3419992`,{
            headers:{
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res=>{
            //console.log(res)
            this.banners=res.data.data
            // this.$nextTick(()=>{
            //     new Swip(".swiper-container")
            // })
        })

        // instance2.get("/api/goods/stu3").then(res=>{
        //     console.log("/goods/home的数据",res)
        // }).catch(err=>{
        //     console.log("err",err)
        // })
    }
}
</script>
<style lang="scss" scoped>
    img{
        width:100%;
        
    }
</style>
