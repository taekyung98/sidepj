<template>
  <body>
  <main class="form-signin min-vh-100">
    <div  class="loginImg mb-5">
      <h1>로고 넣을자리</h1>
<!--     <img src="@/assets/붱붱.png" />-->
    </div>
    <div class="card ">
      <div class="card-body ">
        <b-form>
          <h2 class="h3 mb-3 font-weight-bold text-center">로그인</h2>

          <div class="form-group">
            <label>아이디</label>
            <b-input type="email" class="form-control form-control-lg" placeholder="아이디를 입력하세요" />
          </div>

          <div class="form-group">
            <label>비밀번호</label>
            <b-input type="password" class="form-control form-control-lg" placeholder="비밀번호를 입력하세요"/>
          </div>

          <div class="checkbox mb-3">
            <label><input type="checkbox" value="remember-me"> 아이디 저장하기</label>
          </div>

          <b-button class="w-100 btn btn-lg btn-secondary rounded-pill" type="submit" to="/"><a style="color: white">Sign in</a></b-button>
        </b-form>
         <div class="d-flex justify-content-center txt">
           <p class="mt-3 " :to="{name: 'findPwd'}">
             <router-link :to="{name: 'findPwd'}" >비밀번호 찾기</router-link>
           </p>
           <p class="mt-3 col-md-1 ">|</p>
           <p class="mt-3">
             <router-link :to="{name: 'SignUpAgree'}">회원가입</router-link>
           </p>
         </div>
      </div>
    </div>
  </main>
  </body>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
  display: flex;
  padding-top: 100px;
  align-items: center;
  background-color: #f6f6f6;
}

.loginImg{
  text-align: center;
}

img{
width: 200px;
}

.form-signin {
  width: 100%;
  max-width: 500px;
  margin: auto;
}

.card {
  border-radius: 1rem;
}

label {
  font-weight: 550;
}


a{
  text-decoration: none;
  color: #2c3e50;
}

a:hover{
  text-decoration: none;
  color: #2c3e50;
}

</style>