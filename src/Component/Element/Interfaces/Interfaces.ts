export interface IData {
  introductory: string | null;
  taskDescription: string | null;
  task: { key: object; value: string } | null;
  infoElement: string[] | null;
  locationCells: { key: object; property: string } | null;
}
 