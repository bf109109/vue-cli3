<template>
    <div class="nowplaying">
        <!-- 正在热映.... -->
        <ul>
            <!-- <li 
                v-for="data in datalist"
                :key="data"
                @click="toDetail(data)"
            >{{data}}</li> -->

            <!-- <router-link v-for='data in datalist'
            :key='data' tag='li'
            :to='{
                name:"detail",
                params:{id:data},
                query:{title:"二"}
            }'
            >
            {{data}}</router-link> -->

            <router-link 
                v-for='(data,index) in datalist'
                :key='index'
                tag='li'
                :to='{
                name:"detail",
                params:{id:data.filmId}
                }'>
                <img :src="data.poster" alt="">
                <h5>{{data.name}} <span>{{data.item.name}}</span></h5>
                <p>观众评分 {{data.grade}}</p>
                <p class='actors'>主演:{{data.actors |actorsFilter}}</p>
                <p>{{data.nation}} | {{data.runtime}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>


import {instance} from '../../utils/http'
import '../../utils/filters.js'
export default {
    data(){
        return {
            // datalist:["1111","2222","3333"]
            datalist:[]
        }
    },
    created(){
        instance.get('/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4037901',{headers:{
            'X-Host': 'mall.film-ticket.film.list'
        }
        }).then(res=>{
            //console.log(res)
            this.datalist = res.data.data.films
        })
    },
    methods:{
        toDetail(id){
            //组件的$router上面提供了很多的跳转方法，把这些跳转的方式称之为编程式导航。
            // this.$router.push("/center")
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style lang='scss'>
    li{
        padding: 20px 10px 20px 10px;
        border-top:1px solid #ccc;
        overflow: hidden;
        img{
            float: left;
            width: 1rem;
            height: 0.9rem;
        }
    }
    .actors{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
