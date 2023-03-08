import {ETaskStatus} from "../enums/task-status.enum";
import {ITask} from "./task";

export interface IBoard {
  id: number,
  name: string,
  description: string,
  position: number,
  projectId: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: boolean,
  columns: any[]
}

export interface Column {
  id: number;
  name: string;
  description: string;
  position: number;
  taskStatus: ETaskStatus;
  boardId: number;
  board: string;
  tasks: ITask[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
