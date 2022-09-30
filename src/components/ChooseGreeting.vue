<template>
  <div class="mb-3 d-flex justify-content-center" >
    <label class="col-sm-3  align-self-center">프로필 그리팅</label>
    <b-form-select class="col-sm-6" style="height: calc(1.5em + 1rem + 9px);" v-model="selected" :options="options" ></b-form-select>
  </div>
</template>

<script>
export default {
  name: "SelectCountry",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'JIDO 주민일JIDO?' },
        { value: 'a', text: '안녕할JIDO?' },
        { value: 'b', text: '조금 낯가릴JIDO?' },
        { value: 'c', text: '자신감 넘칠JIDO?' },
        { value: 'd', text: '소통 좀 좋아할JIDO?' }
      ]
    }
  }
}
</script>

<style scoped>

</style>