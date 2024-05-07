<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Footer from "./components/Footer.vue";
import Header from "@/components/Header.vue";
import LearningChapter from "@/components/LearningChapter.vue";
</script>
<!--TODO: PWA ICON图片需要修改正式版本-->
<!--TODO: 修改*HEADER FOOTER的弹性布局以应对网页版本-->
<!--TODO: 在移动端中，部分SVG图片会显示出模糊的样式，还不知原因-->
<template>
  <Header />

  <!--TEST：VUE模版文件-->
  <!--  <header>-->
  <!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->
  <!--    </div>-->
  <!--  </header>-->

  <!--TEST: Learning chapter-->
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

  <!--TEST：VUE模版文件-->
  <!--  <TheWelcome />-->

  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
