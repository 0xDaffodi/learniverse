<script setup>
defineProps({
  top: {
    type: String,
    default: false
  },
  left: {
    type: String,
    required: true
  },
  toggleStageVisibility: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div :style="{ top: top, left: left }" class="stageButtonParent"  @click="toggleStageVisibility">
    <div class="stageButtonText">STAGE</div>
    <img class="stageButtonIcon" alt="" src="/stage_icon.svg" />
  </div>
</template>

<style scoped>
.stageButtonParent {
  position: absolute;
  height: 20.28px;
  width: 80px;
  /*top: 75px;
  left: 20px;*/
  font-family: Fredoka-Medium;
  font-size: 20px;
  background: rgba(0, 100, 100, 0.5);
}
.stageButtonText {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center; /* 在垂直方向上居中 */
  justify-content: flex-end; /* 在水平方向上右对齐 */
}
.stageButtonIcon {
  position: absolute;
  left: 0;
  width: 14px;
  height: 100%;
}
</style>