<template>
  <b-form-group>
    <label>이름</label>
    <b-form class="d-flex">
      <b-input type="text" class="form-control form-control-lg mr-3" readonly />
      <b-button class="btn btn-secondary rounded-pill align-self-center" type="submit" style="width: 200px; padding:0.6rem " to="/"><a style="color: white; bottom: 50%">휴대폰 본인확인</a></b-button>
    </b-form>
    <label style="color: blue" class="mb-3"> 휴대폰 본인확인 후에 이름과 휴대폰번호가 자동 입력됩니다.</label>

    <b-form>
      <label>휴대폰번호</label>
      <b-input type="number" class="form-control form-control-lg mr-3" readonly/>
    </b-form>
  </b-form-group>
</template>

<script>
export default {
  name: "InputInfo"
}
</script>

<style scoped>

</style>