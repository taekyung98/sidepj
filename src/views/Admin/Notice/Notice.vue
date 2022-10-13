<template>
  <body>
  <main class="form-notice min-vh-100 ">
    <div class="card mb-3" >
      <div class="card-body" style="padding: 70px 200px ">
        <h3 class="font-weight-bold">공지사항</h3>
        <hr class="border-secondary">

        <div>
          <div v-if="data.length !== 0" >
            <b-table-simple hover style="border-top-style: hidden"  id="noticeTable" :per-page="perPage" :current-page="currentPage">
              <b-thead>
                <b-tr>
                  <b-th>제목</b-th>
                  <b-th>공지일</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(t,idx) in data" :key="idx" @click="NoticeDetail(idx)">
                  <b-td>{{t.title}}</b-td>
                  <b-td>{{t.date}}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>

            <b-pagination
                align="center"
                :total-rows="rows"
                v-model="currentPage"

                :per-page="perPage"
                aria-controls="noticeTable"
                first-number
                last-number
            ></b-pagination>
            <!-- 관리자일 경우 글 작성 버튼 노출될 수 있는 로직(?) 작성하기 -->
          </div>

          <div class="notice-none text-center py-5" v-else >공지사항내역이 없습니다.</div>

          <b-button class="outline-secondary rounded-pill" @click="write" > 글 작성하기 </b-button>
        </div>
      </div>
    </div>
  </main>
  </body>
</template>

<script>
import  data from '@/data/Notice/Notice'

export default {
  name: "Notice",
  data(){
    return{
      data: data,
      perPage: 7, // 한 페이지 당 나타날 데이터 개수
      currentPage: 1, // 디폴트 페이지값
    }
  },
  methods:{
    write(){
      this.$router.push({
        path:'NoticeWrite'
      })
    },
    NoticeDetail(idx){
      this.$router.push({
        name:"NoticeDetail",
        params:{
          NoticeId: idx
        }

      })
    }
  },
  computed: {
    rows() {
      return this.data.length
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
.form-notice{
  width: 100%;
  max-width: 1300px;
  margin: auto;
}

.card {
  border-radius: 1rem;
}
</style>