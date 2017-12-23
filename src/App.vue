<template>
  <div id="app">
    <router-view/>
    <!-- <tab></tab> -->
  </div>
</template>

<script>
import Tab from "@/components/tab"
export default {
  name: 'app',
  components:{
  	Tab
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
  font-size: 12px!important;
}
</style>
