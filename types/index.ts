import { BACKLOG, DONE, TEST, TODO, PROGRESS } from "../constants";
type Status =
  | typeof BACKLOG
  | typeof TODO
  | typeof PROGRESS
  | typeof TEST
  | typeof DONE;

interface TodoItem {
  id: string;
  title: string;
  status: Status;
  createdAt: string;
  deletedAt: string | null;
}

export { TodoItem,Status };
