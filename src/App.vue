<script setup>
import Footer from "./components/Footer.vue";
import Header from "@/components/Header.vue";
import LearningScrollView from "@/components/LearningScrollView.vue";
import Stage from "@/components/Stage.vue";
import {ref} from "vue";

// 创建一个响应式的布尔类型的数据属性
const isStageVisible = ref(true);
// 切换 Stage 组件的显示状态
// MENTION：为了实现方法自上而下的层层传递，需要在每一层都定义prop来层层传递
function toggleStageVisibility() {
  isStageVisible.value = !isStageVisible.value;
}

</script>
<!--TODO: PWA ICON图片需要修改正式版本-->
<!--TODO: 修改*HEADER FOOTER的弹性布局以应对网页版本-->
<!--TODO: 在移动端中，非黑白颜色的SVG图片会显示出模糊的样式，还不知原因-->
<!--TODO: 删除vue模版文件中的vue组件-->
<!--TODO: PWA应用的背景还可以过度滑动，但是例如sosovalue就没有这个问题/-->
<!--TODO: 应用中部分渐变等效果是通用的，应该独立出来，许多类可以直接继承这种格式，不用每个按钮都写一遍-->
<template>
  <Header :toggleStageVisibility="toggleStageVisibility"/>

  <LearningScrollView />


  <!-- 根据 isStageVisible 属性的值来决定是否渲染 Stage 组件 -->
  <Stage v-if="isStageVisible" :toggleStageVisibility="toggleStageVisibility"/>

  <Footer />
</template>

<style scoped>

</style>
