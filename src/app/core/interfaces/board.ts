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
