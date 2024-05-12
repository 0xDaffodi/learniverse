<script setup>
import {ref} from "vue";

const scrollDown = ref(true);
</script>

<template>
<div class="readingProgressParent">
  <div class="readingProgressPanel">
    <div v-if="scrollDown">
      <div class="readingProgressQuiz">Quiz</div>
      <div class="readingProgressChapterName">What is bitcoin?</div>
      <div class="readingProgressStartQuizButton">
        <div style="left: 50px" class="readingProgressStartQuizButtonText">Start:</div>
        <img class="readingProgressStartQuizButtonIcon" alt="" src="/points_icon.svg"/>
        <div style="left: 115px" class="readingProgressStartQuizButtonText">100</div>
      </div>
    </div>
    <div v-else>

    </div>
  </div>
</div>
</template>

<style scoped>
.readingProgressParent {
  position: fixed;
  width: 100%;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  z-index: 5;
  padding: 0 1.4rem;
  /*background: rgba(0, 0, 100, 0.5);*/
}
.readingProgressPanel {
  position: relative;
  height: 61px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid transparent;
  border-radius: 15px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #3b3b3b, #3b3b3b), linear-gradient(280deg, rgba(185, 47, 250), rgba(133, 249, 222) 52%, rgba(255, 201, 233));
}
.readingProgressQuiz {
  position: absolute;
  left: 20px;
  top: 0;
  color: white;
  font-size: 20px;
  font-family: Fredoka-Medium;
}
.readingProgressChapterName {
  position: absolute;
  left: 20px;
  top: 28px;
  color: white;
  font-size: 15px;
  font-family: Fredoka-Medium;
}
.readingProgressStartQuizButton {
  position: absolute;
  height: 37px;
  width: 186px;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(240deg, #fdc2e3, #a4ffe7 40%, #d779ff), linear-gradient(280deg, #FF46B5, #00E2AE, #7F00BB);
}
.readingProgressStartQuizButtonText {
  position: absolute;
  color: black;
  font-size: 15px;
  font-family: Fredoka-SemiBold;
  top: 50%;
  transform: translateY(-50%);
}
.readingProgressStartQuizButtonIcon {
  position: absolute;
  left: 95px;
  top: 50%;
  transform: translateY(-50%);
  filter: grayscale(100%) brightness(0);
}
</style>
