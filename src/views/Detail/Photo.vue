<template>
    <div class="photo">
        <slot></slot>
        <ul>
            <li @click="previewImg(index)" v-for="(data,index) in list" :key="data">
                <img :src="data" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import { ImagePreview } from 'vant';
Vue.use(ImagePreview);
export default {
    props:["list"],
    methods:{
        previewImg(index){
            this.$emit('event',index)
        }
    }
}
</script>

<style lang="scss" scoped>
    .photo{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        min-height:100%;
        background: #fff;
        z-index:10;
        overflow-y: auto;  //写上
        ul{
            position: relative;
            top:50px;
            display: flex;
            flex-wrap: wrap;
            li{
                width:33.3333%;
                padding: 3px;
                height:1.24rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
</style>
