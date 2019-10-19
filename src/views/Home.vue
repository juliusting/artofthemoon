<template>
  <div class="home">
    <h1 class>hello</h1>
    <canvas id="canvasScreen" width="100" height="100"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
var canvas = null;

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    draw: function() {

    }
  },
  created() {

  }
};
</script>

<style scoped>
#canvasScreen {
  position: fixed;
  top: 0;
}
</style>