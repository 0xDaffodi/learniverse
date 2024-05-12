<script setup>
import {ref} from "vue";

defineProps({
  stageNumber: {
    type: Number,
    required: true
  },
  stageArray: {
    type: Array,
    required: true
  },
  completedLevels: {
    type: Number,
    required: true
  },
  totalLevels: {
    type: Number,
    required: true
  }
})
const dragOut = ref(false);
function drag(){
  dragOut.value = !dragOut.value;
}

</script>

<template>
  <div class="stageMenuParent">
    <div class="stageMenuIndex">Stage {{stageNumber}}</div>
    <div class="stageMenuProgress">
      <div v-if="completedLevels === totalLevels">
        <img class="stageMenuProgressIcon" src="/learningComplete_icon.svg" alt="">
      </div>
      <div v-else>
        <div class="stageMenuProgressText">{{completedLevels}}/{{totalLevels}}</div>
      </div>
    </div>
    <div class="stageMenuArraysPanel" @click="drag">
      <div v-if="dragOut">
        <!--遍历prop中元素个数，向panel里插入html-->
        <div v-for="(stage, index) in stageArray" :key="index">
          <div class="stageMenuLevelPanel">
            <div class="stageMenuDragTitle">{{ stage.title }}</div>
            <div v-for="(chapter, chapterIndex) in stage.chapters" :key="chapterIndex" class="stageMenuDragChapters">
              {{ chapter }}
            </div>
          </div>
          <div class="stageMenuDragTest">
            <div class="stageMenuDragTestProgressTitle">Test 1:</div>
            <div class="stageMenuDragTestProgressPanel">
              <div class="stageMenuDragTestProgressText">80/100</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="stageMenuLevelPanel">
        <div v-for="(stage, index) in stageArray" :key="index">
          <div class="stageMenuNotDragTitle">{{ stage.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stageMenuParent {
  position: relative;
  width: 100%;
  border-radius: 10px;
  /*上 右 下 左*/
  padding: 0 0.5rem 0.5rem 0.5rem;
  background: #eaeaea;
}
.stageMenuProgress {
  position: absolute;
  width: 73px;
  height: 23px;
  border-radius: 8px;
  right: 0.5rem;
  top: 7px;
  background: #3b3b3b;
}
.stageMenuProgressText{
  font-family: Fredoka-Regular;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eaeaea;
}
.stageMenuProgressIcon {
  width: 20px;
  height: 17px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
.stageMenuIndex {
  position: relative;
  width: 50%;
  top: 5px;
  padding-left: 0.25rem;
  color: black;
  font-family: Fredoka-Medium;
  font-size: 20px;
}
.stageMenuArraysPanel {
  position: relative;
  width: 100%;
  margin-top: 5px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0);
  border-radius: 10px;
}
.stageMenuDragTitle {
  font-family: Fredoka-Medium;
  font-size: 20px;
  padding-left: 0.1rem;
}
.stageMenuDragChapters {
  font-family: Fredoka-Regular;
  font-size: 15px;
  padding-left: 0.75rem;
}
.stageMenuDragTest {
  position: relative;
  width: 100%;
  height: 32px;
  margin-top: 5px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #3b3b3b, #3b3b3b), linear-gradient(280deg, #D478FF, #6CFFDD 50%, #FF8FD2);
}
.stageMenuDragTestProgressPanel {
  position: absolute;
  width: 73px;
  height: 21px;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  border: 2px solid transparent;
  border-radius: 5px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(240deg, #fdc2e3, #a4ffe7 40%, #d779ff), linear-gradient(280deg, #FF46B5, #00E2AE, #7F00BB);
}
.stageMenuDragTestProgressText {
  position: absolute;
  font-family: Fredoka-SemiBold;
  font-size: 12px;
  color: black;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.stageMenuDragTestProgressTitle {
  position: absolute;
  font-family: Fredoka-Medium;
  font-size: 15px;
  color: white;
  top: 50%;
  left: 7px;
  transform: translateY(-50%);
}
.stageMenuNotDragTitle {
  font-family: Fredoka-Regular;
  font-size: 15px;
  padding-left: 0.75rem;
}
.stageMenuLevelPanel {
  position: relative;
  width: 100%;
  margin-top: 7px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px;
}
</style>