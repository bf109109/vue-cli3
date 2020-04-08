import Vue from "vue"
import Swiper from "swiper"
Vue.directive("swiper",{
    inserted(el,binding,vnode){
        //代表最后一个元素插入完毕了，再进进行一次实例化操作就可以了
        if(binding.value.current === binding.value.length-1){
            new Swiper("."+binding.value.swipe,{ //默认swiper执行3次，因为插入了3个swiper-slide的真实dom
               ...binding.value.free,
                //loop:true,
                pagination:{
                    el:".swiper-pagination"
                }
            })
        }
    }

    
})

Vue.directive("title",{
    //插入到dom之后的钩子函数
    inserted(el,binding){
        el.style.display = "none"
        window.onscroll = ()=>{
            if((document.body.scrollTop || document.documentElement.scrollTop)>binding.value){
                el.style.display = "block"
            }else{
                el.style.display = "none"
            }
        }
    },
    //指令的解绑的钩子函数
    unbind(){
        window.onscroll = null
    }
})