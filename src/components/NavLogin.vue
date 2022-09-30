<template>
    <div>
      <div v-if="isLogin">
        <b-button class="outline-secondary rounded-pill" to="/upload"> <b-icon icon="upload"></b-icon><a>업로드</a></b-button>

        <b-nav-item-dropdown class="col-md pl-4 user-dropdown text-center" no-caret right>
          <!-- Using 'button-content' slot -->
          <template #button-content >
            프로필 사진 여기에 넣을거임
          </template>
          <b-dropdown-item to="/">My JIDO</b-dropdown-item>
          <b-dropdown-item to="/">통계</b-dropdown-item>
          <b-dropdown-item to="/">로그아웃</b-dropdown-item>
        </b-nav-item-dropdown>
      </div>

      <div v-else>
        <b-button class="outline-secondary rounded-pill" to="/login/login"><a>로그인</a></b-button>
      </div>

    </div>
</template>

<script>
export default {
  name: "NavLogin",
  methods : {
    Logout() {
      this.$store.dispatch("loginStore/doLogout");
      this.$router.push('/');
    }
  },
  computed : {
    isLogin() {
      return this.$store.getters['loginStore/isLogin'];
    }
  }
}
</script>

<style scoped>

</style>