<script setup>
import LearnPage from "@/mainPages/LearnPage.vue";
import ReadingPage from "@/mainPages/ReadingPage.vue";
import { controlPages, pagesController, pagesStrings } from "@/events.js";
import QuizPage from "@/mainPages/QuizPage.vue";
import { ApiService } from "./api";
import { onMounted } from "vue";

onMounted(async () => {
  const apiService = new ApiService;
  // 页面初加载,首先获取 content menu
  await apiService.getMenu();
  // 页面初加载,默认打开 learn page
  controlPages(pagesStrings.LEARN_PAGE);
});

</script>
<!--TODO: PWA ICON图片需要修改正式版本-->
<!--TODO: 修改*HEADER FOOTER的弹性布局以应对网页版本-->
<!--TODO: 在移动端中，非黑白颜色的SVG图片会显示出模糊的样式，还不知原因-->
<!--TODO: 删除vue模版文件中的vue组件-->
<!--TODO: PWA应用的背景还可以过度滑动，但是例如so so value就没有这个问题/-->
<!--TODO: 应用中部分渐变等效果是通用的，应该独立出来，许多类可以直接继承这种格式，不用每个按钮都写一遍-->

<template>

  <LearnPage v-if="pagesController.learnPage"/>
  <ReadingPage v-if="pagesController.readingPage"/>
  <QuizPage v-if="pagesController.quizPage"/>

</template>

<style scoped>

</style>
