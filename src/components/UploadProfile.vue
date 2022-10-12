<template>
  <div class="mb-3 d-flex justify-content-center" >
    <label class="col-sm-3">프로필 이미지</label>
    <div class="col-sm-6 d-flex">
      <div class="align-self-center" >
        <b-img v-if="file != ''" rounded="circle" style="width: 100px; height: 100px" :src="previewProfileImageData"></b-img>
        <b-img v-else rounded="circle" style="width: 100px; height: 100px" :src="require('@/assets/logo.png')" ></b-img>
      </div>
      <div class="col-sm-8">
        <label>프로필 이미지를 등록해 주세요. <br>180 x 180 픽셀 크기의 이미지를 권장합니다.</label>
        <div >
          <b-form-file
              class="col-sm-1"
              ref="file"
              v-model="file"
              :state="Boolean(file)"
              accept=".jpg, .png, .gif"
              @change="previewImage"
              required
              multiple
              style="opacity: 0%; width: 0.1px; height: 0.1px"
          ></b-form-file>
          <b-button class="outline-secondary rounded-pill" @click="uploadProfile"> <b-icon icon="upload"></b-icon><a>업로드</a></b-button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadProfile",
  data() {
    return {
      file: "",
      previewProfileImageData: null,
    };
  },
  methods: {

    uploadProfile() {
      this.$refs.file.$el.childNodes[0].click();
    },
    previewImage(evt) {
      var input = evt.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.previewProfileImageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        this.previewProfileImageData = null;
      }
    }
  }
}
</script>

<style scoped>

</style>