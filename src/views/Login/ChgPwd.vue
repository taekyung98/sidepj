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
          <h3 class=" mb-3 font-weight-bold text-center">비밀번호 변경</h3>

          <div class="form-group">
            <label>새 비밀번호</label>
            <b-input type="email" class="form-control form-control-lg" placeholder="4자이상 10자 이하입니다." />
          </div>

          <div class="form-group mb-4">
            <label class="mr-3">비밀번호 확인</label>
            <b-input type="text" class="form-control form-control-lg" placeholder="4자이상 10자 이하입니다." />
          </div>

          <b-button class="w-100 btn btn-lg btn-secondary rounded-pill" type="submit" to="/"><a style="color: white"> 비밀번호 변경하기</a></b-button>

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