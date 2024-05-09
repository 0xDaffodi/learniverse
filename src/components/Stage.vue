<script setup>
import StageButton from "@/components/StageButton.vue";
import StageSearch from "@/components/StageSearch.vue";
import StageMenu from "@/components/StageMenu.vue";
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
      <StageMenu
          :stage-array=
          "[{ title: '1. Gateway to WEB 3.0', chapters: ['What is bitcoin?', 'Blockchain technology', 'Gateway into WEB 3 World']},
            { title: '2. Platform', chapters: ['Centralized Exchange', 'Decentralized Exchange', 'Infrastructure']}]"
          :stage-number="1" :completed-levels="2" :total-levels="2"/>
      <StageMenu
          :stage-array=
              "[{ title: '1. Gateway to WEB 3.0', chapters: ['What is bitcoin?', 'Blockchain technology', 'Gateway into WEB 3 World']},
            { title: '2. Platform', chapters: ['Centralized Exchange', 'Decentralized Exchange', 'Infrastructure']}]"
          :stage-number="2" :completed-levels="1" :total-levels="2"/>
      <StageMenu
          :stage-array=
              "[{ title: '1. Gateway to WEB 3.0', chapters: ['What is bitcoin?', 'Blockchain technology', 'Gateway into WEB 3 World']},
            { title: '2. Platform', chapters: ['Centralized Exchange', 'Decentralized Exchange', 'Infrastructure']},
            { title: '3. Ecosystem', chapters: ['Centralized Exchange', 'Decentralized Exchange', 'Infrastructure']}]"
          :stage-number="3" :completed-levels="1" :total-levels="3"/>
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
  overflow-y: auto;
}
.stageScrollViewParent > * {
  margin-bottom: 15px;
}
</style>