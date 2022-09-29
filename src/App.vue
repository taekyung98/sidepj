<template>
  <div id="app">
    <Header></Header>
    <div id="content" class="content flex-column min-vh-100" >
      <router-view></router-view>
    </div>
    <Footer class="mt-auto"></Footer>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
};
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

label{
  font-weight: 550;
}
</style>
