<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string;
  add?: boolean;
  dataTest: string;
}>();
const emit = defineEmits(["update:modelValue", "addClick"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const handleAddClick = () => {
  emit("addClick");
};
</script>

<template>
  <div class="relative w-full">
    <input
      :data-test="dataTest"
      class="w-full border focus:outline-none py-4 pl-4 pr-10 rounded-2xl focus:border-blue-900 focus:outline-2 focus:ring-2 focus:ring-offset-none focus:ring-blue-300"
      type="text"
      v-model="value"
    />
    <BaseButton
      v-if="add"
      @click="handleAddClick"
      data-test="add-button"
      class="absolute right-3 top-1/2 -translate-y-1/2 p-2"
      >Add</BaseButton
    >
  </div>
</template>
