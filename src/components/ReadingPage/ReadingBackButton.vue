<script setup>
import {controlPages, pagesStrings} from "@/events.js";

</script>

<template>
  <div class="readingBackButton" @click="controlPages(pagesStrings.LEARN_PAGE)">Back</div>
</template>

<style scoped>
.readingBackButton {
  position: absolute;
  height: 20.28px;
  top: 30px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
