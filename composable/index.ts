import { ref } from "vue";
import { useTodoListStore } from "./../store";
import { storeToRefs } from "pinia";
import { nanoid } from "nanoid";
import { TodoItem, Status } from "types";
import { BACKLOG } from "./../constants";

export const useTodoList = () => {
  const store = useTodoListStore();
  const { todoItems, lists } = storeToRefs(store);
  const { addTodoItem } = store;
  const termValue = ref("");
  const editTerm = ref("");
  const editItem = ref<TodoItem>();
  const modalOpen = ref(false);

  const handleAddItem = () => {
    if (termValue.value) {
      const payload: TodoItem = {
        title: termValue.value,
        status: BACKLOG,
        id: nanoid(),
        createdAt: new Date().toISOString(),
        deletedAt: null,
      };
      addTodoItem(payload);
      termValue.value = "";
    }
  };

  const handleEditItem = (item: TodoItem) => {
    editTerm.value = item.title;
    editItem.value = item;
    modalOpen.value = true;
  };

  const handleDeleteItem = (item: TodoItem) => {
    todoItems.value = todoItems.value.map((el) =>
      el.id === item?.id ? { ...el, deletedAt: new Date().toISOString() } : el
    );
  };

  const handleSaveItem = () => {
    todoItems.value = todoItems.value.map((el) =>
      el.id === editItem.value?.id ? { ...el, title: editTerm.value } : el
    );
  };

  const handleStartDrag = (evt: any, item: TodoItem) => {
    evt.dataTransfer.dropEffect = "move";
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("itemID", item.id);
  };

  const handleDrop = (evt: any, list: Status) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = todoItems.value.find((item) => item.id == itemID);

    if (item) item.status = list;
  };

  return {
    termValue,
    modalOpen,
    editTerm,
    editItem,
    lists,
    todoItems,
    handleAddItem,
    handleEditItem,
    handleDeleteItem,
    handleSaveItem,
    handleStartDrag,
    handleDrop,
  };
};
