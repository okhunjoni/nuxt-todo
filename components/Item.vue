<script setup lang="ts">
defineProps<{
  item: {
    title: string;
    id: string;
    status: string;
    createdAt: string;
  };
  dataTest: string;
}>();
const emit = defineEmits(["edit", "delete"]);
</script>

<template>
  <div
    class="relative bg-white border mb-2 p-4 rounded flex gap-2 group"
    :data-test="dataTest"
  >
    <div class="truncate">
      <p class="truncate">
        {{ item.title }}
      </p>

      <p class="text-xs mt-2">
        Created:{{ new Date(item.createdAt).toLocaleDateString() }}
      </p>
    </div>
    <div
      class="absolute right-2 bg-white p-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200"
    >
      <BaseButton :data-test="`${dataTest}-edit`" @click="emit('edit')"
        >Edit</BaseButton
      >
      <BaseButton
        @click="emit('delete')"
        :data-test="`${dataTest}-delete`"
        variant="danger"
        >Delete</BaseButton
      >
    </div>
  </div>
</template>
