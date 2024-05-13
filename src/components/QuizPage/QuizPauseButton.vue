<script setup>
import {controlPages, pagesStrings} from "@/events.js";

</script>

<template>
  <div class="quizPauseButton" @click="controlPages(pagesStrings.LEARN_PAGE)">Pause</div>
</template>

<style scoped>
.quizPauseButton {
  position: absolute;
  height: 20.28px;
  top: 30px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
