<template>
  <div>
   <div id="nav">
     <b-navbar toggleable="lg" type="light" variant="transparent" >
       <b-navbar-brand href="#" >NavBar</b-navbar-brand>
       <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

       <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>
           <b-nav-item to="/">JIDO자랑</b-nav-item>
           <b-nav-item href="#">작품</b-nav-item>
           <b-nav-item href="#">배경화면</b-nav-item>

           <b-nav-item-dropdown class="col-md pl-4 user-dropdown text-center" no-caret >
             <!-- Using 'button-content' slot -->
             <template #button-content >
               <b-icon icon="three-dots"></b-icon>
             </template>
             <b-dropdown-item to="/login">About JIDO.VILL</b-dropdown-item>
             <b-dropdown-item to="/">JIDO.Market</b-dropdown-item>
             <b-dropdown-item to="/notice">공지사항</b-dropdown-item>
           </b-nav-item-dropdown>
         </b-navbar-nav>

         <!-- Right aligned nav items -->
         <b-navbar-nav class=" ml-auto">
           <Search class="mx-sm-3 "></Search>

           <NavLogin></NavLogin>

         </b-navbar-nav>
       </b-collapse>
     </b-navbar>
   </div>
  </div>
</template>

<script>
// 디지털 데이터 바인딩 or 이벤트 캐치 or 서버통신을 위한 자바스크립트 코드 삽입부분
import Search from "@/components/Search";
import NavLogin from "@/components/NavLogin";

export default {
  name: 'Header',
  components:{
    Search,
    NavLogin
  },
}
</script>

<style>
#nav {
  padding: 20px 120px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /*background-color: white;*/
}

</style>