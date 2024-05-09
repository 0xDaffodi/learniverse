<script setup>
import StageButton from "@/components/StageButton.vue";
import StageSearch from "@/components/StageSearch.vue";
import LearningChapter from "@/components/LearningChapter.vue";
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
    <StageSearch />
    <div class="stageScrollViewParent">
      <LearningChapter title="" pic-url="" summary="" total-number="15" answered-number="0"/>
      <LearningChapter title="" pic-url="" summary="" total-number="15" answered-number="0"/>
      <LearningChapter title="" pic-url="" summary="" total-number="15" answered-number="0"/>
      <LearningChapter title="" pic-url="" summary="" total-number="15" answered-number="0"/>
      <LearningChapter title="" pic-url="" summary="" total-number="15" answered-number="0"/>
      <LearningChapter title="" pic-url="" summary="" total-number="15" answered-number="0"/>
      <LearningChapter title="" pic-url="" summary="" total-number="15" answered-number="0"/>
    </div>
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
  padding:  0 1.4rem;
  overflow: hidden;
  /*定位背景c*/
  /*background: rgba(0, 100, 100, 0.5);*/
}
/*MENTION:这里应该是标准的做法。主页面的scrollview由于app组件没有设置fixed属性，导致scrollview采用了fixed*/
.stageScrollViewParent {
  position: relative;
  width: 100%;
  height: 88%;
  top: 70px;
  background: rgba(0, 100, 100, 0.5);
  overflow-y: auto;
}
</style>