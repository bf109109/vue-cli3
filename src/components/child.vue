<template>
    <div>
        <p>child ..........{{msg}}</p>
        <input type="text" v-model='msg'>

    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: 'cccccccccccc/////'
    }
  },
  created () {
    fetch('/films.json').then(res => (res.json())).then(res => (console.log(res)))

    axios.get('/api/ajax/movieOnInfoList?token=&optimus_uuid=C65FF030043711EAA90DB72AF81017842766AFA17B0B4FC182E45BB02A3963B2&optimus_risk_level=71&optimus_code=10').then(res=>{
        console.log(res)
    })

    axios.get("http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1585277590831&summary=38f67935ccedd58f5694ee8858365067").then(res=>{
            console.log(res)})

    axios({
            url:"https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8497085",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15587791402160368550306","bc":"310100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log(res)
        })
  }
}
</script>
<style lang='scss' >
// div{
//     height: 100px;
//     >p{
//         background:red;
//         font-size: 16px;
//     }

// }
</style>
