import Vue from 'vue'
import moment from 'moment'
Vue.filter('actorsFilter',(data)=>{
    if(data){
        return data.map(item=>{
            return item.name
    
    }).join(' ')
    }else{
        return '暂无主演'
    }
   
})

Vue.filter('dataFilter',(data)=>{
    
        return moment(data*1000).format('YYYY-MM-DD')
   
})