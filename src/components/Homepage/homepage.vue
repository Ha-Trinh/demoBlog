<template>
  <div id="homepage">
    <div class="cover">
      <img src="../../assets/cover.jpg">
      <div class="cover-mess">
        <p class="main-mess"><b>Hi! </b> My name is Ha Thai</p>
        <p class="extra-mess">FrontEnd Developer</p>
      </div>
    </div>

    <div class="about-me row">
      <div class="title col-md-3">
        <div class="title-details">
          <p class="title-content-about">ABOUT</p>
          <p class="title-content-me">ME</p>
        </div>
      </div>
      <div class="description col-md-5">
        <p class="description-main">Hello! I'm Ha Thai. User experience designer based in Da Nang - Viet Nam</p>
        <p class="description-extra">I'm working for DAC Tech Viet Nam</p>
        <p class="description-sign">Ha Thai</p>
      </div>
      <div class="avar col-md-4">
        <img src="../../assets/avar.jpg">
        <button class="btn-cv">Download CV</button>
      </div>
    </div>

    <Knowledge></Knowledge>

    <Skill></Skill>
  </div>
</template>
<script src="./homepage.js"></script>
<style src="./homepage.scss" lang="scss" scoped></style>
