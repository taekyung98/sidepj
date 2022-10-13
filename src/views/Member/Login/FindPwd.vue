<template>
  <body>
  <main class="form-signin min-vh-100">
    <div  class="loginImg mb-5">
      <h1>로고 넣을자리</h1>
      <!--     <img src="@/assets/붱붱.png" />-->
    </div>
    <div class="card ">
      <div class="card-body ">
        <b-form  style="padding: 20px 40px ">
          <h3 class=" mb-3 font-weight-bold text-center">비밀번호 찾기</h3>
          <div class="form-group">
            <label>아이디</label>
            <b-input type="email" class="form-control form-control-lg" placeholder="아이디를 입력하세요" />
          </div>

          <div class="form-group">
            <label>전화번호</label>
           <div class="d-flex">
             <b-input type="text" class="form-control form-control-lg mr-3" placeholder="전화번호를 입력하세요(-제외)" />
             <b-button class="btn btn-secondary rounded-pill align-self-center" type="submit" style="width: 120px; padding:0.6rem " to="/"><a style="color: white; bottom: 50%">인증번호</a></b-button>
           </div>
          </div>

          <div class="form-group mb-4">
            <label class="mr-3">인증번호</label>
            <label style="color: blue"> 대충 여기에 시간제한 넣을거임</label>

            <b-input type="text" class="form-control form-control-lg" placeholder="인증번호를 입력하세요" />
          </div>

          <b-button class="w-100 btn btn-lg btn-secondary rounded-pill" type="submit" to="/ChgPwd"><a style="color: white"> 비밀번호 변경</a></b-button>

        </b-form>
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
  max-width: 600px;
  margin: auto;
}

.card {
  border-radius: 1rem;
}

label {
  font-weight: 550;
}
.router-link-exact-active{
  color: black;
}
</style>