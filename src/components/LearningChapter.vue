<!--README:app learning chapter组件-->
<script setup>
import {controlPages} from "@/events.js";
defineProps({
  // 本章节是否已经完成
  finish: {
    type: Boolean,
    default: false
  },
  // 本章节共答对的题数
  answeredNumber: {
    type: Number,
    required: true
  },
  // 本章节总共的题数
  totalNumber: {
    type: Number,
    required: true
  },
  // 本章节的标题
  title: {
    type: String,
    required: true
  },
  // 本章节的summary
  summary: {
    type: String,
    required: true
  },
  // 本章节的章节图
  picUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="learningChapterParent" @click="controlPages('readingPage')">
    <div class="learningChapterGreyPanel">
      <div class="learningChapterInner" />
      <div class="learningChapterTitle">{{title}}</div>
      <div class="learningChapterSummary">{{summary}}</div>
      <div class="learningChapterAnswerNumberPanel">
        <div class="learningChapterAnswerNumber">{{answeredNumber}}/{{totalNumber}}</div>
      </div>
    </div>
    <div class="learningChapterProgress">Progress:</div>
    <div class="learningChapterProgressNumber">{{((answeredNumber/totalNumber)*100).toFixed(2)}}%</div>
    <img class="learningChapterPic" alt="" :src="picUrl" />
  </div>
</template>

<style scoped>
.learningChapterParent {
  width: 100%;
  height: 158px;
  /*MENTION：这里必须要使用relative而不是absolute。absolute会导致堆叠*/
  position: relative;
  /* 定位颜色 */
  /* background: rgba(0, 255, 255, 0.2); */
}
/*MENTION: 这样实现的边框渐变效果不够优雅，并且以超出范围为代价。这里学习一种优雅的border渐变的方法*/
/*参考自在：https://juejin.cn/post/7017701121619656711*/
.learningChapterGreyPanel {
  position: absolute;
  height: 100%;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 15px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #eaeaea, #eaeaea), linear-gradient(280deg, rgba(185, 47, 250), rgba(133, 249, 222) 52%, rgba(255, 201, 233));
}

.learningChapterInner {
  position: absolute;
  height: 67%;
  width: calc(100% - 18px);
  left: 50%;
  top: 62%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: #fff;
}
.learningChapterTitle {
  position: absolute;
  height: 23%;
  width: 70%;
  top: 4%;
  left: 15px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Fredoka-Medium;
}
.learningChapterSummary {
  position: absolute;
  height: 60%;
  width: 66%;
  top: 32%;
  left: 15px;
  font-size: 15px;
  line-height: 1.1;
  font-family: Fredoka-Regular;
}
.learningChapterAnswerNumberPanel {
  position: absolute;
  height: 28px;
  width: 73px;
  top: 7%;
  right: 8px;
  text-align: center;
  border-radius: 12px;
  background-color: #3b3b3b;
}
.learningChapterAnswerNumber {
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eaeaea;
  font-family: Fredoka-Regular;
}
.learningChapterProgress {
  position: absolute;
  height: 15px;
  width: 50px;
  top: 81%;
  right: 60px;
  font-size: 10px;
  display: flex;
  align-items: flex-end;
  font-family: Fredoka-SemiBold;
}
.learningChapterProgressNumber {
  position: absolute;
  height: 25px;
  width: 60px;
  top: 77%;
  right:15px;
  text-align: right;
  font-family: Fredoka-SemiBold;
}
.learningChapterPic {
  position: absolute;
  height: 51px;
  width: 76px;
  top: 37%;
  right: 22px;
  border-radius: 5px;
}
</style>
