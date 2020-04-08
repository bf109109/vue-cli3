
const module = {
    namespaced: true,//开启命名空间
    state:{
        isTabbarShow:true, //定义tabbar的显示的状态
    },
    mutations:{
        show(state){
            state.isTabbarShow = true
        },
        hide(state){
            state.isTabbarShow = false
        }
    }
}

export default module