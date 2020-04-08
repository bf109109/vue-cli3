import Vue from 'vue'
import Vuex from 'vuex'
import {instance} from '@/utils/http'
import cinema from './module/cinemamodule'
import tabbar from './module/tabbarmodule'
import city from './module/city'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)   

let store =  new Vuex.Store({
  plugins:[createPersistedState(
    {
      reducer(data){
        return {
          city:data.city  //这样的话持久化字段就只有city字段了。
        }
      }
    }
      
  )],
  // state: {
  //   isTabbarShow:true,
  //   cinemaList:[]
  // },
  // mutations:{
  //   show(state){
  //     state.isTabbarShow = true
  //   },
  //   hide(state){
  //     state.isTabbarShow = false
  //   },
  //   setCinemaList(state,data){
  //     state.cinemaList=data
  //   }
  // },
  // getters:{
  //   topDataList(state){
  //     return state.cinemaList.splice(0,5)
  //   }
  // },
  // actions:{
  //   getCinemaActions(store){
  //     instance.get("/gateway?cityId=310100&ticketFlag=1&k=4111314",{
  //       headers:{
  //           "X-Host": "mall.film-ticket.cinema.list"
  //       }
  //   }).then(res=>{
  //       // this.datalist = res.data.data.cinemas
  //       store.commit("setCinemaList",res.data.data.cinemas)
  //   })
  //   }

  // }
  
    modules:{
      cinema, //影院的模块
      tabbar, //tabbar的模块
      city
    }
  
})

export default store
