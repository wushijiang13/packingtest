<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
console.log("当前环境:"+process.env.NODE_ENV);
console.log("当前运行项目:"+process.env.MODULE_NAME);

</script>

<style>
#app {
}
</style>
