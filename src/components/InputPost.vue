<template>
  <div class="form-group d-flex ">
    <div class="mr-5">
      <label>비밀번호</label>
      <b-input type="text" class="form-control form-control-lg" readonly/>
      <b-button class="btn btn-secondary rounded-pill align-self-center" type="submit" style="width: 120px; padding:0.6rem " to="/"><a style="color: white; bottom: 50%">인증번호</a></b-button>
    </div>
    <div>
      <label>비밀번호 확인</label>
      <b-input type="email" class="form-control form-control-lg"/>
    </div>
  </div>

</template>

<script>
export default {
  name: "InputPost",
  // props : {
  //   zipcode: String,
  //   addr1: String,
  //   addr2: String,
  // }
}
</script>

<style scoped>

</style>