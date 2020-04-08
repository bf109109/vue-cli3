const module = {
    namespaced:true,
    state:{
        cityname:'北京',
        cityId:'110100',

    },
    mutations:{
        setcityname(state,name){
            state.cityname=name
        },
        setCityId:function setCityId(state,cityId){
            state.cityId=cityId
        }
    }
}
export default module