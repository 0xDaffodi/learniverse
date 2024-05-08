<script setup>
import LearningChapter from "@/components/LearningChapter.vue";
</script>

<template>
  <div class="learningScrollViewParent">

    <LearningChapter
        :finish = "false" :answered-number = "1" :total-number = "15" title = "Centralized Exchange"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "1" :total-number = "15" title = "Centralized Exchange"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "1" :total-number = "15" title = "Centralized Exchange"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "1" :total-number = "15" title = "Centralized Exchange"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "1" :total-number = "15" title = "Centralized Exchange"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "1" :total-number = "15" title = "Centralized Exchange"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />

  </div>
</template>

<style scoped>
.learningScrollViewParent {
  width: 100%;
  position: fixed;
  height: 87%;
  top: 114px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  padding: 0 1.4rem;
  overflow-y: auto; /* 垂直滚动 */
  /*定位背景*/
  background: rgba(0, 100, 100, 0.5);
}
/* 添加垂直间隔 */
.learningScrollViewParent > * {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>