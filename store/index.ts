import { defineStore } from "pinia";
import { BACKLOG, DONE, TEST, TODO, PROGRESS } from "./../constants";
import { TodoItem, Status } from "types";

export const useTodoListStore = defineStore("todolist", {
  state: () => ({
    todoItems: [] as TodoItem[],
  }),
  getters: {
    lists: (state): { index: Status; list: TodoItem[]; title: string }[] => [
      {
        title: "Backlogs",
        list: state.todoItems.filter(
          (el) => el.status === BACKLOG && !el.deletedAt
        ),
        index: BACKLOG,
      },
      {
        title: "Todos",
        list: state.todoItems.filter(
          (el) => el.status === TODO && !el.deletedAt
        ),
        index: TODO,
      },
      {
        title: "In Progress",
        list: state.todoItems.filter(
          (el) => el.status === PROGRESS && !el.deletedAt
        ),
        index: PROGRESS,
      },
      {
        title: "Tests",
        list: state.todoItems.filter(
          (el) => el.status === TEST && !el.deletedAt
        ),
        index: TEST,
      },
      {
        title: "Dones",
        list: state.todoItems.filter(
          (el) => el.status === DONE && !el.deletedAt
        ),
        index: DONE,
      },
    ],
  },

  actions: {
    addTodoItem(payload: TodoItem) {
      this.todoItems.push(payload);
    },
  },
});
