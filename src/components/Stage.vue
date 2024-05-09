<script setup>
import StageButton from "@/components/StageButton.vue";
defineProps({
  toggleStageVisibility: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="stageParent">
    <StageButton left="10px" top="25px" :toggleStageVisibility="toggleStageVisibility"/>
  </div>
</template>

<style scoped>
.stageParent {
  position: fixed;
  width: 295px;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 15;
  background: white;
  /*定位背景c*/
  /*background: rgba(0, 100, 100, 0.5);*/
}

</style>