<script setup>
defineProps({
  iconUrl: {
    type: String,
    required: true
  },
  iconSize: {
    type: String,
    required: true
  },
  top: {
    type: String,
    required: true
  },
  right: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="headerInfoParent" :style="{top:top, right:right}">
    <img class="headerInfoIcon" alt="" :src="iconUrl" :style="{height:iconSize, width:iconSize}"/>
    <div class="headerInfoNumber">100</div>
  </div>
</template>

<style scoped>
.headerInfoParent {
  position: absolute;
  height: 20.28px;
  width: 60px;
}
.headerInfoNumber {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: right;
}
.headerInfoIcon {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>