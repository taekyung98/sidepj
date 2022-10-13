<template>
  <body>
  <main class="form-info min-vh-100">

    <div class="card mb-3" >
      <div class="card-body" >
        <div style="padding: 70px 200px">
          <h3 class="font-weight-bold">공지사항</h3>
          <hr class="border-secondary">
          <br>
           <b-row>
             <b-col cols="10">{{data.title}}</b-col>
             <b-col cols="2">{{data.date}}</b-col>
           </b-row>
          <hr>
          <br>

          <div style="min-height: 20em">
            <div>{{data.content}}</div>
          </div>

          <hr>

          <br>

          <b-row>
            <b-col cols="9"><b-button class="outline-secondary rounded-pill px-4" @click="NoticeList" > 목록 </b-button></b-col>
<!--            <b-col > <b-button class="outline-secondary rounded-pill px-4 float-right" @click="noticeWrite" type="submit"> 수정 </b-button></b-col>
            <b-col > <b-button class="outline-secondary rounded-pill px-4 float-right" @click="noticeWrite" type="submit"> 삭제 </b-button></b-col>-->
            <b-col >
              <b-button class="outline-secondary rounded-pill px-4" @click="NoticeUpdate" type="submit"> 수정 </b-button>
              <b-button class="outline-secondary rounded-pill px-4 float-right" @click="NoticeDelete" type="submit"> 삭제 </b-button>
            </b-col>
          </b-row>
        </div>

      </div>
    </div>
  </main>
  </body>
</template>

<script>
import data from '@/data/Notice/Notice'

export default {
  name: "NoticeDetail",
  data() {
    const idx = this.$route.params.NoticeId
    return{
      data: data[idx],
      idx : idx
    }
  },
  methods:{
    NoticeList(){
      this.$router.push({
        path:'/Notice/NoticeList'
      })
    },
    NoticeUpdate(){
      this.$router.push({
        name:'NoticeWrite',
        params: {
          NoticeId: this.idx
        }
      })
    },
    NoticeDelete(){
      data.splice(this.idx,1)
      this.$router.push({
        path:'/Notice/NoticeList'
      })
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