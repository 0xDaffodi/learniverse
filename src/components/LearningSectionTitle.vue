<!--README:app learning section title-->
<script setup>
defineProps({
  // 这是第几section
  number: {
    type: Number,
    default: false
  },
  // 标题名称
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="learningSectionTitleParent">
    <div class="learningSectionTitleName">Level {{number}}: {{name}}</div>
    <div class="learningSectionTitleLine"/>
  </div>
</template>

<style scoped>
.learningSectionTitleParent {
  width: 100%;
  position: relative;
  height: 31px;
  text-align: left;
  font-size: 20px;
  font-family: Fredoka-Medium;
  padding: 0 0;
  /*定位*/
  /*background: rgba(0, 255, 255, 0.2);*/
}
.learningSectionTitleName {
  position: absolute;
  height: 100%;
  width: 70%;
  background: linear-gradient(-90deg, #ff62c5, #00ecb7 50.5%, #a100ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.learningSectionTitleLine {
  position: absolute;
  top: 100%;
  width: 100%;
  height: 2px;
  border-radius: 1000px;
  background: linear-gradient(-90deg, #ff62c5, #00ecb7 50.5%, #a100ff);
}


</style>