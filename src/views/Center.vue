<template>
    <div class="center">
        center...
        <!-- lisi de daima  -->
    </div>
</template>

<script>
//li si zai master shang xiu gai wenjian 
export default {
    //詹三修改的master wen jian 
    //zhang san di er ci xiugai 
    beforeRouteEnter (to, from, next) {
        console.log(this,'center---beforerouterenter')
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log('li kai center---beforerouterleave')
        console.log(this)
        next()
    }
}
</script>

<style>

</style>
