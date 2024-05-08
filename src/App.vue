<script setup>
import Footer from "./components/Footer.vue";
import Header from "@/components/Header.vue";
import LearningScrollView from "@/components/LearningScrollView.vue";
</script>
<!--TODO: PWA ICON图片需要修改正式版本-->
<!--TODO: 修改*HEADER FOOTER的弹性布局以应对网页版本-->
<!--TODO: 在移动端中，部分SVG图片会显示出模糊的样式，还不知原因-->
<!--TODO: 删除vue模版文件中的vue组件-->
<!--TODO: PWA应用的背景还可以过度滑动，但是例如sosovalue就没有这个问题-->
<template>
  <Header />

  <LearningScrollView />

  <Footer />
</template>

<style scoped>

</style>
