<template>
  <body>
  <main class="form-info min-vh-100 ">

      <div class="card mb-3" >
        <div class="card-body">

          <div style="padding: 50px 200px">
            <b-form-group >
              <div class="mb-3 d-flex justify-content-center" >
                <label class="col-sm-3 align-self-center">한 줄 소개</label>
                <b-input type="text" class="form-control form-control-lg col-sm-6" placeholder="이름을 입력해 주세요."/>
              </div>

              <ChooseGenre></ChooseGenre>

              <div class="mb-3 d-flex justify-content-center" >
                <label class="col-sm-3  align-self-center">상세 소개</label>
                <b-input type="text" class="form-control form-control-lg col-sm-6"/>
              </div>

              <div class="mb-3 d-flex justify-content-center" >
                <label class="col-sm-3  align-self-center">웹사이트</label>
                <b-input type="text" class="form-control form-control-lg col-sm-6"/>
              </div>
              <br>
              <hr>
              <br>
             <div >
               입력하신 정보(필수 - 이름, 영문이름, 프로필 이미지, 기본 이메일, 선택 - 국가, 외부공개 이메일)는 그라폴리오 서비스 제공을 목적으로 수집하며, 네이버 회원 탈퇴 혹은 직접 삭제 전까지 보관됩니다.
             </div>
              <br>
              <div class="d-flex ">
                <div class="text-center col-lg-10 ml-lg-5">
                  <b-button class="btn btn-lg btn-secondary rounded-pill mr-3" type="submit" to="/"><a style="color: white">동의 및 저장</a></b-button>
                  <b-button class="btn btn-lg rounded-pill" variant="outline-secondary" type="submit" to="">취소</b-button>
                </div>
              </div>

            </b-form-group>
          </div>

        </div>
      </div>

  </main>
  </body>
</template>

<script>
import ChooseGreeting from "@/components/ChooseGreeting";
import UploadProfile from "@/components/UploadProfile";
import DeleteAccount from "@/components/DeleteAccount";
import ChooseGenre from "@/components/ChooseGenre";
export default {
  components: {ChooseGenre}
}


</script>

<style scoped>
body {
  padding-top: 100px;
  align-items: center;
  background-color: #f6f6f6;
}

.form-info{
  width: 100%;
  max-width: 1300px;
  margin: auto;
}

.card {
  border-radius: 1rem;
}

label {
  font-weight: 550;
}


</style>