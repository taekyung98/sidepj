<template>
  <div class="mb-1">
    <b-button class="btn align-self-center" variant="transparent" v-b-modal.modal-prevent-closing >계정삭제</b-button>

    <b-modal
        id="modal-prevent-closing"
        title="계정삭제하실?"
        ref="modal"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        size="lg"
        centered
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
            invalid-feedback="내용을 숙지한 다음 약관에 동의해 주세요."
            :state="checkState"
        >

            <br>

              <div CLASS="d-flex">
                <b-icon icon="check-lg" style="color: #545b62;" class="col-sm-1"></b-icon>
                <p>회원님의 작품과 큐레이션 등 모든 정보가 삭제되며 복구할 수 없습니다.</p>
              </div>
              <div CLASS="d-flex">
                <b-icon icon="check-lg" style="color: #545b62;" class="col-sm-1"></b-icon>
                <p>또한 다른 사람에게 큐레이션된 작품, 사람들과 이야기 나눈 댓글도 모두 삭제됩니다.</p>
              </div>
              <div CLASS="d-flex">
                <b-icon icon="check-lg" style="color: #545b62;" class="col-sm-1"></b-icon>
                <p>단, 콜라보레이션에 당선된 작품은 별도로 보관됩니다. <a href="#" >이용약관 보기</a></p>
              </div>
              <div CLASS="d-flex">
                <b-icon icon="check-lg" style="color: #545b62;" class="col-sm-1"></b-icon>
                <p>외부로 공유된 회원님의 프로필 페이지와 작품 상세 페이지에 접속할 수 없습니다.</p>
              </div>
              <div CLASS="d-flex">
                <b-icon icon="check-lg" style="color: #545b62;" class="col-sm-1"></b-icon>
                <p>콘텐츠샵 판매자로 가입되어 있는 경우, 먼저 판매자 탈퇴가 되어야 그라폴리오 채널 삭제가 가능합니다.</p>
              </div>
              <div CLASS="d-flex">
                <b-icon icon="check-lg" style="color: #545b62;" class="col-sm-1"></b-icon>
                <p>후원 창작자센터에 가입되어 있는 경우, 먼저 창작자센터에서 탈퇴가 되어야 그라폴리오 채널 삭제가 가능합니다.</p>
              </div>

               <br>

              <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  :state="checkState"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
              >
                위의 내용을 숙지했으며 채널 삭제에 동의합니다.
              </b-form-checkbox>
          <br>
        </b-form-group>
      </form>

    </b-modal>

  </div>
</template>

<script>
export default {
  name: "DeleteAccount",
  data() {
    return {
      status: 'not_accepted',
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.status = 'not_accepted'
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>

<style scoped>

</style>