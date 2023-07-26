<script setup lang="ts">
import {computed} from 'vue'
const props = withDefaults(
  defineProps<{
    dataTest?: string;
    variant: "primary" | "danger";
  }>(),
  { variant: "primary" }
);

const variantClass = computed(() => {
  if (props.variant === "danger") {
    return "bg-rose-500";
  }

  return "bg-blue-500";
});
</script>

<template>
  <button
    :data-test="dataTest"
    :class="[variantClass]"
    class="p-2 text-white rounded"
  >
    <slot />
  </button>
</template>
