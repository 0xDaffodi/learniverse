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
  },
  // 本章节未完成的chapter数
  remainingChapterNumber: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="learningSectionTestParent">
    <div class="learningSectionTestPanel">
      <div class="learningSectionTestNumber">TEST {{number}}:</div>
      <div class="learningSectionTestName">{{name}}</div>
    </div>
    <div class="learningSectionTestRewardPanel">
    </div>
  </div>



</template>

<style scoped>
.learningSectionTestParent {
  width: 100%;
  height: 73px;
  position: relative;
  /* background: rgba(0, 255, 255, 0.2); */
}
.learningSectionTestPanel {
  position: absolute;
  height: 100%;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 15px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #3b3b3b, #3b3b3b), linear-gradient(280deg, #D478FF, #6CFFDD 52%, #FF8FD2);
}
.learningSectionTestNumber {
  height: 30px;
  width: 120px;
  color: white;
  font-size: 20px;
  left: 8px;
  position: absolute;
  font-family: Fredoka-Medium;
}
.learningSectionTestName {
  height: 20px;
  width: 175px;
  color: white;
  font-size: 15px;
  left: 8px;
  bottom: 8px;
  position: absolute;
  font-family: Fredoka-Medium;
}
.learningSectionTestRewardPanel {
  position: absolute;
  height: 50px;
  width: 180px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 2px solid transparent;
  border-radius: 10px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #EAEAEA, #EAEAEA), linear-gradient(280deg, #FF46B5, #00E2AE, #7F00BB);
}


</style>