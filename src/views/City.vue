<template>
    <div class="city">
        <div class="top">
            <i class='iconfont icon-xiazai6 ' @click='$router.push("/films/nowplaying")'></i>
            <span>当前城市</span>
        </div>

        <van-search
            
            shape="round"
            background="green"
            placeholder="请输入搜索关键词"
            />

        <van-index-bar :index-list='indexlist'>
            <div v-for='(data,index) in datalist'
            :key='index'>
                <van-index-anchor :index="data.index" />
                <van-cell :key='index' 
                v-for='(item,index) in data.list'
                @click='handleclick(item)'
                :title="item.name" />
            </div>
        </van-index-bar>
    </div>
</template>

<script>
    import Vue from 'vue';
   import { Search,IndexBar, IndexAnchor,Cell } from 'vant';
   import {mapMutations} from 'vuex'
   import {instance} from "@/utils/http"

   Vue.use(Search);
   Vue.use(IndexBar);
    Vue.use(IndexAnchor);
    Vue.use(Cell);
    export default {
        components:{
            
        },
        data(){
            return {
                datalist:[],
                indexlist:[]
            }
        },
        created(){
            instance("/gateway?k=6077446",{
                headers:{
                    'X-Host': 'mall.film-ticket.city.list'
                }
            }).then(res=>{
                this.datafilter(res.data.data.cities)
            })
        },
        methods:{
            ...mapMutations('city',['setcityname','setCityId']),
            handleclick(item){
                this.setcityname(item.name)
                this.$router.push('/cinema')
                this.setCityId(item.cityId)
            },
            datafilter(cities){
                let letterarr=[]
                for(var i=65;i<91;i++){
                    letterarr.push(String.fromCharCode(i))
                }
                var cityarr=[]
                for(var j=0;j<letterarr.length;j++){
                    let temparr=cities.filter(item=>item.pinyin.substring(0,1).toUpperCase()===letterarr[j])

                    if(temparr.length>0){
                        cityarr.push({
                            index:letterarr[j],
                            list:temparr
                        })
                        this.indexlist.push(letterarr[j])
                    }
                }
                this.datalist=cityarr
            }
        }
    }
</script>

<style lang='scss' scoped>
.top{
    height:.44rem;
    width:100%;
    background: #fff;
   
    line-height: .44rem;
    //text-align: center;
    z-index:10;
    >span{
        margin-left: 150px;
        line-height: .44rem;
        font-size: 16px;
    }

}

</style>