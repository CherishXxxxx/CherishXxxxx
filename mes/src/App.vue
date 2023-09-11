<template>
  <div id="app" class="center-container">
    <data-display></data-display>
    <div class="spacer"></div>
    <data-display></data-display>
  </div>
</template>

<script>
import DataDisplay from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    DataDisplay
  }
};
</script>

<style>
.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: lightblue;
}
.spacer {
  height: 10px;
}
</style>