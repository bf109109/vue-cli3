<template>
    <li>
        <h4>{{data.name}}</h4>
        <p>{{data.address}}</p>
    </li>
</template>

<script>
export default {
    props:["data"]
}
</script>


<style lang="scss" scoped>
    li{
        padding:.15rem;
        border-bottom: 1px solid #f5f5f5;
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
