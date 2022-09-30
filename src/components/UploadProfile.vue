<template>
  <div class="mb-3 d-flex justify-content-center" >
    <label class="col-sm-3">프로필 이미지</label>
    <div class="col-sm-6 d-flex">
      <div>
        <p>여기 사진 들어갈거임</p>
        <img src="" alt="">
      </div>
      <div class="col-sm-8">
        <label>프로필 이미지를 등록해 주세요. <br>180 x 180 픽셀 크기의 이미지를 권장합니다.</label>
        <b-button class="outline-secondary rounded-pill" to="/upload"> <b-icon icon="upload"></b-icon><a>업로드</a></b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadProfile"
}
</script>

<style scoped>

</style>