<template>
  <div class="mb-1">
    <b-button class="btn align-self-center" variant="transparent" @click="isModalViewed">계정삭제</b-button>
  </div>
</template>

<script>
export default {
  name: "DeleteAccount",
  data() {
    return {
      modal: ''
    }
  },
  methods: {
    isModalViewed() {
      this.modal = ''
      this.$bvModal.msgBoxConfirm('회원님의 작품과 큐레이션 등 모든 정보가 삭제되며 복구할 수 없습니다.\n' +
          '또한 다른 사람에게 큐레이션된 작품, 사람들과 이야기 나눈 댓글도 모두 삭제됩니다.\n' +
          '단, 콜라보레이션에 당선된 작품은 별도로 보관됩니다. 이용약관 보기\n' +
          '외부로 공유된 회원님의 프로필 페이지와 작품 상세 페이지에 접속할 수 없습니다.\n' +
          '콘텐츠샵 판매자로 가입되어 있는 경우, 먼저 판매자 탈퇴가 되어야 그라폴리오 채널 삭제가 가능합니다.\n' +
          '​​후원 창작자센터에 가입되어 있는 경우, 먼저 창작자센터에서 탈퇴가 되어야 그라폴리오 채널 삭제가 가능합니다.', {
        title: '진심 계정 삭제하실?',
        size: 'lg',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: '계정삭제',
        cancelTitle: '취소',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        hideHeaderClose: false,
        centered: true
      })
          .then(value => {
            this.modal = value
          })
          .catch(err => {
            // An error occurred
          })
    }
  }
}
</script>

<style scoped>

</style>