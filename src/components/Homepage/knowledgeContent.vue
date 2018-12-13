<template>
  <div id="knowledge">
    <div class="title">
      <h3>KNOWLEDGE</h3>
    </div>
    <div class="content row">
      <div class="content-skill col-md-5">
        <div class="row">
          <img class="skill-icon" src="../../assets/computer.jpg">
          <div class="skill-info col-md-8">
            <h6>Web Developer</h6>
            <p>Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy</p>
          </div>
        </div>
        <div class="row">
          <img class="skill-icon" src="../../assets/mobile.jpg">
          <div class="skill-info col-md-8">
            <h6>App Developer</h6>
            <p>Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy</p>
          </div>
        </div>
        <div class="row">
          <img class="skill-icon" src="../../assets/fly.png">
          <div class="skill-info col-md-8">
            <h6>Rebranding</h6>
            <p>Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy</p>
          </div>
        </div>
      </div>
      <div class="content-soft-skill col-md-5">
        <div class="row">
          <img class="skill-icon" src="../../assets/pencil.png">
          <div class="skill-info col-md-8">
            <h6>UI / UX Design</h6>
            <p>Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy</p>
          </div>
        </div>
        <div class="row">
          <img class="skill-icon" src="../../assets/camera.png">
          <div class="skill-info col-md-8">
            <h6>Photography</h6>
            <p>Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy</p>
          </div>
        </div>
        <div class="row">
          <img class="skill-icon" src="../../assets/network.png">
          <div class="skill-info col-md-8">
            <h6>SEO Marketing</h6>
            <p>Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy</p>
          </div>
        </div>
      </div>
      <div class="content-title col-md-2">
        <p class="content-title-my">MY</p>
        <p class="content-title-services">SERVICES</p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
$color-red: rgb(135, 41, 64);
#knowledge {
  padding: 30px 10px;
}
.title {
  text-align: left;
  h3 {
    font-weight: bold;
  }
}
.content {
  margin: 0;

  .content-skill,
  .content-soft-skill {
    text-align: left;
    .skill-icon {
      width: 80px;
      height: 80px;
    }
    .skill-info {
      h6 {
        font-weight: bold;
      }
    }
  }

  .content-title {
    .content-title-my {
      position: absolute;
      bottom: 20%;
      right: 0;
      font-weight: bold;
      font-size: 44px;
    }
    .content-title-services {
      position: absolute;
      bottom: 5%;
      right: 0;
      font-weight: bold;
      font-size: 44px;
      color: $color-red;
    }
  }
}
</style>
