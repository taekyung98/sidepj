<template>
  <div>
    <div v-if="Paging.list.length" class="page-list">
      <b-icon icon="chevron-left"
              class="leftIcon"
              v-if="Paging.first !== null"
              @click="Paging.first !== null ? sendPage(Paging.first) : '' "
      >
      </b-icon>

      <ul>
        <li
        :class="{ active: page === Paging.currentPage }"
        v-for="page in Paging.list"
        :key="page"
        @click="sendPage(page)"
        >
        {{page}}
        </li>
      </ul>


      <b-icon icon="chevron-right"
              class="rightIcon"
              v-if="Paging.end() !== null"
              @click="Paging.end !== null ? sendPage(Paging.end) : '' "
      >
      </b-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:[Paging],
  methods:{
    sendPage(page){
      this.$emit("pagination", page)
    //  emit: 자식 컴포넌트 -> 부모 컴포넌트 데이터 전달
    }
  }
}
</script>

<style scoped>

</style>