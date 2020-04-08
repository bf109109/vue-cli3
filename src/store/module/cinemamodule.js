
import {instance} from "@/utils/http"
const module = {
    namespaced: true,//开启命名空间
    state:{
        cinemaList:[]  //默认城市影院
    },
    getters:{
        topDataList(state){
            return state.cinemaList.splice(0,5)
        }
    },
    actions:{
        getCinemaActions(store,cityId){   
            instance.get(`/gateway?cityId=${cityId}&ticketFlag=1&k=4111314`,{
                headers:{
                    "X-Host": "mall.film-ticket.cinema.list"
                }
            }).then(res=>{
                // this.datalist = res.data.data.cinemas
                store.commit("setCinemaList",res.data.data.cinemas)
            })
        }
    },
    mutations:{
        setCinemaList(state,data){
            state.cinemaList = data
        }
    }
}
export default module