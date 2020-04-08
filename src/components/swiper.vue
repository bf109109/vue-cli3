<template>
    <div class="swiper-container" :class='cName'>
        <div class="swiper-wrapper">
            <slot></slot>
            <!-- <div class="swiper-pagination"></div> -->
        </div>

    </div>
</template>
<script>
import "swiper/css/swiper.min.css"
export default {
props:['cName']
}
</script>
<style>
   .swiper-container{
       height: 195px;
   } 
</style>