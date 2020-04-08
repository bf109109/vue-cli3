<template>
    <div class="center">
        center...
    </div>
</template>

<script>
export default {
    //詹三修改的master wen jian 
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
