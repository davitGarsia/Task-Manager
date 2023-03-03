import {IProject} from "./iproject";
import {ITask} from "./task";
import {TaskStatusEnum} from "../enums/task-status.enum";

export interface IBoard {
  id: number;
  name: string;
  description: string;
  position: number;
  projectId: number;
  project:IProject;
  columns: Column[];
  tasks: ITask;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}


  export interface Column {
    id: number;
    name: string;
    description: string;
    position: number;
    boardId: number;
    board: string;
    tasks: Task[];
    taskStatus: TaskStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  }








