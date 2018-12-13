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
$color-brown: rgb(41, 29, 32);
$color-gold: rgba(232, 189, 7, 0.7);
$light-grey:rgb(219, 219, 219);
#skill {
  .content {
    margin: 0;
    background: $color-brown;
    .content-title {
      .content-title-details {
        position: absolute;
        bottom: 20%;
        text-align: left;
        .content-title-my {
          margin: 0;
          font-family: monospace;
          font-weight: bold;
          font-size: 44px;
          color: $light-grey;
        }
        .content-title-skill {
          margin: 0;
          font-family: monospace;
          font-weight: bold;
          font-size: 44px;
          color: $color-gold;
        }
      }
    }
    .content-picture {
      padding: 10% 0px;
      background: $light-grey;
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
        color: $light-grey;
      }
      img {
        width: 100%;
        opacity: 0.8
      }
    }
  }
}
</style>
