<!--README:app底部导航-->
<script setup>
import FooterIcon from "@/components/FooterIcon.vue";
</script>
<!--TODO: 按钮点击事件-->
<!--BUG: SVG图片无法BUILD-->
<template>
  <div class="footerParent">
    <div class="footerRectangleWrapper">
      <div class="footer">
        <div class="footerIcon1">
          <FooterIcon text="Learn" url="/src/assets/learn_icon.png" :select="true"/>
        </div>
        <div class="footerIcon2">
          <FooterIcon text="Ask" url="/src/assets/ask_icon.png" :select="false"/>
        </div>
        <div class="footerIcon3">
          <FooterIcon text="Community" url="/src/assets/community_icon.png" :select="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footerParent {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
  height: 73px;
  width: 330px;
  z-index: 10;
}
.footerRectangleWrapper {
  position: absolute;
  height: 100%;
  width: 100%;
}
.footer {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  background-color: #222;
}
/*定位点1*/
.footerIcon1 {
  position: absolute;
  left: 25%;
  top: 50%;
}
/*定位点2*/
.footerIcon2 {
  position: absolute;
  left: 50%;
  top: 50%;
}
/*定位点3*/
.footerIcon3 {
  position: absolute;
  left: 75%;
  top: 50%;
}
</style>