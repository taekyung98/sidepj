<template>
  <b-form-group >
      <label>주소</label>
    <div>
      <div class="d-flex address mb-2">
        <b-input type="text" class="form-control form-control-lg mr-3" readonly/>
        <b-button class="btn btn-secondary rounded-pill align-self-center" type="submit" style="width: 120px; padding:0.6rem " to="/"><a style="color: white; bottom: 50%">주소검색</a></b-button>
      </div>
       <b-input type="text" class="form-control form-control-lg mb-2" placeholder="기본주소" readonly/>
       <b-input type="text" class="form-control form-control-lg mb-2" placeholder="상세주소" />
       <b-input type="text" class="form-control form-control-lg mb-2" placeholder="참고항목" readonly/>
     </div>
  </b-form-group>

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
.address{
width: 400px;
}

</style>