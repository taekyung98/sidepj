<template>
<body>
<main class="form-notice min-vh-100 ">
<div class="card mb-3" >
  <div class="card-body" style="padding: 50px 200px ">
    <h3 class="font-weight-bold">공지사항</h3>
    <hr class="border-secondary">
    <div>
<!--      <b-table hover :fields="fields" :items="items" style="border-top-style: hidden" >-->
<!--        <template #cell(제목)="{item}">-->
<!--         <div>{{ item.제목}}</div >-->
<!--        </template>-->
<!--        <template #cell(공지일)="{item}">-->
<!--          <div> {{ item.공지일}}</div>-->
<!--        </template>-->
<!--      </b-table>-->

      <div>
        <b-table-simple hover style="border-top-style: hidden" v-if="items !== []">
          <b-thead>
            <b-tr>
              <b-th  v-for="(h,i) in fields" :key="i" >{{h.key}}</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="(t,idx) in items" :key="idx">
              <b-td>{{t.제목}}</b-td>
              <b-td>{{t.공지일}}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <div class="order-none" v-if="items === []">공지사항내역이 없습니다.</div>
      </div>
      <div>
        <pagination
            :Paging="Paging(total, limit, block, this.page)"
            @paging="pagingMethod"
        ></pagination>
        <!-- 관리자일 경우 글 작성 버튼 노출될 수 있는 로직(?) 작성하기 -->
        <b-button class="outline-secondary rounded-pill" to="/Notice/WriteDown" > 글 작성하기 </b-button>
      </div>
    </div>
  </div>
</div>
</main>
</body>
</template>

<script>
import pagination from "@/components/Pagination";
// import { noticeInfo } from "@/components/Notice/Notice.js"

export default {
  name: "Notice",
  components: {pagination},

  data(){
    return{
      fields:[
        {
          key: '제목',
          sortable: false
        },
        {
          key: '공지일',
          sortable: true
        },
      ],
      items:[
        {제목: '공지사항인데 공지할게없지만 혹시 너에게 공지할게 있을수도 있잖아', 공지일: '2022.10.10'},
        {제목: 'Halo', 공지일: '2022.10.11'},
        {제목: 'Hello', 공지일: '2022.10.12'},
      ],
      page: 1, // 디폴트 페이지값
      limit: 7, // 한 페이지 당 나타낳 데이터 개수
      block: 3 // 페이지 리스트에서 한번에 보여질 페이지 개수
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