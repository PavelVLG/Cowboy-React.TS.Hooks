export interface IData {
  introductory: string | null;
  askDescription: string | null;
  task: { key: object | null; value: string | null } | null;
  infoElement: string[] | null;
  locationCells: { key: object | null; property: string | null } | null;
}
