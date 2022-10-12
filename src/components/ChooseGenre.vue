<template>
    <b-form-group label-for="tags-component-select"  >
      <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
      <b-form-tags
          id="tags-component-select"
          v-model="value"
          size="lg"
          class=""
          add-on-change
          no-outer-focus
      >
        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                  @remove="removeTag(tag)"
                  :title="tag"
                  :disabled="disabled"
                  variant="secondary"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>
          <b-form-select
              style="border: white"
              v-bind="inputAttrs"
              v-on="inputHandlers"
              :disabled="disabled || availableOptions.length === 0"
              :options="availableOptions"
          >
            <template #first>
              <!-- This is required to prevent bugs with Safari -->
              <option disabled value="">활동분야를 선택해주세요. (최대 3개)</option>
            </template>
          </b-form-select>
        </template>
      </b-form-tags>
    </b-form-group>
</template>
<script>
export default {
  name: "SelectCountry",
  data() {
    return {
      options: ['일러스트','사진','회화','사운드','조소/공예','디자인','캘리그라피','그림책','애니메이션'],
      value: [], // Must be an array reference!
      noMore: false
    }
  },
  computed: {
    availableOptions() {
      return this.options.filter(opt => this.value.indexOf(opt) === -1)
    }
  }
}
</script>

<style scoped>

</style>