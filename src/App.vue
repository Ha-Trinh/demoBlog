<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
::-webkit-input-placeholder { /* Chrome */
  color: white;
  opacity: 1;
}
:-ms-input-placeholder { /* IE 10+ */
  color: white;
}
::-moz-placeholder { /* Firefox 19+ */
  color: white;
  opacity: 1;
}
:-moz-placeholder { /* Firefox 4 - 18 */
  color: white;
  opacity: 1;
}
</style>
