<script setup lang="ts">
import { useTodoList } from "./../composable";

const {
  termValue,
  modalOpen,
  editTerm,
  lists,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
  handleSaveItem,
  handleStartDrag,
  handleDrop,
} = useTodoList();
</script>

<template>
  <BaseModal v-model="modalOpen" @save="handleSaveItem">
    <template #body>
      <BaseInput v-model="editTerm" data-test="modal" />
    </template>
  </BaseModal>
  <div class="bg-gray-100 w-full p-4 rounded flex flex-col gap-4 mt-10">
    <div
      class="overflow-auto min-h-[500px] max-h-[500px] bg-white p-2 rounded grid grid-cols-5 gap-2"
    >
      <template v-for="listItem in lists" :key="listItem.index">
        <div
          class="col-span-1 bg-slate-200 p-2"
          @drop="handleDrop($event, listItem.index)"
          @dragover.prevent
          @dragenter.prevent
          :data-test="`${listItem.index}-drop`"
        >
          <p class="text-xl mb-2" :data-test="listItem.index">
            {{ listItem.title }} {{ listItem.list.length }}
          </p>
          <Item
            v-for="(item, index) in listItem.list"
            :key="item.id"
            :draggable="true"
            @dragstart="handleStartDrag($event, item)"
            :data-test="`${listItem.index}-${index}`"
            :item="item"
            @edit="handleEditItem(item)"
            @delete="handleDeleteItem(item)"
          />
        </div>
      </template>
    </div>

    <form @submit.prevent="handleAddItem">
      <BaseInput
        data-test="input"
        v-model="termValue"
        add
        @add-click="handleAddItem"
      />
    </form>
  </div>
</template>
