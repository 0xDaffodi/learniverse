<script setup>
import LearningSectionTest from "@/components/LearnPage/LearningSectionTest.vue";
import LearningSectionTitle from "@/components/LearnPage/LearningSectionTitle.vue";
import LearningChapter from "@/components/LearnPage/LearningChapter.vue";
import LearningWhatsNext from "@/components/LearnPage/LearningWhatsNext.vue";
// TODO: 这里需要改成传入prop的形式
</script>

<template>
  <div class="readingScrollViewParent">
    <LearningChapter
        :finish = "false" :answered-number = "1" :total-number = "15" title = "What is bitcoin?"
        summary="Description Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous"
        picUrl="/learningSection_centralizeExchange.svg"
    />
    <div class="readingScrollViewText">
      Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It operates on a peer-to-peer network, allowing transactions to be conducted directly between users without the need for intermediaries such as banks or governments.
      <br><br>One of the key features of Bitcoin is its blockchain technology, which serves as a public ledger that records all transactions made with the currency. This distributed ledger system ensures transparency and security, as each Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It operates on a peer-to-peer network, allowing transactions to be conducted directly between users without the need for intermediaries such as banks or governments.
      <br><br>One of the key features of Bitcoin is its blockchain technology, which serves as a public ledger that records all transactions made with the currency. This distributed ledger system ensures transparency and security, as each Bitcoin is a decentralized digital currency that was created in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It operates on a peer-to-peer network, allowing transactions to be conducted directly between users without the need for intermediaries such as banks or governments.
      <br><br>One of the key features of Bitcoin is its blockchain technology, which serves as a public ledger that records all transactions made with the currency. This distributed ledger system ensures transparency and security, as each
    </div>


  </div>
</template>

<style scoped>
.readingScrollViewParent {
  width: 100%;
  position: fixed;
  height: 80%;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  padding: 0 1.4rem;
  overflow-y: auto; /* 垂直滚动 */
  /*定位背景*/
  /*background: rgba(0, 100, 100, 0.5);*/
}
/* 添加垂直间隔 */
.readingScrollViewParent > * {
  margin-top: 15px;
  margin-bottom: 15px;
}
.readingScrollViewText {
  width: 100%;
  font-size: 20px;
  font-family: Fredoka-Regular;
  line-height: 1.2;
}

</style>
