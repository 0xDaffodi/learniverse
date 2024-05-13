<script setup>
import HeaderInfo from "@/components/LearnPage/HeaderInfo.vue";
import ReadingBackButton from "@/components/ReadingPage/ReadingBackButton.vue";
import QuizPauseButton from "@/components/QuizPage/QuizPauseButton.vue";
defineProps({
  // choose what type of button in this simple header component
  // todo: need simply
  readingBackButton: {
    type: Boolean,
    default: false
  },
  quizPauseButton: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="simpleHeaderParent">
    <HeaderInfo right="16px" top="30px" icon-size="17px" icon-url="/points_icon.svg"/>
    <HeaderInfo right="100px" top="30px" icon-size="24px" icon-url="/assets_icon.svg"/>
    <ReadingBackButton v-if="readingBackButton"/>
    <QuizPauseButton v-if="quizPauseButton"/>
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
</style>
