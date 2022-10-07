<template>
  <body>
    <main class="form-upload min-vh-100 ">

      <div class="card mb-3" >
        <div class="card-body" >
            <div style="padding: 50px 200px ">
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="input-group-1"
                    label="제목"
                    label-for="input-1"
                    description=""
                >
                  <b-form-input
                      id="input-1"
                      v-model="form.title"
                      type="text"
                      required
                      placeholder="제목을 입력하세요"
                  ></b-form-input>
                </b-form-group>

                <b-form-group  v-show="txtToggle" id="input-group-2" label="내용" label-for="input-2">
                  <b-form-input id="input-2" v-model="form.content" placeholder=""></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" >
                  <!-- <div class="mt-3">Selected file: {{ form.file ? form.file.name : '' }}</div>-->
                  <div>
                    <b-img :src="previewImageData"></b-img>
                  </div>

                  <div class="d-flex justify-content-center">
                    <div >
                      <b-form-file
                          class="col-sm-1"
                          ref="file"
                          v-model="form.file"
                          :state="Boolean(form.file)"
                          accept=".jpg, .png, .gif"
                          @change="previewImage"
                          required
                          multiple
                          style="opacity: 0%; width: 0.1px; height: 0.1px"
                      ></b-form-file>
                      <b-button variant="outline-secondary" style="width: 80px; height:80px" @click="uploadFile">
                        <b-icon icon="image" style="width: 30px; height:30px;" > </b-icon>
                      </b-button>
                    </div>

                    <b-button  variant="outline-secondary"  style="width: 80px; height:80px" @click="textToggle" > <b-icon icon="textarea-t" style="width: 30px; height:30px"></b-icon> </b-button>

                  </div>


                    <!--이후 태그 추가작업 ㄱㄱ-->


                </b-form-group>

                <hr>
                <br>
                <div class="d-flex">
                  <b-icon icon="exclamation-circle" style="color: #545b62; width: 70px; height: 70px;" class="col-sm-1"></b-icon>
                  <p>
                    업로드 시, 이 콘텐츠의 저작권 소유자이며 <a>서비스 운영원칙</a>에 동의한 것으로 간주합니다.<br>
                    * 저작권 등 타인의 권리를 침해하거나 명예를 훼손하는 이미지, 동영상, 음원 등을 게시하는 경우 <a>이용약관</a> 및 관련 법률에 의하여 제재를 받으실 수 있습니다.
                  </p>
                </div>
                <br>

                <div class="text-center" >
                  <b-button type="submit" class="btn btn-lg btn-secondary rounded-pill mr-3" >Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </div>

              </b-form>
              <b-card class="mt-3" header="Form Data Result" v-if="show">
                <pre class="m-0">{{ form }}</pre>
              </b-card>

            </div>
        </div>
      </div>
    </main>

  </body>

</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      form: {
        title: "",
        file: "",
        content: ""
      },
      txtToggle: false,
      show: true,
      previewImageData: null,
    };
  },
  methods: {
    uploadFile() {
      this.$refs.file.$el.childNodes[0].click();
    },
    textToggle(){
        this.txtToggle = !this.txtToggle
    }
    ,
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset
      this.form.title = "";
      this.form.file = "";
      this.form.content = "";
      this.previewImageData = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    previewImage(evt) {
      var input = evt.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.previewImageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        this.previewImageData = null;
      }
    }
  }

}
</script>

<style scoped>
body {
  padding-top: 100px;
  align-items: center;
  background-color: #f6f6f6;
}

.form-upload{
  width: 100%;
  max-width: 1300px;
  margin: auto;
}

.card {
  border-radius: 1rem;
}

</style>