<!--README:底部导航中的ICON-->
<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  select: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="footerIconParent">
    <!--判断是否select-->
    <div :class="[select ? 'footerIconSelectTextArea' : 'footerIconUnSelectTextArea']">{{text}}</div>
    <!--使用url src绑定props可以使用v-bind语法-->
    <img class="footerIconIcon" alt="" :src="url" />
  </div>
</template>


<style scoped>
.footerIconParent {
  /*这个保证所有footer icon的定位都是根据自己的中心点来定位*/
  transform: translate(-50%, -50%);
  width: 54px;
  position: absolute;
  height: 54px;
  overflow: hidden;
  text-align: center;
  font-size: 10px;
  color: #fff;
  font-family: Fredoka-Medium;
  /* 定位颜色 */
  /* background: rgba(0, 255, 255, 0.5); */
}
.footerIconUnSelectTextArea {
  position: absolute;
  height: 38.89%;
  width: 95%;
  top: 50%;
  left: 1.85%;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.footerIconSelectTextArea {
  position: absolute;
  height: 38.89%;
  width: 95%;
  top: 50%;
  left: 1.85%;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  background: linear-gradient(-86.5deg, #ffbbe2, #68ffdb 52%, #ba26ff);
  -webkit-background-clip: text; /* Safari/Chrome */
  background-clip: text; /* Firefox */
  color: transparent;
}
.footerIconIcon {
  position: absolute;
  height: 64.81%;
  width: 64.81%;
  top: 0%;
  right: 20.37%;
  bottom: 35.19%;
  left: 14.81%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}


</style>