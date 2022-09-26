<template>
  <div class="pr-3 d-flex rounded-pill search border-secondary " >
    <b-nav-form>
      <b-button variant="transparent" size="sm" class="ml-2 my-sm-0 searchBtn" type="submit">
        <b-icon icon="search"></b-icon>
      </b-button>
      <b-form-input size="sm" class="border-0 searchInput" ></b-form-input>
    </b-nav-form>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>
.search{
  border: 1px solid #000;
}

.searchBtn:focus, .searchInput:focus{
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
}

.searchInput{
  width: auto;
}


</style>
