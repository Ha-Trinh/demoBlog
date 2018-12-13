<template>
  <div id="skill">
    <div class="content row">
      <div class="content-title col-md-2">
        <div class="content-title-details">
          <p class="content-title-my">MY</p>
          <p class="content-title-skill">SKILLS</p>
        </div>
      </div>
      <div class="content-picture col-md-5">
        <img src="../../assets/frontend-dev.png">
      </div>
      <div class="content-skill col-md-5">
        <h3>WHAT YOU NEED TO KNOW</h3>
        <p>Don't let the success of others discourage you. Let it inspire you</p>
        <img src="../../assets/roadmap.png">
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
$color-red: rgb(135, 41, 64);
#skill {
  .content {
    margin: 0;
    background: $color-red;
    .content-title {
      .content-title-details {
        position: absolute;
        bottom: 20%;
        text-align: left;
        .content-title-my {
          font-weight: bold;
          font-size: 44px;
          color: white;
        }
        .content-title-skill {
          font-weight: bold;
          font-size: 44px;
          color: black;
        }
      }
    }
    .content-picture {
      padding: 10% 0px;
      background: grey;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .content-skill {
      padding: 5% 1%;
      text-align: left;
      h3,
      p {
        color: white;
      }
      img {
        width: 100%;
        opacity: 0.8
      }
    }
  }
}
</style>
