<template>
    <div class="cinema">
        <div class="title">
            <div class="left" @click='handleChangePage("/city")'>{{cityname}}</div>
            <div>影院</div>
            <div class="right" @click="handleChangePage('/cinema/search')"><i class="iconfont icon-jiantoushang"></i></div>
        </div>
        <div class="select">
            <div :class="isAreaShow?'active':''" class="left" @click="isAreaShow=!isAreaShow">{{current}}</div>
            <div>App订票</div>
            <div class="right">最近去过</div>
        </div>

        <!--点击城市切换-->
        <div class="area" v-show="isAreaShow">
            <ul>
                <li 
                    v-for="data in areaList"
                    :key="data"
                    @click="handleArea(data)"
                    :class="{active:data===current}"
                >{{data}}</li>
            </ul>
        </div>

        <div class="content" :style='{height:scrollHeight,overflow:"hidden"}'>
            <ul>
                <!-- <li 
                    v-for="data in computedDatalist"
                    :key="data.cinemaId"
                >
                    <h4>{{data.name}}</h4>
                    <p>{{data.address}}</p>
                </li> -->
                <CinemaItem v-for='data in computedDatalist'
                :key='data.cinemaId'
                :data='data'
                @click.native='clickme'
                >


                </CinemaItem>
            </ul>
        </div>
    </div>
</template>

<script>
import {instance} from "@/utils/http"
import CinemaItem from './Cinema/CinemaItem'
import {mapState,mapActions, mapMutations}
 from 'vuex'
 import Vue from 'vue';
import { Toast } from 'vant';
import BetterScroll from 'better-scroll'

Vue.use(Toast);
export default {
    components:{
        CinemaItem,
        
    },
    mounted(){
        this.scrollHeight=document.documentElement.clientHeight-80-50+'px'
        new BetterScroll('.content',{
            scrollbar:{
                fade:true
            },
            click:true
        })
    },
    data(){
        return {
            //datalist:[],
            isAreaShow:false,
            current:"全城", //选中的是那个区
            scrollHeight:0,
        }
    },
    methods:{
        clickme(){
            console.log(2222)
        },
        handleChangePage(path){
            if(path==='/city'){
                this.setCinemaList([])
            }
            this.$router.push(path)
        },
        handleArea(data){
            this.current = data;
            this.isAreaShow = false;//弹窗消失掉
        },
        ...mapActions('cinema',['getCinemaActions']),
        ...mapMutations('cinema',['setCinemaList'])
    },
    computed:{
        ...mapState('cinema',['cinemaList']),
        ...mapState('city',['cityname','cityId']),
        //所有区域的计算属性
        areaList(){
            //获取所有城市的所有区域的数组
            let newarr = this.cinemaList.map(item=>item.districtName);
            //利用set结构进行数组去重
            let arealist = ["全城",...Array.from(new Set(newarr))]
            return arealist
        },
        //根据current区域，过滤出相应区域的影城
        //例如选择是金山区区域，那么数组过滤出新的数组，这个新数组里面全部放着就是金山区的所有的影院了
        computedDatalist(){
            if(this.current === "全城") return this.cinemaList
            return this.cinemaList.filter(item=>item.districtName === this.current)
        }
    },
    created(){
        // instance.get("/gateway?cityId=310100&ticketFlag=1&k=4111314",{
        //     headers:{
        //         "X-Host": "mall.film-ticket.cinema.list"
        //     }
        // }).then(res=>{
        //     // console.log(res.data.data.cinemas)
        //     this.datalist = res.data.data.cinemas
        // })
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
            overlay:true
        });
        if(this.cinemaList.length>0){
            Toast.clear()
        }else{
            // this.$store.dispatch('cinema/getCinemaActions')
            // this.getCinemaActions(this.cityId)
            this.getCinemaActions(this.cityId).then(res=>{
                Toast.clear()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .active{
        border:1px solid orange!important;
        color:orange;
    }
    .title{
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        background: #fff;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #f5f5f5;
        z-index:10;
        div{
            flex:1;
            text-align: center;
        }
        .left{
            text-align: left
        }
        .right{
            text-align: right
        }
    }
    .select{
        position: fixed;
        top: 40px;
        height: 40px;
        line-height: 40px;
        background: #fff;
        width: 100%;
        display: flex;
        border-bottom: 1px solid #f5f5f5;
        z-index:10;
        div{
            flex:1;
            text-align: center;
        }
    }
    .area{
        position: fixed;
        top: 80px;
        left: 0px;
        width: 100%;
        z-index: 10;
        background: #fff;
        ul{
            display: flex;  
            flex-wrap: wrap;
            li{
                width:22%;
                padding: 5px;
                border:1px solid #f4f4f4;
                text-align: center;
                margin:5px;
            }
        }
    }
    .content{
        position: relative;
        top: 80px;
        li{
            padding:.15rem;
            border-bottom: 1px solid #f5f5f5;
        }
    }
</style>
