<!--README:app顶部栏-->
<script setup>
import StageButton from "@/components/StageButton.vue";
import HeaderInfo from "@/components/HeaderInfo.vue";
defineProps({
  toggleStageVisibility: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="headerParent">
    <div class="headerTopButton">
      <div class="headerTopButtonPanel" />
      <div class="headerWeb3Parent">
        <div class="headerWeb3">WEB 3</div>
      </div>
      <!--GATEWAY SECTION-->
      <div class="headerGatewayParent">
        <div class="headerGatewayMask" />
        <div class="headerGatewayBorder" />
        <div class="headerGatewayBorderMask">
          <div class="headerGatewayInner" />
        </div>
        <div class="headerGateway">Gateway</div>
      </div>
    </div>
    <img class="headerQuestions" alt="" src="/questions_icon.svg" />
    <img class="headerProfile" alt="" src="/profile_icon.svg" />
    <HeaderInfo right="16px" top="75px" icon-size="17px" icon-url="/points_icon.svg"/>
    <HeaderInfo right="100px" top="75px" icon-size="24px" icon-url="/assets_icon.svg"/>
    <StageButton left="20px" top="75px" :toggleStageVisibility="toggleStageVisibility"/>
  </div>
</template>

<style scoped>
.headerParent {
  width: 100%;
  position: fixed;
  height: 114px;
  text-align: right;
  font-size: 20px;
  color: #3b3b3b;
  left: 50%;
  transform: translateX(-50%);
  font-family: Fredoka-Medium;
  top: 0;
  z-index: 10;
  /*filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));*/
  /*MASK*/
  /*background: white;*/
}
.headerTopButton {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 188px;
  height: 41px;
  font-size: 15px;
  color: #fff;
}
.headerTopButtonPanel {
  position: absolute;
  border-radius: 30px;
  background-color: #3b3b3b;
  width: 100%;
  height: 100%;
}
.headerWeb3Parent {
  position: absolute;
  top: 4px;
  right: 5px;
  width: 91px;
  height: 33px;
}
.headerWeb3 {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  /*文本水平垂直均居中*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerGatewayParent {
  position: absolute;
  top: 4px;
  left: 5px;
  width: 91px;
  height: 33px;
}
.headerGatewayMask {
  position: absolute;
  border-radius: 100px;
  background-color: #fff;
  width: 100%;
  height: 100%;
}
.headerGatewayBorder {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  background: linear-gradient(261.39deg, rgb(255, 70, 181), rgb(0, 226, 174) 52%, rgb(127, 0, 187));
}
/*TODO：修改为优雅的渐变border方法。参考Learning Chapter 组件处写法*/
.headerGatewayBorderMask {
  position: absolute;
  border-radius: 100px;
  background-color: #fff;
  width: 95%;
  height: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.headerGatewayInner {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  background: linear-gradient(261.39deg, rgba(255, 187, 226, 0.5), rgba(104, 255, 219, 0.5) 52%, rgba(173, 0, 255, 0.5));
}
.headerGateway {
  position: absolute;
  background: linear-gradient(-90deg, #ff62c5, #01cea0 50.5%, #a100ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  /*文本水平垂直均居中*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerQuestions {
  position: absolute;
  flex: 1;
  top: 13px;
  right: 10px;
  width: 45px;
  height: 45px;
}
.headerProfile {
  position: absolute;
  flex: 1;
  top: 13px;
  left: 10px;
  width: 45px;
  height: 45px;
}


</style>