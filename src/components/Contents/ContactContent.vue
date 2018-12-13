<template>
  <div id="contact">
    <div class="content">
      <div class="title">
        <p class="title-my">MY</p>
        <p class="title-contact">CONTACT</p>
        <p class="quote">Better to do something imperfectly than to do nothing flawlessly - Robert H. Schuller</p>
      </div>
      <div class="contact-form">
        <input id="input-name" placeholder="Enter Name">
        <input placeholder="Enter Email">
        <input placeholder="Subject">
        <textarea placeholder="Enter Your Message"></textarea>
        <button class="btn-submit-contact">SEND MESSAGE</button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
$color-brown: rgb(41, 29, 32);
$color-gold: rgba(232, 189, 7, 0.7);
$light-grey:rgb(219, 219, 219);
#contact {
  .content {
    margin: 0;
    padding: 40px 0;
    background-image:url('../../assets/background_contact.jpg');
    background-repeat: no-repeat;
    .title {
      width: 100%;
      .title-my {
        margin: 0;
        font-family: monospace;
        font-weight: bold;
        font-size: 44px;
        color: $light-grey;
      }
      .title-contact {
        margin: 0;
        font-family: monospace;
        font-weight: bold;
        font-size: 44px;
        color: $color-gold;
      }
      .quote {
        color: $light-grey;
      }
    }
    .contact-form {
      width: 50%;
      margin: auto;
      input,
      textarea {
        width: 100%;
        opacity: 0.6;
        background: black;
        margin-bottom: 1%;
        border-radius: 5px;
        border: 1px solid white;
        padding: 5px;
        outline: none;
        color: white;
      }
      input:focus,
      textarea:focus {
        opacity: 0.8;
      }
      .btn-submit-contact {
        width: 30%;
        border-radius: 30px;
        background: black;
        color: white;
        opacity: 0.6;
        padding: 5px;
        outline: none;
      }
      .btn-submit-contact:hover {
        cursor: pointer;
        opacity: 0.8
      }
    }
  }
}
</style>
