<template>
  <div id="work">
    <div class="content row">
      <div class="content-work col-md-10 row">
        <div class="col-md-8">
          <div class= "small-img row">
            <div class="col-md-6">
              <img src="../../assets/work4.jpg">
            </div>
            <div class="col-md-6">
              <img src="../../assets/work3.png">
            </div>
          </div>
          <div>
            <img class="laying-img" src="../../assets/work2.jpg">
          </div>
        </div>
        <div class="stand-image col-md-4">
          <img class="" src="../../assets/work1.jpg">
        </div>
      </div>
      <div class="content-title col-md-2">
        <div class="content-title-details">
          <p class="content-title-my">MY</p>
          <p class="content-title-work">WORK</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
$color-gold: rgba(232, 189, 7, 0.7);
#work {
  padding: 30px 10px;
}
.content {
  margin: 0;

  .content-work {
    margin: 0;
    .small-img {
      margin: 0;
      img {
        width: 100%;
      }
    }
    .laying-img {
      width: 100%;
    }
    .stand-image {
      img {
        width: 100%;
      }
    }
  }

  .content-title {
    .content-title-details {
      position: absolute;
      bottom: 10%;
      right: 10px;
      text-align: right;
      .content-title-my {
        margin: 0;
        font-family: monospace;
        font-weight: bold;
        font-size: 44px;
      }
      .content-title-work {
        margin: 0;
        font-family: monospace;
        font-weight: bold;
        font-size: 44px;
        color: $color-gold;
      }
    }
  }
}
</style>
