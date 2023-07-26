<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(["update:modelValue", "save"]);

const modalOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const handleSave = () => {
  modalOpen.value = false;
  emit("save");
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modalOpen"
        class="modal-container fixed z-50 top-0 left-0 w-full h-full bg-gray-600/50 flex transition-opacity duration-300 ease-in"
      >
        <div
          class="w-96 m-auto p-4 bg-white rounded transition-all duration-300 ease-in"
        >
          <div class="flex justify-end">
            <BaseButton @click="modalOpen = false" variant="danger"
              >Close</BaseButton
            >
          </div>
          <div class="my-4">
            <p class="mb-4">Edit Item</p>
            <slot name="body"></slot>
          </div>

          <div class="flex justify-end">
            <BaseButton @click="handleSave" data-test="modal-save"
              >Save</BaseButton
            >
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
</style>
