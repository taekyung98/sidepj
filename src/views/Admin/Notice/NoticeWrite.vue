<template>
  <body>
  <main class="form-info min-vh-100">

    <div class="card mb-3" >
      <div class="card-body" >
        <div style="padding: 70px 200px">
          <h3 class="font-weight-bold">공지사항 작성</h3>
          <hr class="border-secondary">
          <br>
          <b-form-group id="notice-input1" >
            <b-form-input
                id="input-1"
                v-model="writer"
                type="text"
                class="d-none"
            ></b-form-input>
              <b-form-input
                  id="input-2"
                  v-model="title"
                  type="text"
                  required
                  placeholder="제목을 입력하세요"
                  style=" box-shadow: none;"

              ></b-form-input>
          </b-form-group>

          <br>

          <b-form-group id="notice-input1" >
              <b-form-textarea
                  style="box-shadow: none;"
                  id="textarea"
                  v-model="content"
                  placeholder="내용을 작성하세요.."
                  rows="20"
              ></b-form-textarea>
          </b-form-group>

          <br>

        <b-row>
          <b-col><b-button class="outline-secondary rounded-pill px-4" @click="noticeList" > 목록 </b-button></b-col>
          <b-col ><b-button class="outline-secondary rounded-pill px-4 float-right" @click=" idx !== undefined ? noticeUpdate(): noticeWrite()" type="submit">
            {{ idx !== undefined ? '수정' : '등록' }} </b-button></b-col>
        </b-row>
        </div>

      </div>
    </div>
  </main>
  </body>
</template>

<script>
import  data from '@/data/Notice/Notice'

export default {
  name: "NoticeWrite",
  data() {
    const idx = this.$route.params.NoticeId;
    return{
      data: data,
      idx: idx,
      writer: idx !== undefined ? data[idx].writer : '',
      title : idx !== undefined ? data[idx].title : '',
      content : idx !== undefined ? data[idx].content : ''
    }
  },
  methods: {
    noticeList() {
      this.$router.push({
        path:'NoticeList'
      })
    },
    noticeWrite(){
      this.data.push({
        writer: this.writer,
        title: this.title,
        content: this.content
      })
      this.$router.push({
        path:'/notice/noticelist'
      })
    },
    noticeUpdate(){
        data[this.idx].writer = this.writer,
        data[this.idx].title =  this.title,
        data[this.idx].content = this.content
      this.$router.push({
        path:'/notice/noticelist'
      })
    }
  },
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