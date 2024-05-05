<template>
  <div class="groupParent">
    <div class="rectangleWrapper">
      <div class="groupChild" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.groupParent {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
  height: 73px;
  width: 330px;
  z-index: 10;
}
.rectangleWrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
}
.groupChild {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 100px;
  background-color: #222;
}
</style>