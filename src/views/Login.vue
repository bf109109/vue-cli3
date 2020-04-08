<template>
    <div class='login'>
        <!-- <button @click="login">登录</button> -->
        <form @submit.prevent='login'>
            <!-- <input type="text" v-model='username'><br>
            <input type="text" v-model='password'>
            <br>
            <input type="submit"> -->

        
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"
            height='200px'
            >
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            </van-swipe>

            <van-field v-model="username" label="用户:"  placeholder="请输入用户名"/>
            <van-field v-model="password" type="password" label="密码："  placeholder="请输入密码"/>
           
            <van-button type="primary">登录</van-button>
           
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import { Field,Button,Swipe, SwipeItem} from 'vant'
import {instance2} from "@/utils/http"
Vue.use(Field)
Vue.use(Button)
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    data(){
        return {
            password:'',
            username:''
        }
    },
    methods:{
        login(){
            // setTimeout(() => {
            //     localStorage.setItem("token","adljalkdjasljdsal.saldjlkajdal.ljaldkajdl")
            //     this.$router.replace("/center")
            // }, 1000);

            // instance2.post("/api/login",{
            //     username:"wu",
            //     password:"123456"
            // }).then(res=>{
            //     console.log(res)
            //     //将token保存到本地存储里面去
            //     localStorage.setItem("token",res.token)
            //     //跳转到个人中心
            //     this.$router.replace("/center")
            // })
            if(!this.password.trim()||!this.username.trim()){
                alert('xinxi wei wan zheng')
                return;
            }
            instance2.post("/api/login",{
                username:this.username,
                password:this.password,
            }).then(res=>{
                //console.log(res)
                //将token保存到本地存储里面去
                localStorage.setItem("token",res.token)
                //跳转到个人中心
                this.$router.replace("/center")
            }).catch(err=>{
                alert(err)
            })


        }
    }
}
</script>

<style lang='scss'>
.login{
    margin-top:1rem;
    button{
        width: 100%;
        margin-top: 10px;
    }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
