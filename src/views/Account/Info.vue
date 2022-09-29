<template>
  <body>
  <main class="form-info min-vh-100 mb-5 ">
    <div class="d-flex justify-content-center">
       <div class="card mb-3 bg-transparent">
         <div class="card-body ">
           <div class="d-flex align-items-center">
             <h4 class="h4 mb-0 font-weight-bold text-secondary">계정정보</h4>
           </div>
         </div>
       </div>

      <div class="card mb-3 bg-transparent">
        <div class="card-body ">
          <div class="d-flex align-items-center">
            <h4 class="h4 mb-0 font-weight-bold text-secondary">프로필</h4>
          </div>
        </div>
      </div>

      <div class="card mb-3 bg-transparent">
        <div class="card-body ">
          <div class="d-flex align-items-center">
            <h4 class="h4 mb-0 font-weight-bold text-secondary">통계</h4>
          </div>
        </div>
      </div>
    </div>

      <div class="card mb-3" >
        <div class="card-body">
          <div class="d-flex align-items-center">
            <b-icon class="h3 mr-2 mt-2" icon="palette" variant="secondary"></b-icon>
            <h5 class="h5 mb-0 font-weight-bold text-secondary">사이트 이용정보 입력</h5>
          </div>
          <hr>

          <div class="px-5">
            <InputId></InputId>

            <b-form-group >
              <div class="mb-3">
                <label>비밀번호</label>
                <b-input type="email" class="form-control form-control-lg"/>
              </div>
              <div>
                <label>비밀번호 확인</label>
                <b-input type="email" class="form-control form-control-lg"/>
              </div>
            </b-form-group>
          </div>

        </div>
      </div>

      <div class="card " >
        <div class="card-body">
          <div class="d-flex align-items-center">
            <b-icon class="h3 mr-2 mt-2" icon="person-fill" variant="secondary"></b-icon>
            <h5 class="h5 mb-0 font-weight-bold text-secondary">개인정보 입력</h5>
          </div>
          <hr>

          <div class="px-5">
            <InputInfo></InputInfo>

            <b-form-group>
              <label>닉네임</label>
              <b-input type="text" class="form-control form-control-lg mr-3" />
              <label style="color: blue" class="mb-0"> 공백없이 한글,영문,숫자만 입력 가능 (한글2자, 영문4자 이상) 닉네임을 바꾸시면 앞으로 60일 이내에는 변경 할 수 없습니다.</label>
            </b-form-group>

            <b-form-group>
              <label>E-mail</label>
              <b-input type="email" class="form-control form-control-lg mr-3" />
            </b-form-group>

            <InputPost></InputPost>

          </div>

        </div>
      </div>

      <b-button class="w-100 btn btn-lg btn-secondary rounded-pill my-5" type="submit" to="/"><a style="color: white">회원가입</a></b-button>

  </main>
  </body>
</template>

<script>

export default {
  components: {},

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

.form-info{
  width: 100%;
  max-width: 1100px;
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

#scroll{
  background: #eaeaea;
}
</style>