<script setup>
import HeaderInfo from "@/components/HeaderInfo.vue";
import {controlPages} from "@/events.js";
</script>

<template>
  <div class="simpleHeaderParent">
    <HeaderInfo right="16px" top="30px" icon-size="17px" icon-url="/points_icon.svg"/>
    <HeaderInfo right="100px" top="30px" icon-size="24px" icon-url="/assets_icon.svg"/>
    <div class="simpleHeaderBackButton" @click="controlPages('learnPage')">Back</div>
  </div>
</template>

<style scoped>
.simpleHeaderParent {
  position: fixed;
  width: 100%;
  height: 75px;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  font-size: 20px;
  font-family: Fredoka-Medium;
  color: #3b3b3b;
  z-index: 10;
  /*background: rgba(0, 0, 100, 0.5);*/
}
.simpleHeaderBackButton {
  position: absolute;
  height: 20.28px;
  top: 30px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
