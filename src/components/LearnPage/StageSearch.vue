<script setup>

</script>

<template>
  <div class="stageSearchParent">
    <div class="stageSearchTitle">Search</div>
    <div class="stageSearchButtonPanel">
      <img class="stageSearchButtonIcon" alt="" src="/stageSearch_icon.svg"/>
    </div>
  </div>
</template>

<style scoped>
.stageSearchParent {
  width: 100%;
  height: 29.3px;
  top: 55px;
  position: relative;
  border-radius: 30px;
  background: #3B3B3B;
}
.stageSearchTitle {
  position: absolute;
  left: 15px;
  color: white;
  font-family: Fredoka-Regular;
  font-size: 15px;
  top: 50%;
  transform: translateY(-50%);
  /*background: rgba(0, 255, 255, 0.2);*/
}
.stageSearchButtonPanel {
  position: absolute;
  width: 66px;
  height: 25px;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid transparent;
  border-radius: 30px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(240deg, #fdc2e3, #a4ffe7 40%, #d779ff), linear-gradient(280deg, #FF46B5, #00E2AE, #7F00BB);
}
.stageSearchButtonIcon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>