<script setup>
import LearningSectionTitle from "@/components/LearningSectionTitle.vue";
defineProps({
  // 本章节是否已经完成
  nextSection: {
    type: Array,
    default: false
  }
})
</script>

<template>
  <LearningSectionTitle text="What's Next" />
<!--TODO: 这里的what next的章节名称需要使用relative排布，因为有的关是三个标题-->
  <div class="learningNextParent">
    <div class="learningNextPanel">
      <div style="top:10px" class="learningNextSection">{{nextSection[0]}}</div>
      <div style="top:40px" class="learningNextSection">{{nextSection[1]}}</div>
      <div class="learningNextMention">Finish the current study materials in order to continue.</div>
      <div style="left:5px" class="learningNextButton">
        <div class="learningNextButtonText">Last Stage</div>
      </div>
      <div style="right:5px" class="learningNextButton">
        <div class="learningNextButtonText">Next Stage</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.learningNextParent {
  width: 100%;
  height: 163px;
  position: relative;
  /* background: rgba(0, 255, 255, 0.2); */
}
.learningNextPanel {
  position: absolute;
  height: 100%;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 15px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #3b3b3b, #3b3b3b), linear-gradient(280deg, rgba(185, 47, 250), rgba(133, 249, 222) 52%, rgba(255, 201, 233));
}
.learningNextSection {
  position: absolute;
  width: 100%;
  height: 30px;
  color: white;
  left: 20px;
  font-family: Fredoka-Medium;
  font-size: 20px;
}
/*MENTION:部分文本其实无需设置宽度，absolute自适应即可*/
.learningNextMention {
  position: absolute;
  height: 20px;
  color: white;
  left: 15px;
  top: 100px;
  font-family: Fredoka-Medium;
  font-size: 12px;
}
.learningNextButton {
  position: absolute;
  height: 33px;
  width: 178px;
  bottom: 5px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(240deg, #fdc2e3, #a4ffe7 40%, #d779ff), linear-gradient(280deg, #FF46B5, #00E2AE, #7F00BB);
}
.learningNextButtonText {
  position: absolute;
  height: 25px;
  width: 75px;
  color: black;
  font-size: 15px;
  font-family: Fredoka-SemiBold;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>