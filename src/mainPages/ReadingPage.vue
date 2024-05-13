<script setup>
import SimpleHeader from "@/components/general/SimpleHeader.vue";
import ReadingScrollView from "@/components/ReadingPage/ReadingScrollView.vue";
import ReadingProgress from "@/components/ReadingPage/ReadingProgress.vue";

</script>

<template>
<!--MENTION: in html script, vue can transform reading-back-button to readingBackButton to make code readable-->
  <SimpleHeader :reading-back-button="true" :quiz-pause-button="false"/>
  <ReadingScrollView />
  <ReadingProgress />
</template>

<style scoped>

</style>
