<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import LearningScrollView from "@/components/LearningScrollView.vue";
import {ref} from "vue";
import Stage from "@/components/Stage.vue";

// TODO: 其实这里可以用event js来控制
// 创建一个响应式的布尔类型的数据属性
const isStageVisible = ref(false);
// 切换 Stage 组件的显示状态
// MENTION：为了实现方法自上而下的层层传递，需要在每一层都定义prop来层层传递
function toggleStageVisibility() {
  isStageVisible.value = !isStageVisible.value;
}
</script>

<template>
  <Header :toggleStageVisibility="toggleStageVisibility"/>
  <LearningScrollView />
  <!-- 根据 isStageVisible 属性的值来决定是否渲染 Stage 组件 -->
  <Stage v-if="isStageVisible" :toggleStageVisibility="toggleStageVisibility"/>
  <Footer />
</template>

<style scoped>

</style>