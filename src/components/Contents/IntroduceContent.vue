<template>
  <div id="introduce">
    <div class="cover">
      <img src="../../assets/cover.jpg">
      <div class="cover-mess">
        <p class="main-mess"><b>Hi! </b> My name is <span class="name">Ha Thai</span></p>
        <p class="extra-mess">Frontend Developer...</p>
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
        <p class="description-main">Hello! I'm Ha Thai - Frontend Developer based in Da Nang - Viet Nam</p>
        <p class="description-extra">I'm working for DAC Tech Viet Nam</p>
        <p class="description-sign"><br>Ha Thai</p>
      </div>
      <div class="avar col-md-4">
        <img src="../../assets/avar.jpg">
        <button class="btn-cv">Download CV</button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
$color-gold: rgba(232, 189, 7, 0.7);
$light-grey:rgb(219, 219, 219);
#introduce {
  .cover {
    height: 100vh;
    overflow: hidden;
    img {
      width: 100%;
    }
    .cover-mess {
      position: absolute;
      top: 50px;
      right: 10%;
      text-align: right;
      .main-mess {
        font-size: 34px;
        font-style: italic;
        .name {
          color: $color-gold;
          font-weight: bold;
        }
      }
      .extra-mess {
        font-size: 22px;
      }
    }
  }

  .about-me {
    margin: 0;
    background-color: $light-grey;
    position: relative;
    .title {
      .title-details {
        position: absolute;
        bottom: 20%;
        text-align: left;
        .title-content-about {
          margin: 0;
          font-family: monospace;
          font-weight: bold;
          font-size: 44px;
        }
        .title-content-me {
          margin: 0;
          font-family: monospace;
          font-weight: bold;
          font-size: 44px;
          color: $color-gold;
        }
      }
    }

    .description {
      padding-top: 20px;
      text-align: left;
      .description-main {
        font-weight: bold;
        font-size: 20px;
      }
      .description-extra {
        font-size: 18px;
      }
      .description-sign {
        font-style: italic;
        font-weight: bold;
        font-size: 30px;
        font-family: fantasy;
      }
    }

    .avar {
      img {
        width: 100%;
      }
      .btn-cv {
        position: absolute;
        width: 50%;
        right: 25%;
        bottom: 5%;
        opacity: 0.8;
        border-radius: 50px;
        background: $color-gold;
        border: 1px solid $color-gold;
        color: white;
        outline: none;
      }
      .btn-cv:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
}
@media only screen and (max-width:1080px) {
  .cover {
    height: auto !important;
  }
}
</style>
