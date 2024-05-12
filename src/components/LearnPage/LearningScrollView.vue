<!--README:app learning scroll view-->
<script setup>
import LearningChapter from "@/components/LearnPage/LearningChapter.vue";
import LearningSectionTitle from "@/components/LearnPage/LearningSectionTitle.vue";
import LearningSectionTest from "@/components/LearnPage/LearningSectionTest.vue";
import LearningWhatsNext from "@/components/LearnPage/LearningWhatsNext.vue";
</script>
<!--TODO:这里的数据后面都要替换成后端数据-->
<template>
  <div class="learningScrollViewParent">
    <LearningSectionTitle
        text="Level 1: Gateway to WEB 3.0"
    />
    <LearningChapter
        :finish = "false" :answered-number = "1" :total-number = "15" title = "What is bitcoin?"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "0" :total-number = "15" title = "Blockchain technology"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "0" :total-number = "15" title = "Gateway into WEB 3 World"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />

    <LearningSectionTest
      :number="1" name="Gateway to WEB 3.0" :remaining-chapter-number="0" :reward-number="100"
    />

    <LearningSectionTitle
        text="Level 2: Platform"
    />
    <LearningChapter
        :finish = "false" :answered-number = "0" :total-number = "15" title = "Centralized Exchange"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "0" :total-number = "15" title = "Decentralized Exchange"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <LearningChapter
        :finish = "false" :answered-number = "0" :total-number = "15" title = "Infersturcture"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />

    <LearningSectionTest
        :number="2" name="Platform" :remaining-chapter-number="3" :reward-number="200"
    />

    <LearningWhatsNext
      :next-section="['3. Ecosystem', '4. Infertructure']"
    />


  </div>
</template>

<style scoped>
.learningScrollViewParent {
  width: 100%;
  /*这里是不是也可以用relative，但是应该需要单独设定padding*/
  /*BUG: 不知道为什么这里无法设定relative，但是关卡页面却可以。也许是因为app没有设置fixed属性*/
  position: fixed;
  height: 87%;
  top: 114px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  padding: 0 1.4rem;
  overflow-y: auto; /* 垂直滚动 */
  /*定位背景*/
  /*background: rgba(0, 100, 100, 0.5);*/
}
/* 添加垂直间隔 */
.learningScrollViewParent > * {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
