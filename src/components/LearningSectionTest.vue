<script setup>
defineProps({
  // 这是第几section
  number: {
    type: Number,
    default: false
  },
  // 标题名称
  name: {
    type: String,
    required: true
  },
  // 本章节未完成的chapter数
  remainingChapterNumber: {
    type: Number,
    required: true
  },
  // 本章节最终应得的奖励点数
  rewardNumber: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="learningSectionTestParent">
    <div class="learningSectionTestPanel">
      <div class="learningSectionTestNumber">TEST {{number}}:</div>
      <div class="learningSectionTestName">{{name}}</div>
    </div>

    <!--如果剩余的答题数量为0，则选用reward panel；如果剩余有答题数量，则选用number panel-->
    <template v-if="remainingChapterNumber === 0">
      <div class="learningSectionTestRewardPanel">
        <div class="learningSectionTestRewardPanelRewardsTitle">Rewards:</div>
        <img class="learningSectionTestRewardPanelRewardsIcon" src="/points_icon.svg" alt="">
        <div class="learningSectionTestRewardPanelRewardsNumber">{{rewardNumber}}</div>
      </div>
    </template>
    <template v-else>
      <div class="learningSectionTestRemainingPanel">
        <div class="learningSectionTestRemainingPanelRemainingNumber">{{remainingChapterNumber}}</div>
        <div class="learningSectionTestRemainingPanelCompleteIconParent">
          <img class="learningSectionTestRemainingPanelCompleteIcon" src="/learningComplete_icon.svg" alt="">
        </div>
        <div class="learningSectionTestRemainingPanelRemainingToUnlock">to unlock</div>
      </div>
    </template>
  </div>



</template>

<style scoped>
.learningSectionTestParent {
  width: 100%;
  height: 73px;
  position: relative;
  /* background: rgba(0, 255, 255, 0.2); */
}
.learningSectionTestPanel {
  position: absolute;
  height: 100%;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 15px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #3b3b3b, #3b3b3b), linear-gradient(280deg, #D478FF, #6CFFDD 52%, #FF8FD2);
}
.learningSectionTestNumber {
  height: 30px;
  width: 120px;
  color: white;
  font-size: 20px;
  left: 8px;
  position: absolute;
  font-family: Fredoka-Medium;
}
.learningSectionTestName {
  height: 20px;
  width: 175px;
  color: white;
  font-size: 15px;
  left: 8px;
  bottom: 8px;
  position: absolute;
  font-family: Fredoka-Medium;
}
.learningSectionTestRewardPanel {
  position: absolute;
  height: 50px;
  width: 180px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 2px solid transparent;
  border-radius: 10px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(240deg, #fdc2e3, #a4ffe7 40%, #d779ff), linear-gradient(280deg, #FF46B5, #00E2AE, #7F00BB);
}
.learningSectionTestRewardPanelRewardsTitle {
  position: absolute;
  height: 25px;
  width: 75px;
  color: black;
  font-size: 15px;
  font-family: Fredoka-SemiBold;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
}
.learningSectionTestRewardPanelRewardsIcon {
  position: absolute;
  height: 18px;
  width: 25px;
  /*MENTION: 将一个图片用filter变成纯黑色*/
  filter: grayscale(100%) brightness(0);
  top: 50%;
  transform: translateY(-50%);
  left: 100px;
}
.learningSectionTestRewardPanelRewardsNumber {
  position: absolute;
  height: 25px;
  width: 50px;
  color: black;
  font-size: 15px;
  font-family: Fredoka-SemiBold;
  top: 50%;
  transform: translateY(-50%);
  left: 125px;
}
.learningSectionTestRemainingPanel {
  position: absolute;
  height: 50px;
  width: 180px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 2px solid transparent;
  border-radius: 10px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #EAEAEA, #EAEAEA), linear-gradient(280deg, #FF46B5, #00E2AE, #7F00BB);
}
.learningSectionTestRemainingPanelRemainingNumber {
  position: absolute;
  height: 25px;
  width: 20px;
  color: black;
  font-size: 15px;
  font-family: Fredoka-SemiBold;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
}
.learningSectionTestRemainingPanelCompleteIconParent {
  position: absolute;
  height: 28px;
  width: 42px;
  top: 50%;
  transform: translateY(-50%);
  left: 45px;
  background: #3B3B3B;
  border-radius: 5px;
}
.learningSectionTestRemainingPanelCompleteIcon {
  position: absolute;
  height: 17px;
  width: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.learningSectionTestRemainingPanelRemainingToUnlock {
  position: absolute;
  height: 25px;
  width: 70px;
  color: black;
  font-size: 15px;
  font-family: Fredoka-SemiBold;
  top: 50%;
  transform: translateY(-50%);
  left: 95px;
}

</style>