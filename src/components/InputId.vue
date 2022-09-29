<template>
  <b-form-group>
    <label>아이디</label>
    <div class="d-flex">
      <b-input type="text" class="form-control form-control-lg mr-3" />
      <b-button class="btn btn-secondary rounded-pill align-self-center" type="submit" style="width: 120px; padding:0.6rem " to="/"><a style="color: white; bottom: 50%">중복체크</a></b-button>
    </div>
    <label style="color: blue" class="mb-0"> 영문자, 숫자, _ 만 입력 가능. 최소 4자이상 입력하세요.</label>
  </b-form-group>
</template>

<script>
export default {
  name: "InputId"
}
</script>

<style scoped>

</style>