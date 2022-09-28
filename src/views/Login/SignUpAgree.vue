<template>
  <body>
  <main class="form-signin min-vh-100 mb-5 ">
    <div  class="loginImg mb-5">
      <h1>로고 넣을자리</h1>
      <!--     <img src="@/assets/붱붱.png" />-->
    </div>
    <div>
      <div class="card mb-3">
        <div class="card-body d-flex align-items-center ">
          <b-icon class="h5 mr-2 mt-2" icon="exclamation-circle-fill" variant="secondary"></b-icon>
          <p class="mb-0"> 회원가입약관 및 개인정보처리방침안내의 내용에 동의하셔야 회원가입 하실 수 있습니다.</p>
        </div>
      </div>

      <div class="card mb-3" >
        <div class="card-body">
          <div class="d-flex align-items-center">
            <b-icon class="h3 mr-2 mt-2" icon="file-earmark-text" variant="secondary"></b-icon>
            <h5 class="h5 mb-0 font-weight-bold text-secondary" >회원가입 약관</h5>
          </div>
          <hr>
          <div class="card-body rounded bg-light" id="nav-scroller scroll" ref="content" style=" position:relative; height:300px; overflow-y:scroll;">
            <h5 id="Info">Info</h5>
            <p >{{ text }}</p>
          </div>
          <div class="checkbox mt-3">
            <label class=" text-secondary "><input class="mr-2" type="checkbox" value="agree" > 회원가입약관의 내용에 동의합니다. </label>
          </div>
        </div>
      </div>

      <div class="card mb-3" >
        <div class="card-body">
          <div class="d-flex align-items-center">
            <b-icon class="h3 mr-2 mt-2" icon="person-fill" variant="secondary"></b-icon>
            <h5 class="h5 mb-0 font-weight-bold text-secondary" >개인정보처리방침 안내</h5>
          </div>
          <hr>
          <div class="card-body rounded bg-light" id="nav-scroller scroll" ref="content" style=" position:relative; height:300px; overflow-y:scroll;">
            <h5 id="Info">Info</h5>
            <p >{{ text }}</p>
          </div>
          <div class="checkbox mt-3">
            <label class=" text-secondary "><input class="mr-2" type="checkbox" value="agree" > 개인정보처리방침안내의 내용에 동의합니다. </label>
          </div>
        </div>
      </div>

      <b-button class="w-100 btn btn-lg btn-secondary rounded-pill" type="submit" to="/SignUp"><a style="color: white">회원가입</a></b-button>

    </div>
  </main>
  </body>
</template>

<script>
export default {
  data() {
    return {
      text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
             Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `
    }
  }
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
  max-width: 750px;
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